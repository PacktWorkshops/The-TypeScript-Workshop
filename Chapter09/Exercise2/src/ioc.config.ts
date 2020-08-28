import { Container } from "inversify";
import { ConsoleLogger } from "./console-logger";
import { Logger } from "./logger.interface";
import { TYPES } from "./types";

export const container = new Container();

container.bind<Logger>(TYPES.Logger).to(ConsoleLogger);
