import { injectable } from "inversify";
import { Logger } from "../interfaces/logger.interface";

@injectable()
export class ConsoleLogger implements Logger {
  log(message: string, ...args: any[]) {
    console.log("[LOG]", message, ...args);
  }

  warn(message: string, ...args: any[]) {
    console.warn("[WARN]", message, ...args);
  }

  error(message: string, ...args: any[]) {
    console.error("[ERROR]", message, ...args);
  }
}
