import { ServiceLocator } from "./serviceLocator";
import { ILogger } from "./ILogger";

interface IPaymentService {
    sendMoney: (logger: ILogger) => boolean;
}

export class PaymentService implements IPaymentService {
    constructor() {}
    
    sendMoney() {
        const logger: ILogger = ServiceLocator.getService<ILogger>('logger');
        logger.info('Info');
        return true;
    }
}
