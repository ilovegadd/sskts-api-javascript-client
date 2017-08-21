/**
 * Sasaki API client for javascript
 *
 * @ignore
 */
import { IOptions as IImplicitGrantClientOptions, ImplicitGrantClient } from './auth/implicitGrantClient';
import { IOptions as IServiceOptions } from './service';
import EventService from './service/event';
/**
 * create OAuth2 client instance using implicit grant
 * @param options implicit grant configurations
 */
export declare function createAuthInstance(options: IImplicitGrantClientOptions): ImplicitGrantClient;
export declare namespace service {
    function event(options: IServiceOptions): EventService;
}
