import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Relou Uords' });
});

export default routes;