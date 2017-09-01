import { ImplicitGrantClient } from './auth/implicitGrantClient';
export interface IOptions {
    endpoint: string;
    auth: ImplicitGrantClient;
}
/**
 * base service class
 * @class
 */
export declare class Service {
    options: IOptions;
    constructor(options: IOptions);
}
