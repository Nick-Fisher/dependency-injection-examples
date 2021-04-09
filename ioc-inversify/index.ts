import { PaymentService } from './paymentService';
import { ConsoleLogger } from "./console-logger";
import { Container } from 'inversify';
import { ILogger } from './ILogger';

const myContainer = new Container();

const logger = new ConsoleLogger();

myContainer.bind<ILogger>('logger').to(ConsoleLogger);
myContainer.bind(PaymentService).toSelf();   

const paymentService = myContainer.get(PaymentService);
paymentService.sendMoney();

