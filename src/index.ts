// tslint:disable:max-classes-per-file

/**
 * Sasaki API client for javascript
 *
 * @ignore
 */

import { IOptions as IImplicitGrantClientOptions, ImplicitGrantClient } from './auth/implicitGrantClient';

import { EventService } from './service/event';
import { OrderService } from './service/order';
import { OrganizationService } from './service/organization';
import { PersonService } from './service/person';
import { PlaceService } from './service/place';
import { PlaceOrderTransactionService } from './service/transaction/placeOrder';

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
    export class Event extends EventService { }
    export class Order extends OrderService { }
    export class Organization extends OrganizationService { }
    export class Person extends PersonService { }
    export class Place extends PlaceService { }
    export namespace transaction {
        export class PlaceOrder extends PlaceOrderTransactionService { }
    }
}

