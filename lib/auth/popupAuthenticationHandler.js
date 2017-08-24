"use strict";
/**
 * PopupAuthenticationHandler
 *
 * @class PopupAuthenticationHandler
 */
Object.defineProperty(exports, "__esModule", { value: true });
var popupHandler_1 = require("./popupHandler");
var ErrorFactory = require("./error");
var PopupAuthenticationHandler = /** @class */ (function () {
    function PopupAuthenticationHandler(options) {
        this.authenticationUrl = options.authenticationUrl;
        this.timeout = options.timeout || 60 * 1000;
        this.handler = null;
    }
    PopupAuthenticationHandler.create = function (options) {
        return new PopupAuthenticationHandler(options);
    };
    ;
    PopupAuthenticationHandler.prototype.login = function (usePostMessage) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.handler = new popupHandler_1.default({
                url: _this.authenticationUrl,
                eventListenerType: usePostMessage ? 'message' : 'load',
                callback: _this.getCallbackHandler(resolve, usePostMessage),
                timeout: _this.timeout,
                eventValidator: _this.getEventValidator(),
                timeoutCallback: function () {
                    var err = new ErrorFactory.AuthorizeError('Timeout during authentication');
                    err.error = 'timeout';
                    err.errorDescription = 'Timeout during authentication';
                    reject(err);
                },
                usePostMessage: false
            });
            _this.handler.init();
        });
    };
    ;
    PopupAuthenticationHandler.prototype.getEventValidator = function () {
        return {};
    };
    ;
    PopupAuthenticationHandler.prototype.getCallbackHandler = function (cb, usePostMessage) {
        return function (eventData) {
            var callbackValue;
            if (!usePostMessage) {
                // loadイベントの場合は、ポップアップのフラグメントをコールバックへ渡す
                callbackValue = eventData.sourceObject.location.hash;
            }
            else if (typeof eventData.event.data === 'object' && eventData.event.data.hash) {
                callbackValue = eventData.event.data.hash;
            }
            else {
                callbackValue = eventData.event.data;
            }
            cb(callbackValue);
        };
    };
    ;
    return PopupAuthenticationHandler;
}());
exports.default = PopupAuthenticationHandler;
