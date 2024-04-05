export default {
    // get all controller (todo.find)
    async find (ctx: any) {
        try {
            return await strapi.plugin("todo").service("todo").find(ctx.query);
        } catch (err) {
            ctx.throw(500, err);
        }
    },
    
    // update todo controller
    async update (ctx: any) {
        try {
            ctx.body = await strapi.plugin("todo").service("todo").update(ctx.params.id, ctx.request.body);
            // return await strapi.plugin("todo").service("todo").find(ctx.query);
        } catch (err) {
            ctx.throw(500, err);
        }
    },

    // delete todo controller
    async delete (ctx: any) {
        try {
            ctx.body = await strapi.plugin("todo").service("todo").delete(ctx.params.id);
            // return await strapi.plugin("todo").service("todo").find(ctx.query);
        } catch (err) {
            ctx.throw(500, err);
        }
    },

    // create todo controller
    async create (ctx: any) {
        try {            
            ctx.body = await strapi.plugin("todo").service("todo").create(ctx.request.body);
        } catch (err) {            
            ctx.throw(500, err);
        }
    },

    // toggle update for todos (isDone: true/false)
    async toggle (ctx: any) {
        try {
            // return await strapi.plugin("todo").service("todo").find(ctx.query);
            ctx.body = await strapi.plugin("todo").service("todo").toggle(ctx.params.id);
        } catch (err) {
            ctx.throw(500, err);
        }
    }
}