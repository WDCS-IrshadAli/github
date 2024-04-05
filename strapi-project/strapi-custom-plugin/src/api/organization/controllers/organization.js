'use strict';

/**
 * organization controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::organization.organization');

module.exports = createCoreController('api::organization.organization', ({ strapi }) => ({
    // async find(ctx) {

    //     const { data, meta } = await super.find(ctx);
    //     const query = strapi.db.query('api::organization.organization');

    //     await Promise.all(
    //         data.map(async (item, index) => {
    //             // console.log("ITEM =- ", item.id);
    //             const relation = await query.findOne({
    //                 where: {
    //                     id: item.id,
    //                 },
    //                 populate: ['faq', 'user'],
    //             });
    //             data[index].attributes.faq = relation.faq;
    //             data[index].attributes.user = relation.user;
    //         })
    //     );
    //     return { data, meta };
    // },
 
}))