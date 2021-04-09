import { injectable } from "inversify";
import { ILogger } from "./ILogger";
import "reflect-metadata";


@injectable()
export class ConsoleLogger implements ILogger {
    error(msg: string): void {
        console.log(msg);
    }
    warn(msg: string): void {
        console.log(msg);
    }
    info(msg: string): void {
        console.log(msg);
    }
}