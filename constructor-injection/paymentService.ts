import { ILogger } from "./ILogger";

interface IPaymentService {
    sendMoney: () => boolean;
}

export class PaymentService implements IPaymentService {
    constructor(private readonly _logger: ILogger) {}
    
    sendMoney() {
        this._logger.info('Info');
        return true;
    }
}
