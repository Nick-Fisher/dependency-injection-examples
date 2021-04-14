import { Module } from '@nestjs/common';
import { ConsoleLoggerService } from './console-logger/console-logger.service';
import { PinoLoggerService } from './pino-logger/pino-logger.service';

@Module({
  providers: [ConsoleLoggerService, PinoLoggerService]
})
export class LoggerModule {}
