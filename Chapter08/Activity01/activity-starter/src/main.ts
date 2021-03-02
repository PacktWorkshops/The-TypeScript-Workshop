import 'reflect-metadata';

import { Calculator } from './calculator';
import { container } from './ioc.config';

const calculator = container.get(Calculator);

try {
    const result = calculator.evaluate('13*10+20');
    console.log('result is', result);
} catch (err) {
    console.error(err);
}
