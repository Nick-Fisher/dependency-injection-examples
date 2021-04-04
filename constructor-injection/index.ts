import { PaymentService } from './paymentService';
import { ConsoleLogger } from "./console-logger";
import { FakeLogger } from "./fake-logger";

const logger = process.env.NODE_ENV === 'production'
            ? new FakeLogger()
            : new ConsoleLogger()

const paymentService = new PaymentService(logger);

paymentService.sendMoney();

