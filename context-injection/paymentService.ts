import { Context } from "./context";
import { ILogger } from "./ILogger";

interface IPaymentService {
    sendMoney: (logger: ILogger) => boolean;
}

export class PaymentService implements IPaymentService {
    constructor() {}
    
    sendMoney() {
        const logger: ILogger = Context.logger;
        logger.info('Info');
        return true;
    }
}
