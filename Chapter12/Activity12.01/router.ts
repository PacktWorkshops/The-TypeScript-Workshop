import { IncomingMessage, ServerResponse } from 'http';

import { app } from './app';
import { PromiseModel } from './db';

const parseBody = (req: IncomingMessage): Promise<PromiseModel> => {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => {
      try {
        resolve(JSON.parse(body));
      } catch (e) {
        reject(e);
      }
    });
  });
};

const handleCreate = (req: IncomingMessage, res: ServerResponse) =>
  parseBody(req)
    .then((body) => app.db.create(body).then(() => res.end()))
    .catch((err) => app.handleError(res, 500, err.message));

const handleDelete = (requestParam: number, res: ServerResponse) =>
  app.db
    .delete(requestParam)
    .then(() => res.end())
    .catch((err) => app.handleError(res, 500, err.message));

const handleGetAll = (res: ServerResponse) =>
  app.db
    .getAll()
    .then((data) => res.end(JSON.stringify(data)))
    .catch((err) => app.handleError(res, 500, err.message));

const handleGetOne = (requestParam: number, res: ServerResponse) =>
  app.db
    .getOne(requestParam)
    .then((data) => res.end(JSON.stringify(data)))
    .catch((err) => app.handleError(res, 500, err.message));

const handleUpdate = (req: IncomingMessage, res: ServerResponse) =>
  parseBody(req)
    .then((body) => app.db.update(body).then(() => res.end()))
    .catch((err) => app.handleError(res, 500, err.message));

export const promiseRouter = (req: IncomingMessage, res: ServerResponse) => {
  const urlParts = req.url?.split('/') ?? '/';
  const requestParam = urlParts[2];
  res.setHeader('Content-Type', 'application/json');
  switch (req.method) {
    case 'DELETE':
      if (requestParam) {
        return handleDelete(Number.parseInt(requestParam), res);
      }
    case 'GET':
      if (requestParam) {
        return handleGetOne(Number.parseInt(requestParam), res);
      }
      return handleGetAll(res);
    case 'POST':
      return handleCreate(req, res);
    case 'PUT':
      return handleUpdate(req, res);
    default:
      app.handleError(res, 404, 'Not Found.');
  }
};
