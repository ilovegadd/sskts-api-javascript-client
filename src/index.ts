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
export function createAuthInstance(options: IImplicitGrantClientOptions) {
    return new ImplicitGrantClient(options);
}

export namespace service {
    export function event(options: IServiceOptions) {
        return new EventService(options);
    }
}
