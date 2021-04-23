export class ServiceLocator {
    private static _dictionary: Map<string, any> = new Map();

    static register(key: string, instance: any) {
        this._dictionary.set(key, instance);
    }

    static getService<T>(key: string): T {
        return this._dictionary.get(key);
    }
}
