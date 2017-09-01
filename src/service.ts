import { ImplicitGrantClient } from './auth/implicitGrantClient';

export interface IOptions {
    endpoint: string;
    auth: ImplicitGrantClient;
}

/**
 * base service class
 * @class
 */
export class Service {
    public options: IOptions;

    constructor(options: IOptions) {
        this.options = options;
    }
}
