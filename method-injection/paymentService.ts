import { ILogger } from "./ILogger";

interface IPaymentService {
    sendMoney: (logger: ILogger) => boolean;
}

export class PaymentService implements IPaymentService {
    constructor() {}
    
    sendMoney(logger: ILogger) {
        logger.info('Info');
        return true;
    }
}
