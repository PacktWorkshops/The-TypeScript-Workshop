import { injectable } from "inversify";
import { Logger } from "./logger.interface";

@injectable()
export class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(message);
  }
}
