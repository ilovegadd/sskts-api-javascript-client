/**
 * Sasaki API client for javascript
 *
 * @ignore
 */

import { IOptions as IImplicitGrantClientOptions, ImplicitGrantClient } from './auth/implicitGrantClient';

import { IOptions as IServiceOptions } from './service';
import { EventService } from './service/event';
import { OrderService } from './service/order';
import { OrganizationService } from './service/organization';
import { PersonService } from './service/person';
import { PlaceService } from './service/place';
import { PlaceOrderService } from './service/transaction/placeOrder';

export type IImplicitGrantClient = ImplicitGrantClient;
export type IEventService = EventService;
export type IOrderService = OrderService;
export type IOrganizationService = OrganizationService;
export type IPersonService = PersonService;
export type IPlaceService = PlaceService;
export type IPlaceOrderTransactionService = PlaceOrderService;

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
    export function order(options: IServiceOptions) {
        return new OrderService(options);
    }
    export function organization(options: IServiceOptions) {
        return new OrganizationService(options);
    }
    export function person(options: IServiceOptions) {
        return new PersonService(options);
    }
    export function place(options: IServiceOptions) {
        return new PlaceService(options);
    }
    export namespace transaction {
        export function placeOrder(options: IServiceOptions) {
            return new PlaceOrderService(options);
        }
    }
}
