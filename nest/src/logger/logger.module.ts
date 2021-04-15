import { Module } from '@nestjs/common';
import { ConsoleLoggerService } from './console-logger/console-logger.service';
import { LOGGER_TOKEN } from './constants';
import { PinoLoggerService } from './pino-logger/pino-logger.service';

@Module({
  providers: [ConsoleLoggerService, PinoLoggerService, 
    { 
      provide: LOGGER_TOKEN,
      useFactory: (consoleLoggerService, pinoLoggerService) => {
        return process.env.NODE_ENV === 'production'
          ? pinoLoggerService
          : consoleLoggerService;
      },
      inject: [ConsoleLoggerService, PinoLoggerService]
    }],
  exports: [LOGGER_TOKEN]
})
export class LoggerModule {}
