/**
 * base service class
 */
import { ImplicitGrantClient } from './auth/implicitGrantClient';
export interface IOptions {
    endpoint: string;
    auth: ImplicitGrantClient;
}
export declare class Service {
    options: IOptions;
    constructor(options: IOptions);
}
