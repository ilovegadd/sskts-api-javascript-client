"use strict";
/**
 * Sasaki API client for javascript
 *
 * @ignore
 */
Object.defineProperty(exports, "__esModule", { value: true });
var sasaki = require("@motionpicture/sasaki-api-abstract");
var implicitGrantClient_1 = require("./auth/implicitGrantClient");
/**
 * factory
 * All object interfaces are here.
 * 全てのオブジェクトのインターフェースはここに含まれます。
 * @export
 */
exports.factory = sasaki.factory;
exports.service = sasaki.service;
exports.transporters = sasaki.transporters;
/**
 * create OAuth2 client instance using implicit grant
 * @param options implicit grant configurations
 */
function createAuthInstance(options) {
    return new implicitGrantClient_1.ImplicitGrantClient(options);
}
exports.createAuthInstance = createAuthInstance;
