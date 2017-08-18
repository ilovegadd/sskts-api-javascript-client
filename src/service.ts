/**
 * base service class
 */

import ImplicitGrantClient from './auth/implicitGrantClient';

export interface IOptions {
    endpoint: string;
    auth: ImplicitGrantClient;
}

export class Service {
    public options: IOptions;

    constructor(options: IOptions) {
        this.options = options;
    }
}
