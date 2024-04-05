import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: any }) => ({
  async find(query: any) {
    return await strapi.entityService.findMany("plugin::todo.todo", query);
  },

  async delete(id: any) {
    return await strapi.entityService.delete("plugin::todo.todo", id);
  },

  async create(data: any) {        
    return await strapi.entityService.create("plugin::todo.todo", data);
  },

  async update(id: any, data: any) {
    return await strapi.entityService.update("plugin::todo.todo", id, data);
  },

  async toggle(id: any) {
    const result = await strapi.entityService.findOne("plugin::todo.todo", id);
    return await strapi.entityService.update("plugin::todo.todo", id, { data: {isDone: !result.isDone}});
  }
});
