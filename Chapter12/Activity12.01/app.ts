import { createServer, IncomingMessage, Server, ServerResponse } from 'http';

import { PromiseDB } from './db';
import { promiseRouter } from './router';

class App {
  public db: PromiseDB;
  private server: Server;

  constructor(private port: number) {
    this.db = new PromiseDB();
    this.server = createServer(this.requestHandler);
  }

  initialize = () => {
    return Promise.all([
      this.db.initialize(),
      new Promise((resolve) =>
        this.server.listen(this.port, () => resolve(true))
      ),
    ]).then(() => console.log('Application is ready!'));
  };

  handleError = (
    res: ServerResponse,
    statusCode = 500,
    message = 'Internal Server Error.'
  ) => res.writeHead(statusCode).end(message);

  requestHandler = (req: IncomingMessage, res: ServerResponse) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'DELETE, GET, OPTIONS, POST, PUT'
    );
    if (req.method === 'OPTIONS') {
      return res.end();
    }
    const urlParts = req.url?.split('/') ?? '/';
    switch (urlParts[1]) {
      case 'promise':
        return promiseRouter(req, res);
      default:
        return this.handleError(res, 404, 'Not Found.');
    }
  };
}

export const app = new App(3000);

app.initialize();
