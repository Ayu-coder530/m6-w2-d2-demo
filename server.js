import { setupWorker, rest } from 'msw';

const todos = [
  { id: 1, text: 'Learn Redux', completed: false },
  { id: 2, text: 'Build a Todo app', completed: false }
];

export const handlers = [
  rest.get('/fakeApi/todos', (req, res, ctx) => {
    return res(ctx.json({ todos }));
  }),
  rest.post('/fakeApi/todos', (req, res, ctx) => {
    const todo = req.body;
    todos.push(todo);
    return res(ctx.json({ todo }));
  })
];

export const worker = setupWorker(...handlers);
