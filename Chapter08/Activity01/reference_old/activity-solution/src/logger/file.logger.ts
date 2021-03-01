import fs from "fs";
import { injectable } from "inversify";
import { Logger } from "../interfaces/logger.interface";

@injectable()
export class FileLogger implements Logger {
  private readonly loggerPath: string = "/tmp/calculator.log";

  log(message: string, ...args: any[]) {
    this.logInternal("LOG", message, args);
  }

  warn(message: string, ...args: any[]) {
    this.logInternal("WARN", message, args);
  }

  error(message: string, ...args: any[]) {
    this.logInternal("ERROR", message, args);
  }

  private logInternal(level: string, message: string, ...args: any[]) {
    fs.appendFileSync(
      this.loggerPath,
      this.logLineFormatter(level, message, args)
    );
  }

  private logLineFormatter(level: string, message: string, ...args: any[]) {
    return `[${level}]: ${message}${args}\n`;
  }
}
