const isAuthenticated = (ctx: any, config, { strapi }) => {
  // Check if user is authenticated
  if (!ctx.state.user) {
    return false
    ctx.throw(401, 'You must be logged in to access this resource.');
  }
console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK", ctx.state.user);

  // User is authenticated, continue to the next middleware or controller action
  return true
};

export default isAuthenticated;