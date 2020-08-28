import "reflect-metadata";

import { inject, injectable } from "inversify";
import { container } from "./ioc.config";
import { Logger } from "./logger.interface";
import { TYPES } from "./types";

@injectable()
class Main {
  constructor(@inject(TYPES.Logger) private logger: Logger) {}

  run() {
    this.logger.log("Hello from InversifyJS!");
  }
}

// Run the app:
const main = container.resolve(Main);
main.run();
