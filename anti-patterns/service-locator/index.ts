import { PaymentService } from './paymentService';
import { ConsoleLogger } from "./console-logger";
import { FakeLogger } from "./fake-logger";
import { ServiceLocator } from './serviceLocator';

const logger = process.env.NODE_ENV === 'production'
            ? new FakeLogger()
            : new ConsoleLogger()

ServiceLocator.register('logger', logger);           

const paymentService = new PaymentService();

paymentService.sendMoney();

