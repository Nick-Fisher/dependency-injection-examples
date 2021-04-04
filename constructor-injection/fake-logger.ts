import { ILogger } from "./ILogger";

export class FakeLogger implements ILogger {
    error(msg: string): void {
    }
    warn(msg: string): void {
    }
    info(msg: string): void {
    }
}