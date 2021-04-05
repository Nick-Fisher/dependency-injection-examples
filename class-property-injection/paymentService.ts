import { ConsoleLogger } from "./console-logger";
import { ILogger } from "./ILogger";

interface IPaymentService {
    sendMoney: () => boolean;
}

export class PaymentService implements IPaymentService {
    public logger!: ILogger;
    constructor() {
        this.logger = new ConsoleLogger();
    }
    
    sendMoney() {
        this.logger.info('Info');
        return true;
    }
}
