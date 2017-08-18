"use strict";
/**
 * Sasaki API client for javascript
 *
 * @ignore
 */
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
var implicitGrantClient_1 = require("./auth/implicitGrantClient");
var event_1 = require("./service/event");
var auth;
(function (auth) {
    var Implicit = (function (_super) {
        __extends(Implicit, _super);
        function Implicit() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Implicit;
    }(implicitGrantClient_1.default));
    auth.Implicit = Implicit;
})(auth = exports.auth || (exports.auth = {}));
var service;
(function (service) {
    function event(options) {
        return new event_1.default(options);
    }
    service.event = event;
})(service = exports.service || (exports.service = {}));
