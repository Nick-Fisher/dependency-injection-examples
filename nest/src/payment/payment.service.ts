import { Injectable } from '@nestjs/common';
import { ILogger } from 'src/logger/ILogger';

@Injectable()
export class PaymentService {
    constructor(private readonly _logger: ILogger) {}
    sendMoney() {
        this._logger.info('Info');
        return true;
    }
}
