import { Injectable } from '@nestjs/common';
import { promises } from 'fs';
import { resolve } from 'path';

@Injectable()
export class AppService {
  async getHello(name: string): Promise<string> {
    if (name) {
      await this.writeLog(name);
    }
    return `Hello ${name}!`;
  }
  writeLog(name: string): Promise<void> {
    return promises.appendFile(resolve(__dirname, 'names.txt'), `${name}\n`);
  }
}
