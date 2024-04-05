import { request } from "@strapi/helper-plugin";

const todoRequests = {
    getAllTodos: async () => {
        return await request("/todo/find", {
            method: "GET",
        });
    },

    toggleTodo: async (id: any) => {
        return await request(`/todo/toggle/${id}`, {
            method: "PUT",
        });
    },

    editTodo: async (id: any, data: any) => {
        return await request(`/todo/update/${id}`, {
            method: "PUT",
            body: {data: data},
        });
    },

    deleteTodo: async (id: any) => {
        return await request(`/todo/delete/${id}`, {
            method: "DELETE",
        });
    },

    addTodo: async (data: any) => {
        return await request(`/todo/create`, {
            method: "POST",
            body: {data: data}
        });
    },

    getAllTodos: async () => {
        return await request("/todo/find", {
            method: "GET",
        });
    },

    getAllTodos: async () => {
        return await request("/todo/find", {
            method: "GET",
        });
    },
};

export default todoRequests;