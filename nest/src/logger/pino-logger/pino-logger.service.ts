import { Injectable } from '@nestjs/common';
import { ILogger } from '../ILogger';

@Injectable()
export class PinoLoggerService implements ILogger {
    error(msg: string): void {
        
    }

    warn(msg: string): void {
        
    }
    
    info(msg: string): void {
        
    }
}