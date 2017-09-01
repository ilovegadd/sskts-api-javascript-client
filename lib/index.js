"use strict";
// tslint:disable:max-classes-per-file
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sasaki API client for javascript
 *
 * @ignore
 */
var factory = require("@motionpicture/sskts-factory");
var implicitGrantClient_1 = require("./auth/implicitGrantClient");
var event_1 = require("./service/event");
var order_1 = require("./service/order");
var organization_1 = require("./service/organization");
var person_1 = require("./service/person");
var place_1 = require("./service/place");
var placeOrder_1 = require("./service/transaction/placeOrder");
/**
 * factory
 * All object interfaces are here.
 * 全てのオブジェクトのインターフェースはここに含まれます。
 * @export
 */
exports.factory = factory;
/**
 * create OAuth2 client instance using implicit grant
 * @param options implicit grant configurations
 */
function createAuthInstance(options) {
    return new implicitGrantClient_1.ImplicitGrantClient(options);
}
exports.createAuthInstance = createAuthInstance;
/**
 * each API services
 */
var service;
(function (service) {
    /**
     * event service
     * @class
     */
    var Event = /** @class */ (function (_super) {
        __extends(Event, _super);
        function Event() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Event;
    }(event_1.EventService));
    service.Event = Event;
    /**
     * order service
     * @class
     */
    var Order = /** @class */ (function (_super) {
        __extends(Order, _super);
        function Order() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Order;
    }(order_1.OrderService));
    service.Order = Order;
    /**
     * organization service
     * @class
     */
    var Organization = /** @class */ (function (_super) {
        __extends(Organization, _super);
        function Organization() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Organization;
    }(organization_1.OrganizationService));
    service.Organization = Organization;
    /**
     * person service
     * @class
     */
    var Person = /** @class */ (function (_super) {
        __extends(Person, _super);
        function Person() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Person;
    }(person_1.PersonService));
    service.Person = Person;
    /**
     * place service
     * @class
     */
    var Place = /** @class */ (function (_super) {
        __extends(Place, _super);
        function Place() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Place;
    }(place_1.PlaceService));
    service.Place = Place;
    var transaction;
    (function (transaction) {
        /**
         * placeOrder transaction service
         * @class
         */
        var PlaceOrder = /** @class */ (function (_super) {
            __extends(PlaceOrder, _super);
            function PlaceOrder() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return PlaceOrder;
        }(placeOrder_1.PlaceOrderTransactionService));
        transaction.PlaceOrder = PlaceOrder;
    })(transaction = service.transaction || (service.transaction = {}));
})(service = exports.service || (exports.service = {}));
