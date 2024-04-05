import todoMiddleware from "../middlewares/todo-middleware";

export default [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
      auth: false,
      middlewares: [todoMiddleware]
    },
  },
  // get all todos
  {
    method: 'GET',
    path: '/find',
    handler: 'todo.find',
    config: {
      policies: [],
    },
  },
  // update todo
  {
    method: 'PUT',
    path: '/update/:id',
    handler: 'todo.update',
    config: {
      policies: [],
    },
  },
  // create todo
  {
    method: 'POST',
    path: '/create',
    handler: 'todo.create',
    config: {
      policies: ["plugin::todo.isOwnerReview"],
      middlewares: [todoMiddleware]
    },
  },
  // delete todo
  {
    method: 'DELETE',
    path: '/delete/:id',
    handler: 'todo.delete',
    config: {
      policies: [],
    },
  },


  // update toggle
  {
    method: 'PUT',
    path: '/toggle/:id',
    handler: 'todo.toggle',
    config: {
      policies: [],
    },
  },

  

  
];
