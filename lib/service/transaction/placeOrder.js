"use strict";
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
/**
 * placeOrder transaction service
 *
 * @class transaction/PlaceOrderService
 */
var PlaceOrderService = /** @class */ (function (_super) {
    __extends(PlaceOrderService, _super);
    function PlaceOrderService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 取引を開始する
     * 開始できない場合(混雑中など)、nullが返されます。
     */
    PlaceOrderService.prototype.start = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, apiFetch_1.default({
                        auth: this.options.auth,
                        baseUrl: this.options.endpoint,
                        uri: '/transactions/placeOrder/start',
                        method: 'POST',
                        body: {
                            // tslint:disable-next-line:no-magic-numbers
                            expires: (params.expires.getTime() / 1000).toFixed(0),
                            sellerId: params.sellerId
                        },
                        expectedStatusCodes: [http_status_1.NOT_FOUND, http_status_1.OK]
                    })];
            });
        });
    };
    /**
     * 取引に座席予約を追加する
     */
    PlaceOrderService.prototype.createSeatReservationAuthorization = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, apiFetch_1.default({
                        auth: this.options.auth,
                        baseUrl: this.options.endpoint,
                        uri: "/transactions/placeOrder/" + params.transactionId + "/seatReservationAuthorization",
                        method: 'POST',
                        body: {
                            eventIdentifier: params.eventIdentifier,
                            offers: params.offers
                        },
                        expectedStatusCodes: [http_status_1.CREATED]
                    })];
            });
        });
    };
    /**
     * 座席予約取消
     */
    PlaceOrderService.prototype.cancelSeatReservationAuthorization = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, apiFetch_1.default({
                        auth: this.options.auth,
                        baseUrl: this.options.endpoint,
                        uri: "/transactions/placeOrder/" + params.transactionId + "/seatReservationAuthorization/" + params.authorizationId,
                        method: 'DELETE',
                        body: params,
                        expectedStatusCodes: [http_status_1.NO_CONTENT]
                    })];
            });
        });
    };
    /**
     * クレジットカードのオーソリを取得する
     */
    PlaceOrderService.prototype.createCreditCardAuthorization = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, apiFetch_1.default({
                        auth: this.options.auth,
                        baseUrl: this.options.endpoint,
                        uri: "/transactions/placeOrder/" + params.transactionId + "/paymentInfos/creditCard",
                        method: 'POST',
                        body: {
                            orderId: params.orderId,
                            amount: params.amount,
                            method: params.method,
                            creditCard: params.creditCard
                        },
                        expectedStatusCodes: [http_status_1.CREATED]
                    })];
            });
        });
    };
    /**
     * クレジットカードオーソリ取消
     */
    PlaceOrderService.prototype.cancelCreditCardAuthorization = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, apiFetch_1.default({
                        auth: this.options.auth,
                        baseUrl: this.options.endpoint,
                        uri: "/transactions/placeOrder/" + params.transactionId + "/paymentInfos/creditCard/" + params.authorizationId,
                        method: 'DELETE',
                        expectedStatusCodes: [http_status_1.NO_CONTENT]
                    })];
            });
        });
    };
    /**
     * 決済方法として、ムビチケを追加する
     */
    PlaceOrderService.prototype.createMvtkAuthorization = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, apiFetch_1.default({
                        auth: this.options.auth,
                        baseUrl: this.options.endpoint,
                        uri: "/transactions/placeOrder/" + params.transactionId + "/discountInfos/mvtk",
                        method: 'POST',
                        body: params.mvtk,
                        expectedStatusCodes: [http_status_1.CREATED]
                    })];
            });
        });
    };
    /**
     * ムビチケ取消
     */
    PlaceOrderService.prototype.cancelMvtkAuthorization = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, apiFetch_1.default({
                        auth: this.options.auth,
                        baseUrl: this.options.endpoint,
                        uri: "/transactions/placeOrder/" + params.transactionId + "/discountInfos/mvtk/" + params.authorizationId,
                        method: 'DELETE',
                        expectedStatusCodes: [http_status_1.NO_CONTENT]
                    })];
            });
        });
    };
    /**
     * register a customer contact
     */
    PlaceOrderService.prototype.setCustomerContact = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, apiFetch_1.default({
                        auth: this.options.auth,
                        baseUrl: this.options.endpoint,
                        uri: "/transactions/placeOrder/" + params.transactionId + "/customerContact",
                        method: 'PUT',
                        body: params.contact,
                        expectedStatusCodes: [http_status_1.NO_CONTENT]
                    })];
            });
        });
    };
    /**
     * 取引確定
     */
    PlaceOrderService.prototype.confirm = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, apiFetch_1.default({
                        auth: this.options.auth,
                        baseUrl: this.options.endpoint,
                        uri: "/transactions/placeOrder/" + params.transactionId + "/confirm",
                        method: 'POST',
                        expectedStatusCodes: [http_status_1.CREATED]
                    })];
            });
        });
    };
    /**
     * 確定した取引に関して、購入者にメール通知を送信する
     */
    PlaceOrderService.prototype.sendEmailNotification = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, apiFetch_1.default({
                        auth: this.options.auth,
                        baseUrl: this.options.endpoint,
                        uri: "/transactions/placeOrder/" + params.transactionId + "/tasks/sendEmailNotification",
                        method: 'POST',
                        body: params.emailNotification,
                        expectedStatusCodes: [http_status_1.NO_CONTENT]
                    })];
            });
        });
    };
    return PlaceOrderService;
}(service_1.Service));
exports.PlaceOrderService = PlaceOrderService;
