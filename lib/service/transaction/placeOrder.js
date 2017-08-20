"use strict";
/**
 * 注文取引サービス
 *
 * @namespace service.transaction.placeOrder
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var apiFetch_1 = require("../../apiFetch");
var http_status_1 = require("http-status");
var service_1 = require("../../service");
var EventService = (function (_super) {
    __extends(EventService, _super);
    function EventService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 取引を開始する
     * 開始できない場合(混雑中など)、nullが返されます。
     */
    EventService.prototype.start = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var options, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = {
                            baseUrl: this.options.endpoint,
                            uri: '/transactions/placeOrder/start',
                            method: 'POST'
                        };
                        _b = {};
                        _c = 'Authorization';
                        _d = "Bearer ";
                        return [4 /*yield*/, this.options.auth.getAccessToken()];
                    case 1:
                        options = (_a.headers = (_b[_c] = _d + (_e.sent()),
                            _b),
                            _a.body = {
                                expires: args.expires.valueOf(),
                                sellerId: args.sellerId
                            },
                            _a.expectedStatusCodes = [http_status_1.NOT_FOUND, http_status_1.OK],
                            _a);
                        return [2 /*return*/, apiFetch_1.default(options)];
                }
            });
        });
    };
    /**
     * 取引に座席予約を追加する
     */
    EventService.prototype.createSeatReservationAuthorization = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var options, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = {
                            baseUrl: this.options.endpoint,
                            uri: "/transactions/placeOrder/" + args.transactionId + "/seatReservationAuthorization",
                            method: 'POST'
                        };
                        _b = {};
                        _c = 'Authorization';
                        _d = "Bearer ";
                        return [4 /*yield*/, this.options.auth.getAccessToken()];
                    case 1:
                        options = (_a.headers = (_b[_c] = _d + (_e.sent()),
                            _b),
                            _a.body = {
                                eventIdentifier: args.eventIdentifier,
                                offers: args.offers
                            },
                            _a.expectedStatusCodes = [http_status_1.CREATED],
                            _a);
                        return [2 /*return*/, apiFetch_1.default(options)];
                }
            });
        });
    };
    /**
     * 座席予約取消
     */
    EventService.prototype.cancelSeatReservationAuthorization = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var options, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = {
                            baseUrl: this.options.endpoint,
                            uri: "/transactions/placeOrder/" + args.transactionId + "/seatReservationAuthorization/" + args.authorizationId,
                            method: 'DELETE'
                        };
                        _b = {};
                        _c = 'Authorization';
                        _d = "Bearer ";
                        return [4 /*yield*/, this.options.auth.getAccessToken()];
                    case 1:
                        options = (_a.headers = (_b[_c] = _d + (_e.sent()),
                            _b),
                            _a.expectedStatusCodes = [http_status_1.NO_CONTENT],
                            _a);
                        return [2 /*return*/, apiFetch_1.default(options)];
                }
            });
        });
    };
    /**
     * クレジットカードのオーソリを取得する
     */
    EventService.prototype.createCreditCardAuthorization = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var options, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = {
                            baseUrl: this.options.endpoint,
                            uri: "/transactions/placeOrder/" + args.transactionId + "/paymentInfos/creditCard",
                            method: 'POST'
                        };
                        _b = {};
                        _c = 'Authorization';
                        _d = "Bearer ";
                        return [4 /*yield*/, this.options.auth.getAccessToken()];
                    case 1:
                        options = (_a.headers = (_b[_c] = _d + (_e.sent()),
                            _b),
                            _a.body = {
                                orderId: args.orderId,
                                amount: args.amount,
                                method: args.method,
                                creditCard: args.creditCard
                            },
                            _a.expectedStatusCodes = [http_status_1.CREATED],
                            _a);
                        return [2 /*return*/, apiFetch_1.default(options)];
                }
            });
        });
    };
    /**
     * クレジットカードオーソリ取消
     */
    EventService.prototype.cancelCreditCardAuthorization = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var options, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = {
                            baseUrl: this.options.endpoint,
                            uri: "/transactions/placeOrder/" + args.transactionId + "/paymentInfos/creditCard/" + args.authorizationId,
                            method: 'GET'
                        };
                        _b = {};
                        _c = 'Authorization';
                        _d = "Bearer ";
                        return [4 /*yield*/, this.options.auth.getAccessToken()];
                    case 1:
                        options = (_a.headers = (_b[_c] = _d + (_e.sent()),
                            _b),
                            _a.expectedStatusCodes = [http_status_1.NO_CONTENT],
                            _a);
                        return [2 /*return*/, apiFetch_1.default(options)];
                }
            });
        });
    };
    /**
     * 決済方法として、ムビチケを追加する
     */
    EventService.prototype.createMvtkAuthorization = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var options, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = {
                            baseUrl: this.options.endpoint,
                            uri: "/transactions/placeOrder/" + args.transactionId + "/paymentInfos/mvtk",
                            method: 'POST'
                        };
                        _b = {};
                        _c = 'Authorization';
                        _d = "Bearer ";
                        return [4 /*yield*/, this.options.auth.getAccessToken()];
                    case 1:
                        options = (_a.headers = (_b[_c] = _d + (_e.sent()),
                            _b),
                            _a.body = args.mvtk,
                            _a.expectedStatusCodes = [http_status_1.CREATED],
                            _a);
                        return [2 /*return*/, apiFetch_1.default(options)];
                }
            });
        });
    };
    /**
     * ムビチケ取消
     */
    EventService.prototype.cancelMvtkAuthorization = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var options, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = {
                            baseUrl: this.options.endpoint,
                            uri: "/transactions/placeOrder/" + args.transactionId + "/paymentInfos/mvtk/" + args.authorizationId,
                            method: 'DELETE'
                        };
                        _b = {};
                        _c = 'Authorization';
                        _d = "Bearer ";
                        return [4 /*yield*/, this.options.auth.getAccessToken()];
                    case 1:
                        options = (_a.headers = (_b[_c] = _d + (_e.sent()),
                            _b),
                            _a.expectedStatusCodes = [http_status_1.NO_CONTENT],
                            _a);
                        return [2 /*return*/, apiFetch_1.default(options)];
                }
            });
        });
    };
    /**
     * 購入者情報登録
     */
    EventService.prototype.setAgentProfile = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var options, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = {
                            baseUrl: this.options.endpoint,
                            uri: "/transactions/placeOrder/" + args.transactionId + "/agent/profile",
                            method: 'PUT'
                        };
                        _b = {};
                        _c = 'Authorization';
                        _d = "Bearer ";
                        return [4 /*yield*/, this.options.auth.getAccessToken()];
                    case 1:
                        options = (_a.headers = (_b[_c] = _d + (_e.sent()),
                            _b),
                            _a.body = args.profile,
                            _a.expectedStatusCodes = [http_status_1.NO_CONTENT],
                            _a);
                        return [2 /*return*/, apiFetch_1.default(options)];
                }
            });
        });
    };
    /**
     * 取引確定
     */
    EventService.prototype.confirm = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var options, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = {
                            baseUrl: this.options.endpoint,
                            uri: "/transactions/placeOrder/" + args.transactionId + "/confirm",
                            method: 'POST'
                        };
                        _b = {};
                        _c = 'Authorization';
                        _d = "Bearer ";
                        return [4 /*yield*/, this.options.auth.getAccessToken()];
                    case 1:
                        options = (_a.headers = (_b[_c] = _d + (_e.sent()),
                            _b),
                            _a.expectedStatusCodes = [http_status_1.CREATED],
                            _a);
                        return [2 /*return*/, apiFetch_1.default(options)];
                }
            });
        });
    };
    /**
     * 確定した取引に関して、購入者にメール通知を送信する
     */
    EventService.prototype.sendEmailNotification = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var options, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = {
                            baseUrl: this.options.endpoint,
                            uri: "/transactions/placeOrder/" + args.transactionId + "/tasks/sendEmailNotification",
                            method: 'POST'
                        };
                        _b = {};
                        _c = 'Authorization';
                        _d = "Bearer ";
                        return [4 /*yield*/, this.options.auth.getAccessToken()];
                    case 1:
                        options = (_a.headers = (_b[_c] = _d + (_e.sent()),
                            _b),
                            _a.body = args.emailNotification,
                            _a.expectedStatusCodes = [http_status_1.NO_CONTENT],
                            _a);
                        return [2 /*return*/, apiFetch_1.default(options)];
                }
            });
        });
    };
    return EventService;
}(service_1.Service));
exports.default = EventService;
