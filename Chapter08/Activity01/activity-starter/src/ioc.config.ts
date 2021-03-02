// ioc.config.ts
import { Container } from 'inversify';
import { Calculator } from './calculator/index';
import { Operator } from './interfaces/operator.interface';
import * as Operators from './operators';
import { TYPES } from './types';

export const container = new Container();

Object.values(Operators).forEach(Operator => {
    container.bind<Operator>(TYPES.Operator).to(Operator);
});

container.bind(Calculator).toSelf();


