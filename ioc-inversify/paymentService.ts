import { inject, injectable } from "inversify";
import { ILogger } from "./ILogger";
import "reflect-metadata";

interface IPaymentService {
    sendMoney: (logger: ILogger) => boolean;
}

@injectable()
export class PaymentService implements IPaymentService {
    constructor(@inject('logger') private readonly _logger: ILogger) {}
    
    sendMoney() {
        const logger: ILogger = this._logger;
        logger.info('Info');
        return true;
    }
}
