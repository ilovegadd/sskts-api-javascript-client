"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createDebug = require("debug");
var debug = createDebug('sskts-api:auth:iframeHandler');
/**
 * IframeHandler
 * @class IframeHandler
 */
var IframeHandler = /** @class */ (function () {
    function IframeHandler(options) {
        this.url = options.url;
        this.callback = options.callback;
        // tslint:disable-next-line:no-magic-numbers
        this.timeout = (options.timeout !== undefined) ? options.timeout : 60 * 1000;
        this.timeoutCallback = (options.timeoutCallback !== undefined) ? options.timeoutCallback : null;
        this.eventListenerType = (options.eventListenerType !== undefined) ? options.eventListenerType : 'message';
        this.iframe = null;
        this.timeoutHandle = null;
        this.destroyTimeout = null;
        this.proxyEventListener = null;
        // If no event identifier specified, set default
        this.eventValidator = (options.eventValidator !== undefined) ? options.eventValidator : {
            isValid: function () {
                return true;
            }
        };
        if (typeof this.callback !== 'function') {
            throw new Error('options.callback must be a function');
        }
    }
    IframeHandler.prototype.init = function () {
        var _this = this;
        debug('opening iframe...', this.eventListenerType);
        this.iframe = window.document.createElement('iframe');
        this.iframe.style.display = 'none';
        this.iframe.src = this.url;
        // Workaround to avoid using bind that does not work in IE8
        this.proxyEventListener = function (e) {
            _this.eventListener(e);
        };
        switch (this.eventListenerType) {
            case 'message':
                this.eventSourceObject = window;
                break;
            case 'load':
                this.eventSourceObject = this.iframe;
                break;
            default:
                throw new Error("Unsupported event listener type: " + this.eventListenerType);
        }
        this.eventSourceObject.addEventListener(this.eventListenerType, this.proxyEventListener, false);
        window.document.body.appendChild(this.iframe);
        this.timeoutHandle = setTimeout(function () {
            _this.timeoutHandler();
        }, this.timeout);
    };
    IframeHandler.prototype.eventListener = function (event) {
        var eventData = { event: event, sourceObject: this.eventSourceObject };
        this.destroy();
        this.callback(eventData);
    };
    IframeHandler.prototype.timeoutHandler = function () {
        this.destroy();
        if (this.timeoutCallback) {
            this.timeoutCallback();
        }
    };
    IframeHandler.prototype.destroy = function () {
        var _this = this;
        clearTimeout(this.timeoutHandle);
        this.destroyTimeout = setTimeout(function () {
            _this.eventSourceObject.removeEventListener(_this.eventListenerType, _this.proxyEventListener, false);
            window.document.body.removeChild(_this.iframe);
        }, 0);
    };
    return IframeHandler;
}());
exports.default = IframeHandler;
