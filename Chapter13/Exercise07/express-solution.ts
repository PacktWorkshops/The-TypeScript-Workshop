import express, { Request, Response } from 'express';
import { promises } from 'fs';
import { resolve } from 'path';

const app = express();

app.get('/', async (req: Request, res: Response) => {
  const { name } = req.query;
  if (name) {
    await promises.appendFile(resolve(__dirname, 'names.txt'), `${name}\n`);
  }
  res.send(`Hello ${name ?? 'World'}!`);
});

app.listen(8888);
