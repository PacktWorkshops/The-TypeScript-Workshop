import { promises } from 'fs';
import { resolve } from 'path';

Promise.all([
  promises.readFile(resolve(__dirname, 'file1.txt')),
  promises.readFile(resolve(__dirname, 'file2.txt')),
]).then((files) => {
  promises.writeFile(resolve(__dirname, 'output.txt'), files.join('\n'));
});
