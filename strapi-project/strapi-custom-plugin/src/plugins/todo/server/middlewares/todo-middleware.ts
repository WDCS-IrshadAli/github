// 'use strict';

/**
 * `todo-middleware` middleware
 */

export default (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In todo-middleware middleware.');
    console.log("aaaaaaaaaaaaaaaaaaaa", ctx);
    
    await next();
  };
};

