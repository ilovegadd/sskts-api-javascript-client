"use strict";
/**
 * Sasaki API client for javascript
 *
 * @ignore
 */
Object.defineProperty(exports, "__esModule", { value: true });
var service = require("@motionpicture/sasaki-api-service");
var factory = require("@motionpicture/sskts-factory");
var implicitGrantClient_1 = require("./auth/implicitGrantClient");
/**
 * factory
 * All object interfaces are here.
 * 全てのオブジェクトのインターフェースはここに含まれます。
 * @export
 */
exports.factory = factory;
exports.service = service;
/**
 * create OAuth2 client instance using implicit grant
 * @param options implicit grant configurations
 */
function createAuthInstance(options) {
    return new implicitGrantClient_1.ImplicitGrantClient(options);
}
exports.createAuthInstance = createAuthInstance;
