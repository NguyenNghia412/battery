'use strict';

/**
 * product-category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product-category.product-category', ({ strapi }) => ({
    // Query by slug
    async findOne(ctx) {
        // thanks to the custom route we have now a slug variable
        // instead of the default id
        const slug = ctx.params?.id;
        console.log(ctx.query);
        const entity = await strapi.db.query('api::product-category.product-category').findOne({
            where: { slug },
            populate: ctx.query.populate,
        })
        console.log(entity);
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    },
}));
