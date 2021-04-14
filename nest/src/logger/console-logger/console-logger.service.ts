import { Injectable } from '@nestjs/common';
import { ILogger } from '../ILogger';

@Injectable()
export class ConsoleLoggerService implements ILogger {
    error(msg: string): void {
        console.log(msg)
    }

    warn(msg: string): void {
        console.log(msg)
    }
    
    info(msg: string): void {
        console.log(msg)
    }
}
