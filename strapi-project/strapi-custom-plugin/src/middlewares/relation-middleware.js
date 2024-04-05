const jwt = require("jsonwebtoken");

module.exports = (config, { strapi })=> {
    return async (context, next) => {

        try {
            // console.log("body = ", context);

            if (context.request.url.startsWith("/api") && context.request.header.authorization) {
                const bearertoken = context.request.header.authorization.split("Bearer ")[1];
                    
                    const apiTokenService = strapi.services["admin::api-token"];
                    const accessKey = await apiTokenService.hash(bearertoken);
                    const storedToken = await apiTokenService.getBy({
                        accessKey: accessKey,
                    });
                    console.log("STORED TOKEN = ", storedToken);
                    if (!storedToken) {
                        const decodeToken = await strapi.plugins['users-permissions'].services.jwt.verify(bearertoken);
                        let user = await strapi.db.query('plugin::users-permissions.user').findOne({
                            where: { id: decodeToken.id },
                            populate: ["organization_id"]
                        });

                        let par = context.request.url.includes("?");
                        if (context.request.method === "GET") {
                            context.request.url = `${context.request.url}${par ? "&" : "?"}filters[organization_id][name]=${user.organization_id.name}&populate=*`;
                        } else if (context.request.method === "POST") {
                            console.log("zzzzzzzzzzzzzzzzzzzzzz", context.request.body);
                            context.request.body = {
                                data: {
                                    ...context.request.body.data,
                                    organization_id: user.organization_id.id,
                                    user_id: user.id
                                }
                            }
                        }
                        console.log("USER = ", user);
                    }
            }
            return next()
        } catch (err) {
            context.throw(401, 'Unauthorized');
        }
    };
}































// module.exports = (config, { strapi })=> {
//     return (context, next) => {
//         // console.log("skcfgweifgiweg", context.request.url);
//         // context.request.url = `${context.request.url}?filters[organization_id][name]=codezeros`;
//         console.log("new    = ", context);
//         return next()
//     };
// }