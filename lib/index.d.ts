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
export declare type IImplicitGrantClient = ImplicitGrantClient;
/**
 * create OAuth2 client instance using implicit grant
 * @param options implicit grant configurations
 */
export declare function createAuthInstance(options: IImplicitGrantClientOptions): ImplicitGrantClient;
/**
 * each API services
 */
export declare namespace service {
    class Event extends EventService {
    }
    class Order extends OrderService {
    }
    class Organization extends OrganizationService {
    }
    class Person extends PersonService {
    }
    class Place extends PlaceService {
    }
    namespace transaction {
        class PlaceOrder extends PlaceOrderTransactionService {
        }
    }
}
