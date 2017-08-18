"use strict";
/**
 * PopupAuthenticationHandler
 *
 * @class PopupAuthenticationHandler
 */
Object.defineProperty(exports, "__esModule", { value: true });
var PopupAuthenticationHandler = (function () {
    function PopupAuthenticationHandler(options) {
        this.url = options.url;
        this.callback = options.callback;
        this.timeout = options.timeout || 60 * 1000;
        this.timeoutCallback = options.timeoutCallback || null;
        this.eventListenerType = options.eventListenerType || 'message';
        this.popupWindow = null;
        this.timeoutHandle = null;
        this._destroyTimeout = null;
        this.proxyEventListener = null;
        // If no event identifier specified, set default
        this.eventValidator = options.eventValidator || {
            isValid: function () {
                return true;
            }
        };
        if (typeof this.callback !== 'function') {
            throw new Error('options.callback must be a function');
        }
    }
    PopupAuthenticationHandler.prototype.init = function () {
        var _this = this;
        console.log('opening popup...', this.eventListenerType);
        this.popupWindow = window.open(this.url, 'authorizeWindow');
        // Workaround to avoid using bind that does not work in IE8
        this.proxyEventListener = function (e) {
            _this.eventListener(e);
        };
        switch (this.eventListenerType) {
            case 'message':
                this.eventSourceObject = window;
                break;
            case 'load':
                this.eventSourceObject = this.popupWindow;
                break;
            default:
                throw new Error('Unsupported event listener type: ' + this.eventListenerType);
        }
        console.log('this.eventSourceObject:', this.eventSourceObject);
        this.eventSourceObject.addEventListener(this.eventListenerType, this.proxyEventListener, false);
        this.timeoutHandle = setTimeout(function () {
            _this.timeoutHandler();
        }, this.timeout);
    };
    ;
    PopupAuthenticationHandler.prototype.eventListener = function (event) {
        console.log('PopupHandler.eventListener...event:', event);
        var eventData = { event: event, sourceObject: this.eventSourceObject };
        this.destroy();
        // 呼び出し元へコールバック
        this.callback(eventData);
    };
    ;
    PopupAuthenticationHandler.prototype.timeoutHandler = function () {
        if (this.timeoutCallback) {
            this.timeoutCallback();
        }
    };
    ;
    PopupAuthenticationHandler.prototype.destroy = function () {
        var _this = this;
        clearTimeout(this.timeoutHandle);
        this._destroyTimeout = setTimeout(function () {
            _this.eventSourceObject.removeEventListener(_this.eventListenerType, _this.proxyEventListener, false);
            // ポップアップを閉じる
            _this.popupWindow.close();
        }, 0);
    };
    ;
    return PopupAuthenticationHandler;
}());
exports.default = PopupAuthenticationHandler;
