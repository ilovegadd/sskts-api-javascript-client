/**
 * Sasaki API client for javascript
 *
 * @ignore
 */

import ImplicitGrantClient from './auth/implicitGrantClient';

import { IOptions } from './service';
import EventService from './service/event';

export namespace auth {
    export class Implicit extends ImplicitGrantClient { }
}

export namespace service {
    export function event(options: IOptions) {
        return new EventService(options);
    }
}
