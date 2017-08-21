"use strict";
/**
 * Sasaki API client for javascript
 *
 * @ignore
 */
Object.defineProperty(exports, "__esModule", { value: true });
var implicitGrantClient_1 = require("./auth/implicitGrantClient");
var event_1 = require("./service/event");
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
})(service = exports.service || (exports.service = {}));
