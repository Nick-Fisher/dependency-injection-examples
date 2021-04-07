import { PaymentService } from './paymentService';
import { ConsoleLogger } from "./console-logger";
import { FakeLogger } from "./fake-logger";
import { Context } from './context';

const logger = process.env.NODE_ENV === 'production'
            ? new FakeLogger()
            : new ConsoleLogger()

Context.logger = logger;           

const paymentService = new PaymentService();

paymentService.sendMoney();

