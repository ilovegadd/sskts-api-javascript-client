/**
 * Sasaki API client for javascript
 *
 * @ignore
 */
import { IOptions as IImplicitGrantClientOptions, ImplicitGrantClient } from './auth/implicitGrantClient';
import { IOptions as IServiceOptions } from './service';
import EventService from './service/event';
import OrderService from './service/order';
import OrganizationService from './service/organization';
import PersonService from './service/person';
import PlaceService from './service/place';
import PlaceOrderTransactionService from './service/transaction/placeOrder';
export declare type ImplicitGrantClient = ImplicitGrantClient;
export declare type EventService = EventService;
export declare type OrderService = OrderService;
export declare type OrganizationService = OrganizationService;
export declare type PersonService = PersonService;
export declare type PlaceService = PlaceService;
export declare type EventPlaceOrderTransactionServiceService = PlaceOrderTransactionService;
/**
 * create OAuth2 client instance using implicit grant
 * @param options implicit grant configurations
 */
export declare function createAuthInstance(options: IImplicitGrantClientOptions): ImplicitGrantClient;
export declare namespace service {
    function event(options: IServiceOptions): EventService;
    function order(options: IServiceOptions): OrderService;
    function organization(options: IServiceOptions): OrganizationService;
    function person(options: IServiceOptions): PersonService;
    function place(options: IServiceOptions): PlaceService;
    namespace transaction {
        function placeOrder(options: IServiceOptions): PlaceOrderTransactionService;
    }
}
