/**
 * Sasaki API client for javascript
 *
 * @ignore
 */
import ImplicitGrantClient from './auth/implicitGrantClient';
import { IOptions } from './service';
import EventService from './service/event';
export declare namespace auth {
    class Implicit extends ImplicitGrantClient {
    }
}
export declare namespace service {
    function event(options: IOptions): EventService;
}
