import { Inject, Injectable } from '@nestjs/common';
import { LOGGER_TOKEN } from 'src/logger';
import { ILogger } from 'src/logger/ILogger';

@Injectable()
export class PaymentService {
    constructor(@Inject(LOGGER_TOKEN) private readonly _logger: ILogger) {}
    sendMoney() {
        this._logger.info('Info');
        return true;
    }
}
