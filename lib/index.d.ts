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
export declare type IImplicitGrantClient = ImplicitGrantClient;
export declare type IEventService = EventService;
export declare type IOrderService = OrderService;
export declare type IOrganizationService = OrganizationService;
export declare type IPersonService = PersonService;
export declare type IPlaceService = PlaceService;
export declare type IPlaceOrderTransactionService = PlaceOrderService;
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
        function placeOrder(options: IServiceOptions): PlaceOrderService;
    }
}
