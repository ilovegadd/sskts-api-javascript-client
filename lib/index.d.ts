/**
 * Sasaki API client for javascript
 *
 * @ignore
 */
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
    /**
     * event service
     * @class
     */
    class Event extends EventService {
    }
    /**
     * order service
     * @class
     */
    class Order extends OrderService {
    }
    /**
     * organization service
     * @class
     */
    class Organization extends OrganizationService {
    }
    /**
     * person service
     * @class
     */
    class Person extends PersonService {
    }
    /**
     * place service
     * @class
     */
    class Place extends PlaceService {
    }
    namespace transaction {
        /**
         * placeOrder transaction service
         * @class
         */
        class PlaceOrder extends PlaceOrderTransactionService {
        }
    }
}
