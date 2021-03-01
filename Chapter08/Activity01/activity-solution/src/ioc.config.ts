import { Container } from "inversify";
import { Calculator } from "./calculator";
import { Logger } from "./interfaces/logger.interface";
import { Operator } from "./interfaces/operator.interface";
import { FileLogger } from "./logger/file.logger";
import * as Operators from "./operators";
import { TYPES } from "./types";

export const container = new Container();

Object.values(Operators).forEach(Operator => {
  container.bind<Operator>(TYPES.Operator).to(Operator);
});

container.bind(Calculator).toSelf();

container.bind<Logger>(TYPES.Logger).to(FileLogger);
