'use strict';

/**
 * faq controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::faq.faq');

// ---if you want to modify strapi controller function
module.exports = createCoreController('api::faq.faq', ({ strapi }) => ({
    /**
     * Example 1: Modifying a Strapi controller function
     *
     * If you need to modify the input or output of a pre-defined Strapi controller method,
     * write a method of the same name, and use `super` to call the parent method.
     * */

    // async find(ctx) {

    //     const { data, meta } = await super.find(ctx);

    //     const query = strapi.db.query('api::faq.faq');

    //     console.log("aaaaaaa", query);

    //     await Promise.all(
    //         data.map(async (item, index) => {
    //             const faq = await query.findOne({
    //                 where: {
    //                     id: item.id,
    //                 },
    //                 populate: ['createdBy'],
    //             });
    //             console.log("aaaaaaaaaaaaaaaaaaaaa", faq);
    //             data[index].attributes.createdBy = {
    //                 id: faq.createdBy.id,
    //                 firstname: faq.createdBy.firstname,
    //                 lastname: faq.createdBy.lastname,
    //             };
    //         })
    //     );

    //     return { data, meta };

    // },

    // async create(ctx) {
    //     const {id} = ctx.state.user; //ctx.state.user contains the current authenticated user
    
    //     const response = await super.create(ctx);
    //     const updatedResponse = await strapi.entityService.update('api::faq.faq', response.data.id, {data: {user_id: id}})
    //     return updatedResponse;
    //   },
    
}))