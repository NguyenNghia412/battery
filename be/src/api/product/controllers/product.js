'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) => ({
    // Query by slug
    async findOne(ctx) {
        // thanks to the custom route we have now a slug variable
        // instead of the default id
        const slug = ctx.params?.id;
        console.log(slug);
        const entity = await strapi.db.query('api::product.product').findOne({
            where: { slug }
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    },
}));
