import { Database } from 'sqlite';
import sqlite from 'sqlite3';

export interface PromiseModel {
  id: number;
  desc: string;
}

export class PromiseDB {
  private db: Database;
  private initialized = false;
  constructor() {
    this.db = new Database({
      driver: sqlite.Database,
      filename: ':memory:',
    });
  }

  initialize = () => {
    if (this.initialized) {
      return Promise.resolve(true);
    }
    return this.db
      .open()
      .then(() =>
        this.db
          .run('CREATE TABLE promise (id INTEGER PRIMARY KEY, desc CHAR);')
          .then(() => (this.initialized = true))
      );
  };

  create = (payload: PromiseModel) =>
    this.db.run('INSERT INTO promise (desc) VALUES (?);', payload.desc);

  delete = (id: number) => this.db.run('DELETE FROM promise WHERE id = ?', id);

  getAll = () => this.db.all<PromiseModel[]>('SELECT * FROM promise;');

  getOne = (id: number) =>
    this.db.get<PromiseModel>('SELECT * FROM promise WHERE id = ?', id);

  update = (payload: PromiseModel) =>
    this.db.run(
      'UPDATE promise SET desc = ? where id = ?',
      payload.desc,
      payload.id
    );
}
