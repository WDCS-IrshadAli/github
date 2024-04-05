module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',

  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  'global::relation-middleware', 

  // {
  //   resolve: "./src/middlewares/relation-middleware.js",
  //   config: {
  //     enabled: true,
  //     conf: {},
  //   },
  // },
  // custom name to find a package or a path
  // {
  //   name: 'my-custom-node-module',
  //   config: {
  //     foo: 'bar',
  //   },
  // },
];
