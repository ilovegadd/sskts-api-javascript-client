"use strict";
/**
 * Sasaki API client for javascript
 *
 * @ignore
 */
Object.defineProperty(exports, "__esModule", { value: true });
var implicitGrantClient_1 = require("./auth/implicitGrantClient");
var event_1 = require("./service/event");
var order_1 = require("./service/order");
var organization_1 = require("./service/organization");
var person_1 = require("./service/person");
var place_1 = require("./service/place");
var placeOrder_1 = require("./service/transaction/placeOrder");
/**
 * create OAuth2 client instance using implicit grant
 * @param options implicit grant configurations
 */
function createAuthInstance(options) {
    return new implicitGrantClient_1.ImplicitGrantClient(options);
}
exports.createAuthInstance = createAuthInstance;
var service;
(function (service) {
    function event(options) {
        return new event_1.default(options);
    }
    service.event = event;
    function order(options) {
        return new order_1.default(options);
    }
    service.order = order;
    function organization(options) {
        return new organization_1.default(options);
    }
    service.organization = organization;
    function person(options) {
        return new person_1.default(options);
    }
    service.person = person;
    function place(options) {
        return new place_1.default(options);
    }
    service.place = place;
    var transaction;
    (function (transaction) {
        function placeOrder(options) {
            return new placeOrder_1.default(options);
        }
        transaction.placeOrder = placeOrder;
    })(transaction = service.transaction || (service.transaction = {}));
})(service = exports.service || (exports.service = {}));
