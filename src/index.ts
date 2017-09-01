// tslint:disable:max-classes-per-file

/**
 * Sasaki API client for javascript
 *
 * @ignore
 */

// import * as factory from '@motionpicture/sskts-factory';

import { ImplicitGrantClient, IOptions as IImplicitGrantClientOptions } from './auth/implicitGrantClient';

import { EventService } from './service/event';
import { OrderService } from './service/order';
import { OrganizationService } from './service/organization';
import { PersonService } from './service/person';
import { PlaceService } from './service/place';
import { PlaceOrderTransactionService } from './service/transaction/placeOrder';

/**
 * factory
 * All object interfaces are here.
 * 全てのオブジェクトのインターフェースはここに含まれます。
 * @export
 */
// export {
//     factory
// }
// export import factory = factory;

export type IImplicitGrantClient = ImplicitGrantClient;

/**
 * create OAuth2 client instance using implicit grant
 * @param options implicit grant configurations
 */
export function createAuthInstance(options: IImplicitGrantClientOptions) {
    return new ImplicitGrantClient(options);
}

/**
 * each API services
 */
export namespace service {
    /**
     * event service
     * @class
     */
    export class Event extends EventService { }
    /**
     * order service
     * @class
     */
    export class Order extends OrderService { }
    /**
     * organization service
     * @class
     */
    export class Organization extends OrganizationService { }
    /**
     * person service
     * @class
     */
    export class Person extends PersonService { }
    /**
     * place service
     * @class
     */
    export class Place extends PlaceService { }
    export namespace transaction {
        /**
         * placeOrder transaction service
         * @class
         */
        export class PlaceOrder extends PlaceOrderTransactionService { }
    }
}
