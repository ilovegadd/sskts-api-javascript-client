(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var sasaki = window.sasaki = require('./lib/index.js');
},{"./lib/index.js":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * API client for javascript
 */
var cinerino = require("@cinerino/api-javascript-client");
var sasaki = require("@motionpicture/sskts-api-abstract-client");
/**
 * factory
 */
exports.factory = sasaki.factory;
exports.service = sasaki.service;
exports.transporters = sasaki.transporters;
/**
 * create OAuth2 client instance using implicit grant
 * @param options implicit grant configurations
 */
exports.createAuthInstance = cinerino.createAuthInstance;

},{"@cinerino/api-javascript-client":91,"@motionpicture/sskts-api-abstract-client":164}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * アクションステータス
 */
var ActionStatusType;
(function (ActionStatusType) {
    ActionStatusType["ActiveActionStatus"] = "ActiveActionStatus";
    ActionStatusType["CompletedActionStatus"] = "CompletedActionStatus";
    ActionStatusType["FailedActionStatus"] = "FailedActionStatus";
    ActionStatusType["PotentialActionStatus"] = "PotentialActionStatus";
    ActionStatusType["CanceledActionStatus"] = "CanceledActionStatus";
})(ActionStatusType || (ActionStatusType = {}));
exports.default = ActionStatusType;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * アクションタイプ
 */
var ActionType;
(function (ActionType) {
    ActionType["AuthorizeAction"] = "AuthorizeAction";
    ActionType["CancelAction"] = "CancelAction";
    ActionType["ReserveAction"] = "ReserveAction";
    ActionType["ReturnAction"] = "ReturnAction";
    ActionType["SendAction"] = "SendAction";
    ActionType["UseAction"] = "UseAction";
})(ActionType || (ActionType = {}));
exports.default = ActionType;

},{}],6:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],7:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],8:[function(require,module,exports){
"use strict";
/**
 * アプリケーションクライアントユーザーファクトリー
 * クライアントサイドでapiを利用するユーザー
 */
Object.defineProperty(exports, "__esModule", { value: true });

},{}],9:[function(require,module,exports){
"use strict";
/**
 * 作品タイプ
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CreativeWorkType;
(function (CreativeWorkType) {
    CreativeWorkType["EmailMessage"] = "EmailMessage";
    CreativeWorkType["Movie"] = "Movie";
})(CreativeWorkType || (CreativeWorkType = {}));
exports.default = CreativeWorkType;

},{}],10:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],11:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],12:[function(require,module,exports){
"use strict";
/**
 * エラーコード
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["AlreadyInUse"] = "AlreadyInUse";
    ErrorCode["Argument"] = "Argument";
    ErrorCode["ArgumentNull"] = "ArgumentNull";
    ErrorCode["Forbidden"] = "Forbidden";
    ErrorCode["NotFound"] = "NotFound";
    ErrorCode["NotImplemented"] = "NotImplemented";
    ErrorCode["RateLimitExceeded"] = "RateLimitExceeded";
    ErrorCode["ServiceUnavailable"] = "ServiceUnavailable";
    ErrorCode["Unauthorized"] = "Unauthorized";
})(ErrorCode || (ErrorCode = {}));
exports.default = ErrorCode;

},{}],13:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var chevre_1 = require("./chevre");
/**
 * AlreadyInUseError
 */
var AlreadyInUseError = /** @class */ (function (_super) {
    __extends(AlreadyInUseError, _super);
    function AlreadyInUseError(entityName, fieldNames, message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = "The specified '" + entityName + "' value is already in use for: " + fieldNames.join(', ') + ".";
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.AlreadyInUse, actualMessage) /* istanbul ignore next */ || this;
        _this.entityName = entityName;
        _this.fieldNames = fieldNames;
        setPrototypeOf(_this, AlreadyInUseError.prototype);
        return _this;
    }
    return AlreadyInUseError;
}(chevre_1.ChevreError));
exports.default = AlreadyInUseError;

},{"../errorCode":12,"./chevre":16,"setprototypeof":467}],14:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var chevre_1 = require("./chevre");
/**
 * ArgumentError
 */
var ArgumentError = /** @class */ (function (_super) {
    __extends(ArgumentError, _super);
    function ArgumentError(argumentName, message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = "Invalid or missing argument supplied: " + argumentName + ".";
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.Argument, actualMessage) /* istanbul ignore next */ || this;
        _this.argumentName = argumentName;
        setPrototypeOf(_this, ArgumentError.prototype);
        return _this;
    }
    return ArgumentError;
}(chevre_1.ChevreError));
exports.default = ArgumentError;

},{"../errorCode":12,"./chevre":16,"setprototypeof":467}],15:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var chevre_1 = require("./chevre");
/**
 * ArgumentNullError
 */
var ArgumentNullError = /** @class */ (function (_super) {
    __extends(ArgumentNullError, _super);
    function ArgumentNullError(argumentName, message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = "Missing argument: " + argumentName + ".";
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.ArgumentNull, actualMessage) /* istanbul ignore next */ || this;
        _this.argumentName = argumentName;
        setPrototypeOf(_this, ArgumentNullError.prototype);
        return _this;
    }
    return ArgumentNullError;
}(chevre_1.ChevreError));
exports.default = ArgumentNullError;

},{"../errorCode":12,"./chevre":16,"setprototypeof":467}],16:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ChevreError
 */
var ChevreError = /** @class */ (function (_super) {
    __extends(ChevreError, _super);
    function ChevreError(code, message) {
        var _this = 
        // tslint:disable-next-line:no-single-line-block-comment
        _super.call(this, message) /* istanbul ignore next */ || this;
        _this.name = 'ChevreError';
        _this.reason = code;
        return _this;
    }
    return ChevreError;
}(Error));
exports.ChevreError = ChevreError;

},{}],17:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var chevre_1 = require("./chevre");
/**
 * ForbiddenError
 */
var ForbiddenError = /** @class */ (function (_super) {
    __extends(ForbiddenError, _super);
    function ForbiddenError(message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Forbidden.';
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.Forbidden, actualMessage) /* istanbul ignore next */ || this;
        setPrototypeOf(_this, ForbiddenError.prototype);
        return _this;
    }
    return ForbiddenError;
}(chevre_1.ChevreError));
exports.default = ForbiddenError;

},{"../errorCode":12,"./chevre":16,"setprototypeof":467}],18:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var chevre_1 = require("./chevre");
/**
 * NotFoundError
 */
var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(entityName, message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = "Not Found: " + entityName + ".";
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.NotFound, actualMessage) /* istanbul ignore next */ || this;
        _this.entityName = entityName;
        setPrototypeOf(_this, NotFoundError.prototype);
        return _this;
    }
    return NotFoundError;
}(chevre_1.ChevreError));
exports.default = NotFoundError;

},{"../errorCode":12,"./chevre":16,"setprototypeof":467}],19:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var chevre_1 = require("./chevre");
/**
 * NotImplementedError
 */
var NotImplementedError = /** @class */ (function (_super) {
    __extends(NotImplementedError, _super);
    function NotImplementedError(message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Method is not yet implemented.';
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.NotImplemented, actualMessage) /* istanbul ignore next */ || this;
        setPrototypeOf(_this, NotImplementedError.prototype);
        return _this;
    }
    return NotImplementedError;
}(chevre_1.ChevreError));
exports.default = NotImplementedError;

},{"../errorCode":12,"./chevre":16,"setprototypeof":467}],20:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var chevre_1 = require("./chevre");
/**
 * RateLimitExceededError
 */
var RateLimitExceededError = /** @class */ (function (_super) {
    __extends(RateLimitExceededError, _super);
    function RateLimitExceededError(message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Rate limit exceeded.';
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.RateLimitExceeded, actualMessage) /* istanbul ignore next */ || this;
        setPrototypeOf(_this, RateLimitExceededError.prototype);
        return _this;
    }
    return RateLimitExceededError;
}(chevre_1.ChevreError));
exports.default = RateLimitExceededError;

},{"../errorCode":12,"./chevre":16,"setprototypeof":467}],21:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var chevre_1 = require("./chevre");
/**
 * ServiceUnavailableError
 */
var ServiceUnavailableError = /** @class */ (function (_super) {
    __extends(ServiceUnavailableError, _super);
    function ServiceUnavailableError(message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Service unavailable temporarily.';
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.ServiceUnavailable, actualMessage) /* istanbul ignore next */ || this;
        setPrototypeOf(_this, ServiceUnavailableError.prototype);
        return _this;
    }
    return ServiceUnavailableError;
}(chevre_1.ChevreError));
exports.default = ServiceUnavailableError;

},{"../errorCode":12,"./chevre":16,"setprototypeof":467}],22:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var chevre_1 = require("./chevre");
/**
 * UnauthorizedError
 */
var UnauthorizedError = /** @class */ (function (_super) {
    __extends(UnauthorizedError, _super);
    function UnauthorizedError(message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Unauthorized.';
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.Unauthorized, actualMessage) /* istanbul ignore next */ || this;
        setPrototypeOf(_this, UnauthorizedError.prototype);
        return _this;
    }
    return UnauthorizedError;
}(chevre_1.ChevreError));
exports.default = UnauthorizedError;

},{"../errorCode":12,"./chevre":16,"setprototypeof":467}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * errors
 */
var alreadyInUse_1 = require("./error/alreadyInUse");
exports.AlreadyInUse = alreadyInUse_1.default;
var argument_1 = require("./error/argument");
exports.Argument = argument_1.default;
var argumentNull_1 = require("./error/argumentNull");
exports.ArgumentNull = argumentNull_1.default;
var chevre_1 = require("./error/chevre");
exports.Chevre = chevre_1.ChevreError;
var forbidden_1 = require("./error/forbidden");
exports.Forbidden = forbidden_1.default;
var notFound_1 = require("./error/notFound");
exports.NotFound = notFound_1.default;
var notImplemented_1 = require("./error/notImplemented");
exports.NotImplemented = notImplemented_1.default;
var rateLimitExceeded_1 = require("./error/rateLimitExceeded");
exports.RateLimitExceeded = rateLimitExceeded_1.default;
var serviceUnavailable_1 = require("./error/serviceUnavailable");
exports.ServiceUnavailable = serviceUnavailable_1.default;
var unauthorized_1 = require("./error/unauthorized");
exports.Unauthorized = unauthorized_1.default;

},{"./error/alreadyInUse":13,"./error/argument":14,"./error/argumentNull":15,"./error/chevre":16,"./error/forbidden":17,"./error/notFound":18,"./error/notImplemented":19,"./error/rateLimitExceeded":20,"./error/serviceUnavailable":21,"./error/unauthorized":22}],24:[function(require,module,exports){
"use strict";
/**
 * イベントステータス
 */
Object.defineProperty(exports, "__esModule", { value: true });
var EventStatusType;
(function (EventStatusType) {
    EventStatusType["EventCancelled"] = "EventCancelled";
    EventStatusType["EventPostponed"] = "EventPostponed";
    EventStatusType["EventRescheduled"] = "EventRescheduled";
    EventStatusType["EventScheduled"] = "EventScheduled";
})(EventStatusType || (EventStatusType = {}));
exports.default = EventStatusType;

},{}],25:[function(require,module,exports){
"use strict";
/**
 * イベントタイプ
 */
Object.defineProperty(exports, "__esModule", { value: true });
var EventType;
(function (EventType) {
    EventType["ScreeningEvent"] = "ScreeningEvent";
    EventType["ScreeningEventSeries"] = "ScreeningEventSeries";
})(EventType || (EventType = {}));
exports.default = EventType;

},{}],26:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],27:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],28:[function(require,module,exports){
"use strict";
/**
 * 商品在庫状況
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ItemAvailability;
(function (ItemAvailability) {
    ItemAvailability["Discontinued"] = "Discontinued";
    ItemAvailability["InStock"] = "InStock";
    ItemAvailability["InStoreOnly"] = "InStoreOnly";
    ItemAvailability["LimitedAvailability"] = "LimitedAvailability";
    ItemAvailability["OnlineOnly"] = "OnlineOnly";
    ItemAvailability["OutOfStock"] = "OutOfStock";
    ItemAvailability["PreOrder"] = "PreOrder";
    ItemAvailability["PreSale"] = "PreSale";
    ItemAvailability["SoldOut"] = "SoldOut";
})(ItemAvailability || (ItemAvailability = {}));
exports.default = ItemAvailability;

},{}],29:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],30:[function(require,module,exports){
"use strict";
/**
 * 組織タイプ
 */
Object.defineProperty(exports, "__esModule", { value: true });
var OrganizationType;
(function (OrganizationType) {
    OrganizationType["Corporation"] = "Corporation";
    OrganizationType["MovieTheater"] = "MovieTheater";
})(OrganizationType || (OrganizationType = {}));
exports.default = OrganizationType;

},{}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 決済方法タイプ
 */
var PaymentMethodType;
(function (PaymentMethodType) {
    /**
     * 現金
     */
    PaymentMethodType["Cash"] = "Cash";
    /**
     * 内部口座決済
     */
    PaymentMethodType["Account"] = "Account";
    /**
     * 電子マネー
     */
    PaymentMethodType["EMoney"] = "EMoney";
    /**
     * クレジットカード決済
     */
    PaymentMethodType["CreditCard"] = "CreditCard";
    /**
     * ムビチケ
     */
    PaymentMethodType["MovieTicket"] = "MovieTicket";
})(PaymentMethodType || (PaymentMethodType = {}));
exports.default = PaymentMethodType;

},{}],32:[function(require,module,exports){
"use strict";
/**
 * 場所タイプ
 */
Object.defineProperty(exports, "__esModule", { value: true });
var PlaceType;
(function (PlaceType) {
    PlaceType["MovieTheater"] = "MovieTheater";
    PlaceType["ScreeningRoom"] = "ScreeningRoom";
    PlaceType["ScreeningRoomSection"] = "ScreeningRoomSection";
    PlaceType["Seat"] = "Seat";
})(PlaceType || (PlaceType = {}));
exports.default = PlaceType;

},{}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 座席タイプ
 */
var SeatingType;
(function (SeatingType) {
    SeatingType["WheelChair"] = "WheelChair";
})(SeatingType = exports.SeatingType || (exports.SeatingType = {}));

},{}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * price currency
 * The currency (in 3-letter ISO 4217 format) of the price or a price component,
 * when attached to PriceSpecification and its subtypes.
 */
var PriceCurrency;
(function (PriceCurrency) {
    PriceCurrency["JPY"] = "JPY";
})(PriceCurrency || (PriceCurrency = {}));
exports.default = PriceCurrency;

},{}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 価格仕様タイプ
 */
var PriceSpecificationType;
(function (PriceSpecificationType) {
    /**
     * 複合価格仕様
     */
    PriceSpecificationType["CompoundPriceSpecification"] = "CompoundPriceSpecification";
    /**
     * ムビチケ券種区分チャージ仕様
     */
    PriceSpecificationType["MovieTicketTypeChargeSpecification"] = "MovieTicketTypeChargeSpecification";
    /**
     * 音響方式チャージ仕様
     */
    PriceSpecificationType["SoundFormatChargeSpecification"] = "SoundFormatChargeSpecification";
    /**
     * 単価仕様
     */
    PriceSpecificationType["UnitPriceSpecification"] = "UnitPriceSpecification";
    /**
     * 上映方式チャージし仕様
     */
    PriceSpecificationType["VideoFormatChargeSpecification"] = "VideoFormatChargeSpecification";
})(PriceSpecificationType || (PriceSpecificationType = {}));
exports.default = PriceSpecificationType;

},{}],36:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],37:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Enumerated status values for Reservation.
 */
var ReservationStatusType;
(function (ReservationStatusType) {
    /**
     * The status for a previously confirmed reservation that is now cancelled.
     */
    ReservationStatusType["ReservationCancelled"] = "ReservationCancelled";
    /**
     * The status of a confirmed reservation.
     */
    ReservationStatusType["ReservationConfirmed"] = "ReservationConfirmed";
    /**
     * The status of a reservation on hold pending an update like credit card number or flight changes.
     */
    ReservationStatusType["ReservationHold"] = "ReservationHold";
    /**
     * The status of a reservation when a request has been sent, but not confirmed.
     */
    ReservationStatusType["ReservationPending"] = "ReservationPending";
})(ReservationStatusType || (ReservationStatusType = {}));
exports.default = ReservationStatusType;

},{}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 予約タイプ
 */
var ReservationType;
(function (ReservationType) {
    ReservationType["EventReservation"] = "EventReservation";
})(ReservationType || (ReservationType = {}));
exports.default = ReservationType;

},{}],40:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],41:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * ソートタイプ
 */
var SortType;
(function (SortType) {
    SortType[SortType["Ascending"] = 1] = "Ascending";
    SortType[SortType["Descending"] = -1] = "Descending";
})(SortType || (SortType = {}));
exports.default = SortType;

},{}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 音響方式
 */
var SoundFormatType;
(function (SoundFormatType) {
    SoundFormatType["DIGITAL"] = "DIGITAL";
    SoundFormatType["DOLBY_ATMOS"] = "DOLBY_ATMOS";
})(SoundFormatType || (SoundFormatType = {}));
exports.default = SoundFormatType;

},{}],44:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * タスク名
 */
var TaskName;
(function (TaskName) {
    TaskName["Reserve"] = "reserve";
    TaskName["CancelReservation"] = "cancelReservation";
    TaskName["CancelPendingReservation"] = "cancelPendingReservation";
    TaskName["AggregateScreeningEvent"] = "aggregateScreeningEvent";
})(TaskName || (TaskName = {}));
exports.default = TaskName;

},{}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * タスクステータス
 */
var TaskStatus;
(function (TaskStatus) {
    /**
     * 準備OK
     */
    TaskStatus["Ready"] = "Ready";
    /**
     * 実行中
     */
    TaskStatus["Running"] = "Running";
    /**
     * 実行済
     */
    TaskStatus["Executed"] = "Executed";
    /**
     * 実行中止
     */
    TaskStatus["Aborted"] = "Aborted";
})(TaskStatus || (TaskStatus = {}));
exports.default = TaskStatus;

},{}],47:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],48:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],49:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],50:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],51:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],52:[function(require,module,exports){
"use strict";
/**
 * 取引ステータス
 */
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionStatusType;
(function (TransactionStatusType) {
    TransactionStatusType["InProgress"] = "InProgress";
    TransactionStatusType["Canceled"] = "Canceled";
    TransactionStatusType["Confirmed"] = "Confirmed";
    TransactionStatusType["Expired"] = "Expired";
})(TransactionStatusType || (TransactionStatusType = {}));
exports.default = TransactionStatusType;

},{}],53:[function(require,module,exports){
"use strict";
/**
 * 取引タスクエクスポートステータス
 */
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionTasksExportationStatus;
(function (TransactionTasksExportationStatus) {
    /**
     * 未エクスポート
     */
    TransactionTasksExportationStatus["Unexported"] = "Unexported";
    /**
     * エクスポート中
     */
    TransactionTasksExportationStatus["Exporting"] = "Exporting";
    /**
     * エクスポート済
     */
    TransactionTasksExportationStatus["Exported"] = "Exported";
})(TransactionTasksExportationStatus || (TransactionTasksExportationStatus = {}));
exports.default = TransactionTasksExportationStatus;

},{}],54:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 取引タイプ
 */
var TransactionType;
(function (TransactionType) {
    /**
     * 座席予約
     */
    TransactionType["Reserve"] = "Reserve";
    /**
     * 座席予約キャンセル
     */
    TransactionType["CancelReservation"] = "CancelReservation";
})(TransactionType || (TransactionType = {}));
exports.default = TransactionType;

},{}],55:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],56:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],57:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 単位符号
 */
var UnitCode;
(function (UnitCode) {
    /**
     * no unit
     */
    UnitCode["C62"] = "C62";
    /**
     * 日
     */
    UnitCode["Day"] = "DAY";
    /**
     * 秒
     */
    UnitCode["Sec"] = "SEC";
})(UnitCode = exports.UnitCode || (exports.UnitCode = {}));

},{}],58:[function(require,module,exports){
"use strict";
/**
 * URLファクトリー
 */
Object.defineProperty(exports, "__esModule", { value: true });

},{}],59:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 上映方式
 */
var VideoFormatType;
(function (VideoFormatType) {
    VideoFormatType["2D"] = "2D";
    VideoFormatType["3D"] = "3D";
    VideoFormatType["IMAX"] = "IMAX";
    VideoFormatType["4DX"] = "4DX";
    VideoFormatType["TCX"] = "TCX";
    VideoFormatType["MX4D"] = "MX4D";
})(VideoFormatType || (VideoFormatType = {}));
exports.default = VideoFormatType;

},{}],60:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CancelReservationActionFactory = require("./factory/action/cancel/reservation");
var ReserveActionFactory = require("./factory/action/reserve");
var actionStatusType_1 = require("./factory/actionStatusType");
var actionType_1 = require("./factory/actionType");
var AccountTitleFactory = require("./factory/accountTitle");
var ClientUserFactory = require("./factory/clientUser");
var EmailMessageFactory = require("./factory/creativeWork/message/email");
var MovieCreativeWorkFactory = require("./factory/creativeWork/movie");
var creativeWorkType_1 = require("./factory/creativeWorkType");
var ScreeningEventFactory = require("./factory/event/screeningEvent");
var ScreeningEventSeriesFactory = require("./factory/event/screeningEventSeries");
var eventStatusType_1 = require("./factory/eventStatusType");
var eventType_1 = require("./factory/eventType");
var itemAvailability_1 = require("./factory/itemAvailability");
var LanguageFactory = require("./factory/language");
var organizationType_1 = require("./factory/organizationType");
var paymentMethodType_1 = require("./factory/paymentMethodType");
var MovieTheaterPlaceFactory = require("./factory/place/movieTheater");
var placeType_1 = require("./factory/placeType");
var priceCurrency_1 = require("./factory/priceCurrency");
var priceSpecificationType_1 = require("./factory/priceSpecificationType");
var PropertyValueFactory = require("./factory/propertyValue");
var QuantitativeValueFactory = require("./factory/quantitativeValue");
var EventReservationFactory = require("./factory/reservation/event");
var reservationStatusType_1 = require("./factory/reservationStatusType");
var reservationType_1 = require("./factory/reservationType");
var ServiceTypeFactory = require("./factory/serviceType");
var sortType_1 = require("./factory/sortType");
var soundFormatType_1 = require("./factory/soundFormatType");
var TicketTypeFactory = require("./factory/ticketType");
var unitCode_1 = require("./factory/unitCode");
var videoFormatType_1 = require("./factory/videoFormatType");
var AggregateScreeningEventTaskFactory = require("./factory/task/aggregateScreeningEvent");
var CancelPendingReservationTaskFactory = require("./factory/task/cancelPendingReservation");
var CancelReservationTaskFactory = require("./factory/task/cancelReservation");
var ReserveTaskFactory = require("./factory/task/reserve");
var TaskExecutionResultFactory = require("./factory/taskExecutionResult");
var taskName_1 = require("./factory/taskName");
var taskStatus_1 = require("./factory/taskStatus");
var CancelReservationTransactionFactory = require("./factory/transaction/cancelReservation");
var ReserveTransactionFactory = require("./factory/transaction/reserve");
var transactionStatusType_1 = require("./factory/transactionStatusType");
var transactionTasksExportationStatus_1 = require("./factory/transactionTasksExportationStatus");
var transactionType_1 = require("./factory/transactionType");
var URLFactory = require("./factory/url");
var errorCode_1 = require("./factory/errorCode");
var errors = require("./factory/errors");
exports.errors = errors;
exports.errorCode = errorCode_1.default;
exports.actionStatusType = actionStatusType_1.default;
exports.actionType = actionType_1.default;
var action;
(function (action) {
    var authorize;
    (function (authorize) {
    })(authorize = action.authorize || (action.authorize = {}));
    var cancel;
    (function (cancel) {
        // tslint:disable-next-line:no-shadowed-variable
        cancel.reservation = CancelReservationActionFactory;
    })(cancel = action.cancel || (action.cancel = {}));
    action.reserve = ReserveActionFactory;
})(action = exports.action || (exports.action = {}));
exports.accountTitle = AccountTitleFactory;
exports.clientUser = ClientUserFactory;
var creativeWork;
(function (creativeWork) {
    var message;
    (function (message) {
        message.email = EmailMessageFactory;
    })(message = creativeWork.message || (creativeWork.message = {}));
    creativeWork.movie = MovieCreativeWorkFactory;
})(creativeWork = exports.creativeWork || (exports.creativeWork = {}));
exports.creativeWorkType = creativeWorkType_1.default;
var event;
(function (event) {
    event.screeningEvent = ScreeningEventFactory;
    event.screeningEventSeries = ScreeningEventSeriesFactory;
})(event = exports.event || (exports.event = {}));
exports.eventStatusType = eventStatusType_1.default;
exports.eventType = eventType_1.default;
exports.itemAvailability = itemAvailability_1.default;
exports.language = LanguageFactory;
var offer;
(function (offer) {
})(offer = exports.offer || (exports.offer = {}));
var organization;
(function (organization) {
})(organization = exports.organization || (exports.organization = {}));
exports.organizationType = organizationType_1.default;
exports.paymentMethodType = paymentMethodType_1.default;
exports.priceCurrency = priceCurrency_1.default;
var place;
(function (place) {
    place.movieTheater = MovieTheaterPlaceFactory;
})(place = exports.place || (exports.place = {}));
exports.placeType = placeType_1.default;
exports.priceSpecificationType = priceSpecificationType_1.default;
exports.propertyValue = PropertyValueFactory;
exports.quantitativeValue = QuantitativeValueFactory;
var reservation;
(function (reservation) {
    // tslint:disable-next-line:no-shadowed-variable
    reservation.event = EventReservationFactory;
})(reservation = exports.reservation || (exports.reservation = {}));
exports.reservationStatusType = reservationStatusType_1.default;
exports.reservationType = reservationType_1.default;
var task;
(function (task) {
    task.aggregateScreeningEvent = AggregateScreeningEventTaskFactory;
    task.cancelPendingReservation = CancelPendingReservationTaskFactory;
    task.cancelReservation = CancelReservationTaskFactory;
    task.reserve = ReserveTaskFactory;
})(task = exports.task || (exports.task = {}));
exports.serviceType = ServiceTypeFactory;
exports.sortType = sortType_1.default;
exports.soundFormatType = soundFormatType_1.default;
exports.taskExecutionResult = TaskExecutionResultFactory;
exports.taskName = taskName_1.default;
exports.taskStatus = taskStatus_1.default;
var transaction;
(function (transaction) {
    transaction.cancelReservation = CancelReservationTransactionFactory;
    transaction.reserve = ReserveTransactionFactory;
})(transaction = exports.transaction || (exports.transaction = {}));
exports.ticketType = TicketTypeFactory;
exports.transactionStatusType = transactionStatusType_1.default;
exports.transactionTasksExportationStatus = transactionTasksExportationStatus_1.default;
exports.transactionType = transactionType_1.default;
exports.unitCode = unitCode_1.UnitCode;
exports.url = URLFactory;
exports.videoFormatType = videoFormatType_1.default;

},{"./factory/accountTitle":3,"./factory/action/cancel/reservation":6,"./factory/action/reserve":7,"./factory/actionStatusType":4,"./factory/actionType":5,"./factory/clientUser":8,"./factory/creativeWork/message/email":10,"./factory/creativeWork/movie":11,"./factory/creativeWorkType":9,"./factory/errorCode":12,"./factory/errors":23,"./factory/event/screeningEvent":26,"./factory/event/screeningEventSeries":27,"./factory/eventStatusType":24,"./factory/eventType":25,"./factory/itemAvailability":28,"./factory/language":29,"./factory/organizationType":30,"./factory/paymentMethodType":31,"./factory/place/movieTheater":33,"./factory/placeType":32,"./factory/priceCurrency":34,"./factory/priceSpecificationType":35,"./factory/propertyValue":36,"./factory/quantitativeValue":37,"./factory/reservation/event":40,"./factory/reservationStatusType":38,"./factory/reservationType":39,"./factory/serviceType":41,"./factory/sortType":42,"./factory/soundFormatType":43,"./factory/task/aggregateScreeningEvent":47,"./factory/task/cancelPendingReservation":48,"./factory/task/cancelReservation":49,"./factory/task/reserve":50,"./factory/taskExecutionResult":44,"./factory/taskName":45,"./factory/taskStatus":46,"./factory/ticketType":51,"./factory/transaction/cancelReservation":55,"./factory/transaction/reserve":56,"./factory/transactionStatusType":52,"./factory/transactionTasksExportationStatus":53,"./factory/transactionType":54,"./factory/unitCode":57,"./factory/url":58,"./factory/videoFormatType":59}],61:[function(require,module,exports){
"use strict";
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var transporters_1 = require("../transporters");
/**
 * 抽象認証クライアント
 */
var AuthClient = /** @class */ (function () {
    function AuthClient() {
    }
    return AuthClient;
}());
exports.AuthClient = AuthClient;
/**
 * テスト認証クライアント
 */
// tslint:disable-next-line:no-single-line-block-comment
/* istanbul ignore next */
var StubAuthClient = /** @class */ (function () {
    function StubAuthClient() {
    }
    // tslint:disable-next-line:prefer-function-over-method
    StubAuthClient.prototype.fetch = function (url, options, expectedStatusCodes) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (new transporters_1.DefaultTransporter(expectedStatusCodes)).fetch(url, options)];
            });
        });
    };
    // tslint:disable-next-line:prefer-function-over-method
    StubAuthClient.prototype.getAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, 'access_token'];
            });
        });
    };
    return StubAuthClient;
}());
exports.StubAuthClient = StubAuthClient;

},{"../transporters":81}],62:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * factory
 */
__export(require("@cinerino/factory"));

},{"@cinerino/factory":161}],63:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:max-classes-per-file
/**
 * API Service Library for Javascript
 */
var factory = require("./factory");
var ServiceFactory = require("./service");
var authClient_1 = require("./auth/authClient");
var creativeWork_1 = require("./service/creativeWork");
var delivery_1 = require("./service/delivery");
var event_1 = require("./service/event");
var order_1 = require("./service/order");
var organization_1 = require("./service/organization");
var ownershipInfo_1 = require("./service/ownershipInfo");
var payment_1 = require("./service/payment");
var paymentMethod_1 = require("./service/paymentMethod");
var person_1 = require("./service/person");
var ownershipInfo_2 = require("./service/person/ownershipInfo");
var reservation_1 = require("./service/reservation");
var seller_1 = require("./service/seller");
var task_1 = require("./service/task");
var placeOrder_1 = require("./service/transaction/placeOrder");
var returnOrder_1 = require("./service/transaction/returnOrder");
var userPool_1 = require("./service/userPool");
var transporters = require("./transporters");
exports.factory = factory;
exports.transporters = transporters;
/**
 * 認証クライアント抽象クラス
 */
var Auth = /** @class */ (function (_super) {
    __extends(Auth, _super);
    function Auth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Auth;
}(authClient_1.AuthClient));
exports.Auth = Auth;
var auth;
(function (auth) {
    /**
     * 抽象認証クライアント
     */
    // tslint:disable-next-line:no-shadowed-variable
    var Auth = /** @class */ (function (_super) {
        __extends(Auth, _super);
        function Auth() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Auth;
    }(authClient_1.AuthClient));
    auth.Auth = Auth;
    /**
     * スタブ認証クライアント
     */
    var StubAuth = /** @class */ (function (_super) {
        __extends(StubAuth, _super);
        function StubAuth() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return StubAuth;
    }(authClient_1.StubAuthClient));
    auth.StubAuth = StubAuth;
})(auth = exports.auth || (exports.auth = {}));
/**
 * サービスモジュール
 */
var service;
(function (service) {
    /**
     * Baseサービス
     */
    var Service = /** @class */ (function (_super) {
        __extends(Service, _super);
        function Service() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Service;
    }(ServiceFactory.Service));
    service.Service = Service;
    /**
     * 作品サービス
     */
    var CreativeWork = /** @class */ (function (_super) {
        __extends(CreativeWork, _super);
        function CreativeWork() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CreativeWork;
    }(creativeWork_1.CreativeWorkService));
    service.CreativeWork = CreativeWork;
    /**
     * 配送サービス
     */
    var Delivery = /** @class */ (function (_super) {
        __extends(Delivery, _super);
        function Delivery() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Delivery;
    }(delivery_1.DeliveryService));
    service.Delivery = Delivery;
    /**
     * イベントサービス
     */
    var Event = /** @class */ (function (_super) {
        __extends(Event, _super);
        function Event() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Event;
    }(event_1.EventService));
    service.Event = Event;
    /**
     * 注文サービス
     */
    var Order = /** @class */ (function (_super) {
        __extends(Order, _super);
        function Order() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Order;
    }(order_1.OrderService));
    service.Order = Order;
    /**
     * 組織サービス
     */
    var Organization = /** @class */ (function (_super) {
        __extends(Organization, _super);
        function Organization() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Organization;
    }(organization_1.OrganizationService));
    service.Organization = Organization;
    /**
     * 所有権サービス
     */
    var OwnershipInfo = /** @class */ (function (_super) {
        __extends(OwnershipInfo, _super);
        function OwnershipInfo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return OwnershipInfo;
    }(ownershipInfo_1.OwnershipInfoService));
    service.OwnershipInfo = OwnershipInfo;
    /**
     * 決済サービス
     */
    var Payment = /** @class */ (function (_super) {
        __extends(Payment, _super);
        function Payment() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Payment;
    }(payment_1.PaymentService));
    service.Payment = Payment;
    /**
     * 決済方法サービス
     */
    var PaymentMethod = /** @class */ (function (_super) {
        __extends(PaymentMethod, _super);
        function PaymentMethod() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PaymentMethod;
    }(paymentMethod_1.PaymentMethodService));
    service.PaymentMethod = PaymentMethod;
    /**
     * ユーザーサービス
     */
    var Person = /** @class */ (function (_super) {
        __extends(Person, _super);
        function Person() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Person;
    }(person_1.PersonService));
    service.Person = Person;
    var person;
    (function (person) {
        /**
         * ユーザー所有権サービス
         */
        // tslint:disable-next-line:no-shadowed-variable
        var OwnershipInfo = /** @class */ (function (_super) {
            __extends(OwnershipInfo, _super);
            function OwnershipInfo() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return OwnershipInfo;
        }(ownershipInfo_2.PersonOwnershipInfoService));
        person.OwnershipInfo = OwnershipInfo;
    })(person = service.person || (service.person = {}));
    /**
     * 予約サービス
     */
    var Reservation = /** @class */ (function (_super) {
        __extends(Reservation, _super);
        function Reservation() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Reservation;
    }(reservation_1.ReservationService));
    service.Reservation = Reservation;
    /**
     * 販売者サービス
     */
    var Seller = /** @class */ (function (_super) {
        __extends(Seller, _super);
        function Seller() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Seller;
    }(seller_1.SellerService));
    service.Seller = Seller;
    /**
     * タスクサービス
     */
    var Task = /** @class */ (function (_super) {
        __extends(Task, _super);
        function Task() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Task;
    }(task_1.TaskService));
    service.Task = Task;
    /**
     * 取引サービス
     */
    var transaction;
    (function (transaction) {
        /**
         * 注文取引サービス
         */
        var PlaceOrder = /** @class */ (function (_super) {
            __extends(PlaceOrder, _super);
            function PlaceOrder() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return PlaceOrder;
        }(placeOrder_1.PlaceOrderTransactionService));
        transaction.PlaceOrder = PlaceOrder;
        /**
         * 注文返品取引サービス
         */
        var ReturnOrder = /** @class */ (function (_super) {
            __extends(ReturnOrder, _super);
            function ReturnOrder() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ReturnOrder;
        }(returnOrder_1.ReturnOrderTransactionService));
        transaction.ReturnOrder = ReturnOrder;
    })(transaction = service.transaction || (service.transaction = {}));
    /**
     * 取引サービス
     * @alias service.transaction
     */
    service.txn = transaction;
    /**
     * Cognitoユーザープールサービス
     */
    var UserPool = /** @class */ (function (_super) {
        __extends(UserPool, _super);
        function UserPool() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return UserPool;
    }(userPool_1.UserPoolService));
    service.UserPool = UserPool;
})(service = exports.service || (exports.service = {}));

},{"./auth/authClient":61,"./factory":62,"./service":64,"./service/creativeWork":65,"./service/delivery":66,"./service/event":67,"./service/order":68,"./service/organization":69,"./service/ownershipInfo":70,"./service/payment":71,"./service/paymentMethod":72,"./service/person":73,"./service/person/ownershipInfo":74,"./service/reservation":75,"./service/seller":76,"./service/task":77,"./service/transaction/placeOrder":78,"./service/transaction/returnOrder":79,"./service/userPool":80,"./transporters":81}],64:[function(require,module,exports){
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var qs = require("qs");
var transporters_1 = require("./transporters");
/**
 * base service class
 */
var Service = /** @class */ (function () {
    function Service(options) {
        this.options = options;
    }
    /**
     * Create and send request to API
     */
    Service.prototype.fetch = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var defaultOptions, baseUrl, url, querystrings, headers, fetchOptions, transporter;
            return __generator(this, function (_a) {
                defaultOptions = {
                    headers: {},
                    method: 'GET'
                };
                // tslint:disable-next-line:no-parameter-reassignment
                options = __assign({}, defaultOptions, options);
                baseUrl = this.options.endpoint;
                url = "" + baseUrl + options.uri;
                querystrings = qs.stringify(options.qs);
                url += (querystrings.length > 0) ? "?" + querystrings : '';
                headers = __assign({
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }, options.headers);
                fetchOptions = {
                    method: options.method,
                    headers: headers,
                    body: JSON.stringify(options.body)
                };
                // create request (using authClient or otherwise and return request obj)
                if (this.options.auth !== undefined) {
                    return [2 /*return*/, this.options.auth.fetch(url, fetchOptions, options.expectedStatusCodes)];
                }
                else {
                    transporter = (this.options.transporter !== undefined) ? this.options.transporter : new transporters_1.DefaultTransporter(options.expectedStatusCodes);
                    return [2 /*return*/, transporter.fetch(url, fetchOptions)];
                }
                return [2 /*return*/];
            });
        });
    };
    return Service;
}());
exports.Service = Service;

},{"./transporters":81,"qs":463}],65:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var http_status_1 = require("http-status");
var service_1 = require("../service");
/**
 * 作品サービス
 */
var CreativeWorkService = /** @class */ (function (_super) {
    __extends(CreativeWorkService, _super);
    function CreativeWorkService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 映画作品検索
     */
    CreativeWorkService.prototype.searchMovies = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/creativeWorks/movie',
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = {
                                        totalCount: Number(response.headers.get('X-Total-Count'))
                                    };
                                    return [4 /*yield*/, response.json()];
                                case 1: return [2 /*return*/, (_a.data = _b.sent(),
                                        _a)];
                            }
                        });
                    }); })];
            });
        });
    };
    return CreativeWorkService;
}(service_1.Service));
exports.CreativeWorkService = CreativeWorkService;

},{"../service":64,"http-status":451}],66:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var http_status_1 = require("http-status");
var service_1 = require("../service");
/**
 * 配送サービス
 */
var DeliveryService = /** @class */ (function (_super) {
    __extends(DeliveryService, _super);
    function DeliveryService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 注文を配送する
     */
    DeliveryService.prototype.sendOrder = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch({
                            uri: "/orders/" + params.orderNumber + "/deliver",
                            method: 'POST',
                            expectedStatusCodes: [http_status_1.NO_CONTENT]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return DeliveryService;
}(service_1.Service));
exports.DeliveryService = DeliveryService;

},{"../service":64,"http-status":451}],67:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var http_status_1 = require("http-status");
var service_1 = require("../service");
/**
 * event service
 */
var EventService = /** @class */ (function (_super) {
    __extends(EventService, _super);
    function EventService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 上映イベント検索
     */
    EventService.prototype.searchScreeningEvents = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/events/screeningEvent',
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = {
                                        totalCount: Number(response.headers.get('X-Total-Count'))
                                    };
                                    return [4 /*yield*/, response.json()];
                                case 1: return [2 /*return*/, (_a.data = _b.sent(),
                                        _a)];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * IDで上映イベント検索
     */
    EventService.prototype.findScreeningEventById = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/events/screeningEvent/" + params.id,
                        method: 'GET',
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 上映イベントに対する座席オファー検索
     */
    EventService.prototype.searchScreeningEventOffers = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/events/screeningEvent/" + params.eventId + "/offers",
                        method: 'GET',
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 上映イベントに対する券種オファー検索
     */
    EventService.prototype.searchScreeningEventTicketOffers = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/events/screeningEvent/" + params.event.id + "/offers/ticket",
                        method: 'GET',
                        expectedStatusCodes: [http_status_1.OK],
                        qs: params
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    return EventService;
}(service_1.Service));
exports.EventService = EventService;

},{"../service":64,"http-status":451}],68:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var http_status_1 = require("http-status");
var service_1 = require("../service");
/**
 * 注文サービス
 */
var OrderService = /** @class */ (function (_super) {
    __extends(OrderService, _super);
    function OrderService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 注文を作成する
     */
    OrderService.prototype.placeOrder = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/orders',
                        method: 'POST',
                        body: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 確認番号で検索
     * 確認番号と購入者情報より、最新の注文を検索します
     */
    OrderService.prototype.findByConfirmationNumber = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/orders/findByConfirmationNumber',
                        method: 'POST',
                        body: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 所有権コードを発行する
     */
    OrderService.prototype.authorizeOwnershipInfos = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/orders/" + params.orderNumber + "/ownershipInfos/authorize",
                        method: 'POST',
                        body: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 注文に対するアクションを検索する
     */
    OrderService.prototype.searchActionsByOrderNumber = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/orders/" + params.orderNumber + "/actions",
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 注文を検索する
     */
    OrderService.prototype.search = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/orders',
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = {
                                        totalCount: Number(response.headers.get('X-Total-Count'))
                                    };
                                    return [4 /*yield*/, response.json()];
                                case 1: return [2 /*return*/, (_a.data = _b.sent(),
                                        _a)];
                            }
                        });
                    }); })];
            });
        });
    };
    return OrderService;
}(service_1.Service));
exports.OrderService = OrderService;

},{"../service":64,"http-status":451}],69:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var http_status_1 = require("http-status");
var service_1 = require("../service");
/**
 * organization service
 */
var OrganizationService = /** @class */ (function (_super) {
    __extends(OrganizationService, _super);
    function OrganizationService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 劇場組織オープン
     */
    OrganizationService.prototype.openMovieTheater = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/organizations/movieTheater',
                        method: 'POST',
                        body: params,
                        expectedStatusCodes: [http_status_1.CREATED]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 劇場組織をIDで取得
     */
    OrganizationService.prototype.findMovieTheaterById = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/organizations/movieTheater/" + params.id,
                        method: 'GET',
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 劇場組織検索
     */
    OrganizationService.prototype.searchMovieTheaters = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/organizations/movieTheater',
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = {
                                        totalCount: Number(response.headers.get('X-Total-Count'))
                                    };
                                    return [4 /*yield*/, response.json()];
                                case 1: return [2 /*return*/, (_a.data = _b.sent(),
                                        _a)];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * 劇場組織をIDで更新
     */
    OrganizationService.prototype.updateMovieTheaterById = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch({
                            uri: "/organizations/movieTheater/" + params.id,
                            method: 'PUT',
                            body: params.attributes,
                            expectedStatusCodes: [http_status_1.NO_CONTENT]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 劇場組織をIDで削除
     */
    OrganizationService.prototype.deleteMovieTheaterById = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch({
                            uri: "/organizations/movieTheater/" + params.id,
                            method: 'DELETE',
                            expectedStatusCodes: [http_status_1.NO_CONTENT]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return OrganizationService;
}(service_1.Service));
exports.OrganizationService = OrganizationService;

},{"../service":64,"http-status":451}],70:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var http_status_1 = require("http-status");
var service_1 = require("../service");
/**
 * 所有権サービス
 */
var OwnershipInfoService = /** @class */ (function (_super) {
    __extends(OwnershipInfoService, _super);
    function OwnershipInfoService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 所有権トークンを取得する
     */
    OwnershipInfoService.prototype.getToken = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/ownershipInfos/tokens',
                        method: 'POST',
                        body: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 所有権検証アクションを検索する
     */
    OwnershipInfoService.prototype.searchCheckTokenActions = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/ownershipInfos/" + params.id + "/actions/checkToken",
                        method: 'GET',
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = {
                                        totalCount: Number(response.headers.get('X-Total-Count'))
                                    };
                                    return [4 /*yield*/, response.json()];
                                case 1: return [2 /*return*/, (_a.data = _b.sent(),
                                        _a)];
                            }
                        });
                    }); })];
            });
        });
    };
    return OwnershipInfoService;
}(service_1.Service));
exports.OwnershipInfoService = OwnershipInfoService;

},{"../service":64,"http-status":451}],71:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var http_status_1 = require("http-status");
var service_1 = require("../service");
/**
 * 決済サービス
 */
var PaymentService = /** @class */ (function (_super) {
    __extends(PaymentService, _super);
    function PaymentService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * ムビチケ購入番号確認
     */
    PaymentService.prototype.checkMovieTicket = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/payment/movieTicket/actions/check",
                        method: 'POST',
                        expectedStatusCodes: [http_status_1.CREATED],
                        body: params
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    return PaymentService;
}(service_1.Service));
exports.PaymentService = PaymentService;

},{"../service":64,"http-status":451}],72:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var http_status_1 = require("http-status");
var service_1 = require("../service");
/**
 * 決済方法サービス
 */
var PaymentMethodService = /** @class */ (function (_super) {
    __extends(PaymentMethodService, _super);
    function PaymentMethodService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * ムビチケを検索する
     */
    PaymentMethodService.prototype.searchMovieTickets = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/paymentMethods/movieTicket',
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = {
                                        totalCount: Number(response.headers.get('X-Total-Count'))
                                    };
                                    return [4 /*yield*/, response.json()];
                                case 1: return [2 /*return*/, (_a.data = _b.sent(),
                                        _a)];
                            }
                        });
                    }); })];
            });
        });
    };
    return PaymentMethodService;
}(service_1.Service));
exports.PaymentMethodService = PaymentMethodService;

},{"../service":64,"http-status":451}],73:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var http_status_1 = require("http-status");
var service_1 = require("../service");
/**
 * ユーザーサービス
 */
var PersonService = /** @class */ (function (_super) {
    __extends(PersonService, _super);
    function PersonService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * プロフィール検索
     */
    PersonService.prototype.getProfile = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            var _this = this;
            return __generator(this, function (_a) {
                id = (params.personId !== undefined) ? params.personId : (params.id !== undefined) ? params.id : 'me';
                return [2 /*return*/, this.fetch({
                        uri: "/people/" + id + "/profile",
                        method: 'GET',
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * プロフィール更新
     */
    PersonService.prototype.updateProfile = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = (params.personId !== undefined) ? params.personId : (params.id !== undefined) ? params.id : 'me';
                        return [4 /*yield*/, this.fetch({
                                uri: "/people/" + id + "/profile",
                                method: 'PATCH',
                                body: params,
                                expectedStatusCodes: [http_status_1.NO_CONTENT]
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 注文を検索する
     */
    PersonService.prototype.searchOrders = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var id;
            var _this = this;
            return __generator(this, function (_a) {
                id = (params.personId !== undefined) ? params.personId : (params.id !== undefined) ? params.id : 'me';
                return [2 /*return*/, this.fetch({
                        uri: "/people/" + id + "/orders",
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = {
                                        totalCount: Number(response.headers.get('X-Total-Count'))
                                    };
                                    return [4 /*yield*/, response.json()];
                                case 1: return [2 /*return*/, (_a.data = _b.sent(),
                                        _a)];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * 会員検索
     */
    PersonService.prototype.search = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/people',
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = {
                                        totalCount: Number(response.headers.get('X-Total-Count'))
                                    };
                                    return [4 /*yield*/, response.json()];
                                case 1: return [2 /*return*/, (_a.data = _b.sent(),
                                        _a)];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * IDで検索
     */
    PersonService.prototype.findById = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/people/" + params.id,
                        method: 'GET',
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    return PersonService;
}(service_1.Service));
exports.PersonService = PersonService;

},{"../service":64,"http-status":451}],74:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var http_status_1 = require("http-status");
var service_1 = require("../../service");
/**
 * ユーザー所有権サービス
 */
var PersonOwnershipInfoService = /** @class */ (function (_super) {
    __extends(PersonOwnershipInfoService, _super);
    function PersonOwnershipInfoService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * クレジットカード追加
     */
    PersonOwnershipInfoService.prototype.addCreditCard = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/people/" + params.personId + "/ownershipInfos/creditCards",
                        method: 'POST',
                        body: params.creditCard,
                        expectedStatusCodes: [http_status_1.CREATED]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * クレジットカード検索
     */
    PersonOwnershipInfoService.prototype.searchCreditCards = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/people/" + params.personId + "/ownershipInfos/creditCards",
                        method: 'GET',
                        qs: {},
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * クレジットカード削除
     */
    PersonOwnershipInfoService.prototype.deleteCreditCard = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch({
                            uri: "/people/" + params.personId + "/ownershipInfos/creditCards/" + params.cardSeq,
                            method: 'DELETE',
                            expectedStatusCodes: [http_status_1.NO_CONTENT]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 口座開設
     */
    PersonOwnershipInfoService.prototype.openAccount = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/people/" + params.personId + "/ownershipInfos/accounts/" + params.accountType,
                        method: 'POST',
                        body: {
                            name: params.name
                        },
                        expectedStatusCodes: [http_status_1.CREATED]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 口座解約
     * 口座の状態を変更するだけで、ユーザーの所有する口座リストから削除はされません。
     * 解約された口座で取引を進行しようとすると400エラーとなります。
     */
    PersonOwnershipInfoService.prototype.closeAccount = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch({
                            uri: "/people/" + params.personId + "/ownershipInfos/accounts/" + params.accountType + "/" + params.accountNumber + "/close",
                            method: 'PUT',
                            expectedStatusCodes: [http_status_1.NO_CONTENT]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 口座取引履歴検索
     */
    PersonOwnershipInfoService.prototype.searchAccountMoneyTransferActions = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        // tslint:disable-next-line:max-line-length
                        uri: "/people/" + params.personId + "/ownershipInfos/accounts/actions/moneyTransfer",
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = {
                                        totalCount: Number(response.headers.get('X-Total-Count'))
                                    };
                                    return [4 /*yield*/, response.json()];
                                case 1: return [2 /*return*/, (_a.data = _b.sent(),
                                        _a)];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * 所有権検索
     */
    PersonOwnershipInfoService.prototype.search = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/people/" + params.personId + "/ownershipInfos",
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = {
                                        totalCount: Number(response.headers.get('X-Total-Count'))
                                    };
                                    return [4 /*yield*/, response.json()];
                                case 1: return [2 /*return*/, (_a.data = _b.sent(),
                                        _a)];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * 所有権に対して認可コードを発行する
     */
    PersonOwnershipInfoService.prototype.authorize = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/people/" + params.personId + "/ownershipInfos/" + params.ownershipInfoId + "/authorize",
                        method: 'POST',
                        expectedStatusCodes: [http_status_1.OK],
                        body: params
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    return PersonOwnershipInfoService;
}(service_1.Service));
exports.PersonOwnershipInfoService = PersonOwnershipInfoService;

},{"../../service":64,"http-status":451}],75:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var http_status_1 = require("http-status");
var service_1 = require("../service");
/**
 * 予約サービス
 */
var ReservationService = /** @class */ (function (_super) {
    __extends(ReservationService, _super);
    function ReservationService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 上映イベント予約検索
     */
    ReservationService.prototype.searchScreeningEventReservations = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/reservations/eventReservation/screeningEvent',
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = {
                                        totalCount: Number(response.headers.get('X-Total-Count'))
                                    };
                                    return [4 /*yield*/, response.json()];
                                case 1: return [2 /*return*/, (_a.data = _b.sent(),
                                        _a)];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * トークンで上映イベント予約照会
     */
    ReservationService.prototype.findScreeningEventReservationByToken = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/reservations/eventReservation/screeningEvent/findByToken",
                        method: 'POST',
                        body: { token: params.token },
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    return ReservationService;
}(service_1.Service));
exports.ReservationService = ReservationService;

},{"../service":64,"http-status":451}],76:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var http_status_1 = require("http-status");
var service_1 = require("../service");
/**
 * 販売者サービス
 */
var SellerService = /** @class */ (function (_super) {
    __extends(SellerService, _super);
    function SellerService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 販売者作成
     */
    SellerService.prototype.create = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/sellers',
                        method: 'POST',
                        body: params,
                        expectedStatusCodes: [http_status_1.CREATED]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * IDで検索
     */
    SellerService.prototype.findById = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/sellers/" + params.id,
                        method: 'GET',
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 販売者検索
     */
    SellerService.prototype.search = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/sellers',
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = {
                                        totalCount: Number(response.headers.get('X-Total-Count'))
                                    };
                                    return [4 /*yield*/, response.json()];
                                case 1: return [2 /*return*/, (_a.data = _b.sent(),
                                        _a)];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * 販売者編集
     */
    SellerService.prototype.update = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch({
                            uri: "/sellers/" + params.id,
                            method: 'PUT',
                            body: params.attributes,
                            expectedStatusCodes: [http_status_1.NO_CONTENT]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 販売者削除
     */
    SellerService.prototype.deleteById = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch({
                            uri: "/sellers/" + params.id,
                            method: 'DELETE',
                            expectedStatusCodes: [http_status_1.NO_CONTENT]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return SellerService;
}(service_1.Service));
exports.SellerService = SellerService;

},{"../service":64,"http-status":451}],77:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var http_status_1 = require("http-status");
var service_1 = require("../service");
/**
 * タスクサービス
 */
var TaskService = /** @class */ (function (_super) {
    __extends(TaskService, _super);
    function TaskService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * タスク作成
     */
    TaskService.prototype.create = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/tasks/" + params.name,
                        method: 'POST',
                        body: params,
                        expectedStatusCodes: [http_status_1.CREATED]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * IDで検索
     */
    TaskService.prototype.findById = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/tasks/" + params.name + "/" + params.id,
                        method: 'GET',
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 検索する
     */
    TaskService.prototype.search = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/tasks',
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = {
                                        totalCount: Number(response.headers.get('X-Total-Count'))
                                    };
                                    return [4 /*yield*/, response.json()];
                                case 1: return [2 /*return*/, (_a.data = _b.sent(),
                                        _a)];
                            }
                        });
                    }); })];
            });
        });
    };
    return TaskService;
}(service_1.Service));
exports.TaskService = TaskService;

},{"../service":64,"http-status":451}],78:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var http_status_1 = require("http-status");
var factory = require("../../factory");
var service_1 = require("../../service");
/**
 * 注文取引サービス
 */
var PlaceOrderTransactionService = /** @class */ (function (_super) {
    __extends(PlaceOrderTransactionService, _super);
    function PlaceOrderTransactionService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.typeOf = factory.transactionType.PlaceOrder;
        return _this;
    }
    /**
     * 取引を開始する
     */
    PlaceOrderTransactionService.prototype.start = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/transactions/" + this.typeOf + "/start",
                        method: 'POST',
                        body: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 座席予約承認作成
     */
    PlaceOrderTransactionService.prototype.authorizeSeatReservation = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/transactions/" + this.typeOf + "/" + params.purpose.id + "/actions/authorize/offer/seatReservation",
                        method: 'POST',
                        expectedStatusCodes: [http_status_1.CREATED],
                        body: params.object
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 座席予約承認取消
     */
    PlaceOrderTransactionService.prototype.voidSeatReservation = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch({
                            uri: "/transactions/" + this.typeOf + "/" + params.purpose.id + "/actions/authorize/offer/seatReservation/" + params.id + "/cancel",
                            method: 'PUT',
                            expectedStatusCodes: [http_status_1.NO_CONTENT]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 汎用決済承認
     */
    PlaceOrderTransactionService.prototype.authorizeAnyPayment = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/transactions/" + this.typeOf + "/" + params.purpose.id + "/actions/authorize/paymentMethod/any",
                        method: 'POST',
                        expectedStatusCodes: [http_status_1.CREATED],
                        body: params.object
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 汎用決済承認取消
     */
    PlaceOrderTransactionService.prototype.voidAnyPayment = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch({
                            uri: "/transactions/" + this.typeOf + "/" + params.purpose.id + "/actions/authorize/paymentMethod/any/" + params.id + "/cancel",
                            method: 'PUT',
                            expectedStatusCodes: [http_status_1.NO_CONTENT]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * クレジットカードのオーソリを取得する
     */
    PlaceOrderTransactionService.prototype.authorizeCreditCardPayment = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/transactions/" + this.typeOf + "/" + params.purpose.id + "/actions/authorize/paymentMethod/creditCard",
                        method: 'POST',
                        expectedStatusCodes: [http_status_1.CREATED],
                        body: params.object
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 口座決済のオーソリを取得する
     */
    PlaceOrderTransactionService.prototype.authorizeAccountPayment = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/transactions/" + this.typeOf + "/" + params.purpose.id + "/actions/authorize/paymentMethod/account",
                        method: 'POST',
                        expectedStatusCodes: [http_status_1.CREATED],
                        body: params.object
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * ムビチケ承認
     */
    PlaceOrderTransactionService.prototype.authorizeMovieTicketPayment = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/transactions/" + this.typeOf + "/" + params.purpose.id + "/actions/authorize/paymentMethod/movieTicket",
                        method: 'POST',
                        expectedStatusCodes: [http_status_1.CREATED],
                        body: params.object
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 決済承認取消
     */
    PlaceOrderTransactionService.prototype.voidPayment = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch({
                            // tslint:disable-next-line:max-line-length
                            uri: "/transactions/" + this.typeOf + "/" + params.purpose.id + "/actions/authorize/paymentMethod/" + params.object.typeOf + "/" + params.id + "/cancel",
                            method: 'PUT',
                            expectedStatusCodes: [http_status_1.NO_CONTENT]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ポイントインセンティブのオーソリを取得する
     */
    PlaceOrderTransactionService.prototype.authorizePointAward = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/transactions/" + this.typeOf + "/" + params.purpose.id + "/actions/authorize/award/accounts/point",
                        method: 'POST',
                        expectedStatusCodes: [http_status_1.CREATED],
                        body: params.object
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * ポイントインセンティブオーソリ取消
     */
    PlaceOrderTransactionService.prototype.voidPointAward = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch({
                            uri: "/transactions/" + this.typeOf + "/" + params.purpose.id + "/actions/authorize/award/accounts/point/" + params.id + "/cancel",
                            method: 'PUT',
                            expectedStatusCodes: [http_status_1.NO_CONTENT]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 購入者連絡先登録
     */
    PlaceOrderTransactionService.prototype.setCustomerContact = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/transactions/" + this.typeOf + "/" + params.id + "/customerContact",
                        method: 'PUT',
                        expectedStatusCodes: [http_status_1.OK],
                        body: params.object.customerContact
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 取引確定
     */
    PlaceOrderTransactionService.prototype.confirm = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/transactions/" + this.typeOf + "/" + params.id + "/confirm",
                        method: 'PUT',
                        expectedStatusCodes: [http_status_1.OK],
                        body: params.options
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 明示的に取引を中止する
     * 既に確定済、あるいは、期限切れの取引に対して実行するとArgumentエラーが返されます。
     */
    PlaceOrderTransactionService.prototype.cancel = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch({
                            uri: "/transactions/" + this.typeOf + "/" + params.id + "/cancel",
                            method: 'PUT',
                            expectedStatusCodes: [http_status_1.NO_CONTENT]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 取引検索
     */
    PlaceOrderTransactionService.prototype.search = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/transactions/" + this.typeOf,
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = {
                                        totalCount: Number(response.headers.get('X-Total-Count'))
                                    };
                                    return [4 /*yield*/, response.json()];
                                case 1: return [2 /*return*/, (_a.data = _b.sent(),
                                        _a)];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * 取引に対するアクションを検索する
     */
    PlaceOrderTransactionService.prototype.searchActionsByTransactionId = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/transactions/" + this.typeOf + "/" + params.id + "/actions",
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * レポートダウンロード
     */
    PlaceOrderTransactionService.prototype.downloadReport = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/transactions/" + this.typeOf + "/report",
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.body];
                    }); }); })];
            });
        });
    };
    return PlaceOrderTransactionService;
}(service_1.Service));
exports.PlaceOrderTransactionService = PlaceOrderTransactionService;

},{"../../factory":62,"../../service":64,"http-status":451}],79:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var http_status_1 = require("http-status");
var factory = require("../../factory");
var service_1 = require("../../service");
/**
 * 注文返品取引サービス
 */
var ReturnOrderTransactionService = /** @class */ (function (_super) {
    __extends(ReturnOrderTransactionService, _super);
    function ReturnOrderTransactionService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.typeOf = factory.transactionType.ReturnOrder;
        return _this;
    }
    /**
     * 取引を開始する
     */
    ReturnOrderTransactionService.prototype.start = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/transactions/" + this.typeOf + "/start",
                        method: 'POST',
                        body: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 取引確定
     */
    ReturnOrderTransactionService.prototype.confirm = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch({
                            uri: "/transactions/" + this.typeOf + "/" + params.id + "/confirm",
                            method: 'PUT',
                            expectedStatusCodes: [http_status_1.NO_CONTENT]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 取引検索
     */
    ReturnOrderTransactionService.prototype.search = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/transactions/returnOrder',
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = {
                                        totalCount: Number(response.headers.get('X-Total-Count'))
                                    };
                                    return [4 /*yield*/, response.json()];
                                case 1: return [2 /*return*/, (_a.data = _b.sent(),
                                        _a)];
                            }
                        });
                    }); })];
            });
        });
    };
    return ReturnOrderTransactionService;
}(service_1.Service));
exports.ReturnOrderTransactionService = ReturnOrderTransactionService;

},{"../../factory":62,"../../service":64,"http-status":451}],80:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var http_status_1 = require("http-status");
var service_1 = require("../service");
/**
 * Cognitoユーザープールサービス
 */
var UserPoolService = /** @class */ (function (_super) {
    __extends(UserPoolService, _super);
    function UserPoolService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * IDで検索する
     */
    UserPoolService.prototype.findById = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/userPools/" + params.userPoolId,
                        method: 'GET',
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * クライアント検索
     */
    UserPoolService.prototype.searchClients = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/userPools/" + params.userPoolId + "/clients",
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = {
                                        totalCount: Number(response.headers.get('X-Total-Count'))
                                    };
                                    return [4 /*yield*/, response.json()];
                                case 1: return [2 /*return*/, (_a.data = _b.sent(),
                                        _a)];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * IDでクライアント検索
     */
    UserPoolService.prototype.findClientById = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/userPools/" + params.userPoolId + "/clients/" + params.clientId,
                        method: 'GET',
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    return UserPoolService;
}(service_1.Service));
exports.UserPoolService = UserPoolService;

},{"../service":64,"http-status":451}],81:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
// tslint:disable:max-classes-per-file
/**
 * transporters
 */
var createDebug = require("debug");
var fetch = require("isomorphic-fetch");
var debug = createDebug('cinerino-api-abstract-client:transporters');
// tslint:disable-next-line
// const pkg = require('../package.json');
/**
 * トランスポーター抽象クラス
 */
var Transporter = /** @class */ (function () {
    function Transporter() {
    }
    return Transporter;
}());
exports.Transporter = Transporter;
/**
 * RequestError
 */
var RequestError = /** @class */ (function (_super) {
    __extends(RequestError, _super);
    function RequestError(message) {
        var _this = 
        // tslint:disable-next-line:no-single-line-block-comment
        _super.call(this, message) /* istanbul ignore next */ || this;
        _this.name = 'CinerinoRequestError';
        return _this;
    }
    return RequestError;
}(Error));
exports.RequestError = RequestError;
/**
 * DefaultTransporter
 */
var DefaultTransporter = /** @class */ (function () {
    function DefaultTransporter(expectedStatusCodes) {
        this.expectedStatusCodes = expectedStatusCodes;
    }
    /**
     * Configures request options before making a request.
     */
    DefaultTransporter.CONFIGURE = function (options) {
        // set transporter user agent
        // options.headers = (options.headers !== undefined) ? options.headers : {};
        // tslint:disable-next-line:no-single-line-block-comment
        /* istanbul ignore else */
        // if (!(<any>options.headers)['User-Agent']) {
        //     (<any>options.headers)['User-Agent'] = DefaultTransporter.USER_AGENT;
        // } else if ((<any>options.headers)['User-Agent'].indexOf(DefaultTransporter.USER_AGENT) === -1) {
        //     (<any>options.headers)['User-Agent'] = `${(<any>options.headers)['User-Agent']} ${DefaultTransporter.USER_AGENT}`;
        // }
        return options;
    };
    /**
     * Makes a request with given options and invokes callback.
     */
    DefaultTransporter.prototype.fetch = function (url, options) {
        return __awaiter(this, void 0, void 0, function () {
            var fetchOptions;
            var _this = this;
            return __generator(this, function (_a) {
                fetchOptions = DefaultTransporter.CONFIGURE(options);
                debug('fetching...', url, fetchOptions);
                return [2 /*return*/, fetch(url, fetchOptions).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, this.wrapCallback(response)];
                    }); }); })];
            });
        });
    };
    /**
     * Wraps the response callback.
     */
    DefaultTransporter.prototype.wrapCallback = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var err, body, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        err = new RequestError('An unexpected error occurred');
                        debug('request processed', response.status);
                        if (!(this.expectedStatusCodes.indexOf(response.status) < 0)) return [3 /*break*/, 6];
                        body = void 0;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        return [4 /*yield*/, response.clone().json()];
                    case 2:
                        // Only and only application/json responses should
                        // be decoded back to JSON, but there are cases API back-ends
                        // responds without proper content-type.
                        body = _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _a.sent();
                        return [4 /*yield*/, response.clone().text()];
                    case 4:
                        body = _a.sent();
                        return [3 /*break*/, 5];
                    case 5:
                        if (typeof body === 'object' && body.error !== undefined) {
                            err = new RequestError(body.error.message);
                            err.code = response.status;
                            err.errors = body.error.errors;
                        }
                        else {
                            err = new RequestError(body);
                            err.code = response.status;
                            err.errors = [];
                        }
                        return [3 /*break*/, 7];
                    case 6: return [2 /*return*/, response];
                    case 7: throw err;
                }
            });
        });
    };
    return DefaultTransporter;
}());
exports.DefaultTransporter = DefaultTransporter;
/**
 * スタブトランポーター
 */
var StubTransporter = /** @class */ (function () {
    function StubTransporter(body) {
        this.body = body;
    }
    StubTransporter.prototype.fetch = function (_, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Response(this.body, options)];
            });
        });
    };
    return StubTransporter;
}());
exports.StubTransporter = StubTransporter;

},{"debug":449,"isomorphic-fetch":459}],82:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Abstract API Client
 */
__export(require("@cinerino/api-abstract-client"));

},{"@cinerino/api-abstract-client":63}],83:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * authorize error
 */
var AuthorizeError = /** @class */ (function (_super) {
    __extends(AuthorizeError, _super);
    function AuthorizeError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AuthorizeError;
}(Error));
exports.AuthorizeError = AuthorizeError;

},{}],84:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createDebug = require("debug");
var debug = createDebug('cinerino-api:auth:iframeHandler');
/**
 * IframeHandler
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

},{"debug":449}],85:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var createDebug = require("debug");
var qs = require("qs");
var ErrorFactory = require("./error");
var popupAuthenticationHandler_1 = require("./popupAuthenticationHandler");
var silentAuthenticationHandler_1 = require("./silentAuthenticationHandler");
var silentLogoutHandler_1 = require("./silentLogoutHandler");
// tslint:disable-next-line:no-require-imports no-var-requires
var idTokenVerifier = require('idtoken-verifier');
var oAuth2client_1 = require("./oAuth2client");
var debug = createDebug('cinerino-api:auth:implicitGrantClient');
/**
 * OAuth2 client using grant type 'implicit grant'
 */
var ImplicitGrantClient = /** @class */ (function (_super) {
    __extends(ImplicitGrantClient, _super);
    function ImplicitGrantClient(options) {
        // assert.check(
        //     options,
        //     { type: 'object', message: 'options parameter is not valid' },
        //     {
        //         domain: { type: 'string', message: 'domain option is required' },
        //         clientId: { type: 'string', message: 'clientId option is required' },
        //         responseType: { optional: true, type: 'string', message: 'responseType is not valid' },
        //         responseMode: { optional: true, type: 'string', message: 'responseMode is not valid' },
        //         redirectUri: { optional: true, type: 'string', message: 'redirectUri is not valid' },
        //         scope: { optional: true, type: 'string', message: 'scope is not valid' },
        //         audience: { optional: true, type: 'string', message: 'audience is not valid' }
        //     }
        // );
        var _this = _super.call(this, options) || this;
        _this.options = options;
        _this.options.responseMode = 'fragment';
        _this.options.responseType = 'token';
        // amazon cognitoの認可サーバーはnonce未実装
        _this.options.nonce = null;
        debug('options:', _this.options);
        _this.credentials = {};
        return _this;
    }
    ImplicitGrantClient.BUILD_PASRSE_HASH_RESPONS = function (qsParams, __, idTokenPayload) {
        return {
            accessToken: qsParams.access_token,
            idToken: qsParams.id_token,
            idTokenPayload: idTokenPayload,
            refreshToken: qsParams.refresh_token,
            state: qsParams.state,
            // tslint:disable-next-line:no-magic-numbers
            expiresIn: qsParams.expires_in ? parseInt(qsParams.expires_in, 10) : undefined,
            tokenType: qsParams.token_type
        };
    };
    ImplicitGrantClient.prototype.isSignedIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.refreshToken()
                        .then(function (result) { return result; })
                        .catch(function () { return null; })];
            });
        });
    };
    ImplicitGrantClient.prototype.getAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.credentials.accessToken === undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.refreshAccessToken()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.credentials.accessToken];
                }
            });
        });
    };
    ImplicitGrantClient.prototype.refreshAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.credentials.refreshToken === undefined) {
                    throw new Error('not authorized yet');
                }
                return [2 /*return*/, this.refreshToken()];
            });
        });
    };
    /**
     * Executes a silent authentication transaction under the hood in order to fetch a new tokens for the current session.
     */
    ImplicitGrantClient.prototype.refreshToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var usePostMessage, params, handler, hash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usePostMessage = false;
                        params = {
                            clientId: this.options.clientId,
                            responseType: this.options.responseType,
                            responseMode: this.options.responseMode,
                            prompt: 'none',
                            redirectUri: this.options.redirectUri,
                            scope: this.options.scope,
                            state: this.options.state,
                            nonce: this.options.nonce
                        };
                        handler = silentAuthenticationHandler_1.default.CREATE({
                            authenticationUrl: this.buildAuthorizeUrl(params)
                        });
                        return [4 /*yield*/, handler.login(usePostMessage)];
                    case 1:
                        hash = _a.sent();
                        return [2 /*return*/, this.onLogin(hash)];
                }
            });
        });
    };
    /**
     * Redirects to the hosted login page (`/authorize`) in order to start a new authN/authZ transaction.
     */
    ImplicitGrantClient.prototype.signIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var usePostMessage, params, handler, hash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usePostMessage = true;
                        params = {
                            clientId: this.options.clientId,
                            responseType: this.options.responseType,
                            responseMode: this.options.responseMode,
                            prompt: '',
                            redirectUri: this.options.redirectUri,
                            scope: this.options.scope,
                            state: this.options.state,
                            nonce: this.options.nonce
                        };
                        handler = popupAuthenticationHandler_1.default.CREATE({
                            authenticationUrl: this.buildAuthorizeUrl(params)
                        });
                        return [4 /*yield*/, handler.login(usePostMessage)];
                    case 1:
                        hash = _a.sent();
                        return [2 /*return*/, this.onLogin(hash)];
                }
            });
        });
    };
    /**
     * Redirects to the auth0 logout endpoint
     */
    ImplicitGrantClient.prototype.signOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            var usePostMessage, handler;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usePostMessage = false;
                        handler = silentLogoutHandler_1.default.CREATE({
                            logoutUrl: this.buildLogoutUrl({
                                clientId: this.options.clientId,
                                logoutUri: this.options.logoutUri
                            })
                        });
                        return [4 /*yield*/, handler.logout(usePostMessage)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ImplicitGrantClient.prototype.onLogin = function (hash) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        debug('onLogin');
                        // hash was already parsed, so we just return it.
                        _a = this;
                        if (!(typeof hash === 'object')) return [3 /*break*/, 1];
                        _b = hash;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.parseHash(hash)];
                    case 2:
                        _b = _c.sent();
                        _c.label = 3;
                    case 3:
                        // hash was already parsed, so we just return it.
                        _a.credentials = _b;
                        debug('credentials:', this.credentials);
                        return [2 /*return*/, this.credentials];
                }
            });
        });
    };
    ImplicitGrantClient.prototype.parseHash = function (hash) {
        return __awaiter(this, void 0, void 0, function () {
            var hashStr, parsedQs, err, payload, verifier, decodedToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hashStr = hash === undefined ? window.location.hash : hash;
                        hashStr = hashStr.replace(/^#?\/?/, '');
                        parsedQs = qs.parse(hashStr);
                        // if authorization falied
                        if (parsedQs.hasOwnProperty('error')) {
                            err = new ErrorFactory.AuthorizeError(parsedQs.error_description);
                            err.error = parsedQs.error;
                            err.errorDescription = parsedQs.error_description;
                            err.state = parsedQs.state;
                            throw err;
                        }
                        if (!parsedQs.hasOwnProperty('access_token') &&
                            !parsedQs.hasOwnProperty('id_token') &&
                            !parsedQs.hasOwnProperty('refresh_token')) {
                            throw new Error('invalid hash');
                        }
                        if (!parsedQs.id_token) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.validateToken(parsedQs.id_token, this.options.nonce)];
                    case 1:
                        payload = _a.sent();
                        return [2 /*return*/, ImplicitGrantClient.BUILD_PASRSE_HASH_RESPONS(parsedQs, '', payload)];
                    case 2:
                        if (parsedQs.id_token) {
                            verifier = new idTokenVerifier({
                                issuer: this.options.tokenIssuer,
                                audience: this.options.clientId
                            });
                            decodedToken = verifier.decode(parsedQs.id_token);
                            return [2 /*return*/, ImplicitGrantClient.BUILD_PASRSE_HASH_RESPONS(parsedQs, '', decodedToken.payload)];
                        }
                        else {
                            return [2 /*return*/, ImplicitGrantClient.BUILD_PASRSE_HASH_RESPONS(parsedQs, '', null)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Decodes the a JWT and verifies its nonce value
     */
    ImplicitGrantClient.prototype.validateToken = function (token, nonce) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                debug('validating id_token...');
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var verifier = new idTokenVerifier({
                            issuer: _this.options.tokenIssuer,
                            audience: _this.options.clientId
                        });
                        verifier.verify(token, nonce, function (err, payload) {
                            debug('id_token verified', err, payload);
                            if (err !== null) {
                                reject(err);
                                return;
                            }
                            resolve(payload);
                        });
                    })];
            });
        });
    };
    ImplicitGrantClient.prototype.buildAuthorizeUrl = function (options) {
        var qString = qs.stringify({
            client_id: options.clientId,
            response_type: options.responseType,
            redirect_uri: options.redirectUri,
            response_mode: options.responseMode,
            scope: options.scope,
            state: options.state,
            nonce: options.nonce,
            prompt: options.prompt
        });
        return "https://" + this.options.domain + ImplicitGrantClient.AUTHORIZE_URL + "?" + qString;
    };
    /**
     * Builds and returns the Logout url in order to initialize a new authN/authZ transaction
     * If you want to navigate the user to a specific URL after the logout,
     * set that URL at the returnTo parameter. The URL should be included in any the appropriate Allowed Logout URLs list:
     */
    ImplicitGrantClient.prototype.buildLogoutUrl = function (options) {
        var qString = qs.stringify({
            client_id: options.clientId,
            logout_uri: options.logoutUri
        });
        return "https://" + this.options.domain + ImplicitGrantClient.LOGOUT_URL + "?" + qString;
    };
    ImplicitGrantClient.AUTHORIZE_URL = '/authorize';
    ImplicitGrantClient.LOGOUT_URL = '/logout';
    return ImplicitGrantClient;
}(oAuth2client_1.default));
exports.ImplicitGrantClient = ImplicitGrantClient;

},{"./error":83,"./oAuth2client":86,"./popupAuthenticationHandler":87,"./silentAuthenticationHandler":89,"./silentLogoutHandler":90,"debug":449,"idtoken-verifier":458,"qs":463}],86:[function(require,module,exports){
"use strict";
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var createDebug = require("debug");
var httpStatus = require("http-status");
var fetch = require("isomorphic-fetch");
var abstract_1 = require("../abstract");
var debug = createDebug('cinerino-api:auth:oAuth2client');
/**
 * OAuth2 client
 */
var OAuth2client = /** @class */ (function () {
    function OAuth2client(options) {
        this.options = options;
        this.credentials = {};
    }
    /**
     * OAuthクライアントに認証情報をセットします。
     */
    OAuth2client.prototype.setCredentials = function (credentials) {
        this.credentials = credentials;
    };
    OAuth2client.prototype.refreshAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.credentials.refreshToken === undefined) {
                    throw new Error('No refresh token is set.');
                }
                return [2 /*return*/, this.refreshToken(this.credentials.refreshToken)
                        .then(function (tokens) {
                        debug('setting credentials...', tokens);
                        _this.credentials = tokens;
                        return _this.credentials;
                    })];
            });
        });
    };
    /**
     * 期限の切れていないアクセストークンを取得します。
     * 必要であれば更新してから取得します。
     */
    OAuth2client.prototype.getAccessToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var expiryDate, isTokenExpired, shouldRefresh, tokens;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        expiryDate = this.credentials.expiryDate;
                        isTokenExpired = (expiryDate !== undefined) ? (expiryDate <= (new Date()).getTime()) : false;
                        if (this.credentials.accessToken === undefined && this.credentials.refreshToken === undefined) {
                            throw new Error('No access or refresh token is set.');
                        }
                        shouldRefresh = (this.credentials.accessToken === undefined) || isTokenExpired;
                        if (!(shouldRefresh && this.credentials.refreshToken !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.refreshAccessToken()];
                    case 1:
                        tokens = _a.sent();
                        return [2 /*return*/, tokens.accessToken];
                    case 2: return [2 /*return*/, this.credentials.accessToken];
                }
            });
        });
    };
    /**
     * Provides a request implementation with OAuth 2.0 flow.
     * If credentials have a refresh_token, in cases of HTTP
     * 401 and 403 responses, it automatically asks for a new
     * access token and replays the unsuccessful request.
     * @param options Request options.
     */
    OAuth2client.prototype.fetch = function (url, options, expectedStatusCodes) {
        return __awaiter(this, void 0, void 0, function () {
            var accessToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getAccessToken()];
                    case 1:
                        accessToken = _a.sent();
                        options.headers = (options.headers === undefined || options.headers === null) ? {} : options.headers;
                        options.headers.Authorization = "Bearer " + accessToken;
                        return [2 /*return*/, this.makeRequest(url, options, expectedStatusCodes)];
                }
            });
        });
    };
    /**
     * Refreshes the access token.
     */
    OAuth2client.prototype.refreshToken = function (refreshToken) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, options;
            var _this = this;
            return __generator(this, function (_a) {
                // request for new token
                debug('refreshing access token...');
                formData = new FormData();
                formData.set('refresh_token', refreshToken);
                formData.set('client_id', this.options.clientId);
                formData.set('client_secret', this.options.clientSecret);
                formData.set('grant_type', 'refresh_token');
                options = {
                    method: 'POST',
                    body: formData
                };
                return [2 /*return*/, fetch("https://" + this.options.domain + "/token", options)
                        .then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var body, err, tokens;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(response.status !== httpStatus.OK)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, response.json()];
                                case 1:
                                    body = _a.sent();
                                    if (typeof body === 'object' && body.errors !== undefined) {
                                        err = new abstract_1.transporters.RequestError(body.errors.map(function (error) { return error.title + ":" + error.detail; }).join('\n'));
                                        err.code = response.status;
                                        err.errors = body.errors;
                                    }
                                    throw new Error('An unexpected error occurred');
                                case 2: return [4 /*yield*/, response.json()];
                                case 3:
                                    tokens = _a.sent();
                                    if (tokens && tokens.expires_in) {
                                        // tslint:disable-next-line:no-magic-numbers
                                        tokens.expiry_date = ((new Date()).getTime() + (tokens.expires_in * 1000));
                                        delete tokens.expires_in;
                                    }
                                    return [2 /*return*/, tokens];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Makes a request without paying attention to refreshing or anything
     * Assumes that all credentials are set correctly.
     * @param opts Options for request
     * @param callback callback function
     * @return The request object created
     */
    // tslint:disable-next-line:prefer-function-over-method
    OAuth2client.prototype.makeRequest = function (url, options, expectedStatusCodes) {
        return __awaiter(this, void 0, void 0, function () {
            var transporter;
            return __generator(this, function (_a) {
                transporter = new abstract_1.transporters.DefaultTransporter(expectedStatusCodes);
                return [2 /*return*/, transporter.fetch(url, options)];
            });
        });
    };
    return OAuth2client;
}());
exports.default = OAuth2client;

},{"../abstract":82,"debug":449,"http-status":451,"isomorphic-fetch":459}],87:[function(require,module,exports){
"use strict";
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var ErrorFactory = require("./error");
var popupHandler_1 = require("./popupHandler");
/**
 * PopupAuthenticationHandler
 */
var PopupAuthenticationHandler = /** @class */ (function () {
    function PopupAuthenticationHandler(options) {
        this.authenticationUrl = options.authenticationUrl;
        // tslint:disable-next-line:no-magic-numbers
        this.timeout = (options.timeout !== undefined) ? options.timeout : 60 * 1000;
        this.handler = null;
    }
    PopupAuthenticationHandler.GET_EVENT_VALIDATOR = function () {
        return {};
    };
    PopupAuthenticationHandler.GET_CALLBACK_HANDLER = function (cb, usePostMessage) {
        return function (eventData) {
            var callbackValue;
            try {
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
            }
            catch (error) {
                // tslint:disable-next-line:no-console
                console.error('PopupAuthenticationHandler.GET_CALLBACK_HANDLER:', error);
            }
            cb(callbackValue);
        };
    };
    PopupAuthenticationHandler.CREATE = function (options) {
        return new PopupAuthenticationHandler(options);
    };
    PopupAuthenticationHandler.prototype.login = function (usePostMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.handler = new popupHandler_1.default({
                            url: _this.authenticationUrl,
                            eventListenerType: usePostMessage ? 'message' : 'load',
                            callback: PopupAuthenticationHandler.GET_CALLBACK_HANDLER(resolve, usePostMessage),
                            timeout: _this.timeout,
                            eventValidator: PopupAuthenticationHandler.GET_EVENT_VALIDATOR(),
                            timeoutCallback: function () {
                                var err = new ErrorFactory.AuthorizeError('Timeout during authentication');
                                err.error = 'timeout';
                                err.errorDescription = 'Timeout during authentication';
                                reject(err);
                            },
                            usePostMessage: false
                        });
                        _this.handler.init();
                    })];
            });
        });
    };
    return PopupAuthenticationHandler;
}());
exports.default = PopupAuthenticationHandler;

},{"./error":83,"./popupHandler":88}],88:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createDebug = require("debug");
var debug = createDebug('cinerino-api:auth:popupHandler');
/**
 * PopupHandler
 */
var PopupHandler = /** @class */ (function () {
    function PopupHandler(options) {
        this.url = options.url;
        this.callback = options.callback;
        // tslint:disable-next-line:no-magic-numbers
        this.timeout = (options.timeout !== undefined) ? options.timeout : 60 * 1000;
        this.timeoutCallback = (options.timeoutCallback !== undefined) ? options.timeoutCallback : null;
        this.eventListenerType = (options.eventListenerType !== undefined) ? options.eventListenerType : 'message';
        this.popupWindow = null;
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
    PopupHandler.prototype.init = function () {
        var _this = this;
        debug('opening popup...', this.eventListenerType);
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
                throw new Error("Unsupported event listener type: " + this.eventListenerType);
        }
        debug('this.eventSourceObject:', this.eventSourceObject);
        this.eventSourceObject.addEventListener(this.eventListenerType, this.proxyEventListener, false);
        this.timeoutHandle = setTimeout(function () {
            _this.timeoutHandler();
        }, this.timeout);
    };
    PopupHandler.prototype.eventListener = function (event) {
        debug('PopupHandler.eventListener...event:', event);
        var eventData = { event: event, sourceObject: this.eventSourceObject };
        this.destroy();
        // 呼び出し元へコールバック
        this.callback(eventData);
    };
    PopupHandler.prototype.timeoutHandler = function () {
        if (this.timeoutCallback) {
            this.timeoutCallback();
        }
    };
    PopupHandler.prototype.destroy = function () {
        var _this = this;
        clearTimeout(this.timeoutHandle);
        this.destroyTimeout = setTimeout(function () {
            _this.eventSourceObject.removeEventListener(_this.eventListenerType, _this.proxyEventListener, false);
            // ポップアップを閉じる
            _this.popupWindow.close();
        }, 0);
    };
    return PopupHandler;
}());
exports.default = PopupHandler;

},{"debug":449}],89:[function(require,module,exports){
"use strict";
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var ErrorFactory = require("./error");
var iframeHandler_1 = require("./iframeHandler");
/**
 * SilentAuthenticationHandler
 */
var SilentAuthenticationHandler = /** @class */ (function () {
    function SilentAuthenticationHandler(options) {
        this.authenticationUrl = options.authenticationUrl;
        // tslint:disable-next-line:no-magic-numbers
        this.timeout = (options.timeout !== undefined) ? options.timeout : 60 * 1000;
        this.handler = null;
    }
    SilentAuthenticationHandler.GET_EVENT_VALIDATOR = function () {
        return {};
    };
    SilentAuthenticationHandler.GET_CALLBACK_HANDLER = function (cb, usePostMessage) {
        return function (eventData) {
            var callbackValue;
            try {
                if (!usePostMessage) {
                    // loadイベントの場合は、iframeウィンドウのフラグメントをコールバックへ渡す
                    callbackValue = eventData.sourceObject.contentWindow.location.hash;
                }
                else if (typeof eventData.event.data === 'object' && eventData.event.data.hash) {
                    callbackValue = eventData.event.data.hash;
                }
                else {
                    callbackValue = eventData.event.data;
                }
            }
            catch (error) {
                // tslint:disable-next-line:no-console
                console.error('SilentAuthenticationHandler.GET_CALLBACK_HANDLER:', error);
            }
            cb(callbackValue);
        };
    };
    SilentAuthenticationHandler.CREATE = function (options) {
        return new SilentAuthenticationHandler(options);
    };
    SilentAuthenticationHandler.prototype.login = function (usePostMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.handler = new iframeHandler_1.default({
                            url: _this.authenticationUrl,
                            eventListenerType: usePostMessage ? 'message' : 'load',
                            callback: SilentAuthenticationHandler.GET_CALLBACK_HANDLER(resolve, usePostMessage),
                            timeout: _this.timeout,
                            eventValidator: SilentAuthenticationHandler.GET_EVENT_VALIDATOR(),
                            timeoutCallback: function () {
                                var err = new ErrorFactory.AuthorizeError('Timeout during authentication renew');
                                err.error = 'timeout';
                                err.errorDescription = 'Timeout during authentication renew';
                                reject(err);
                            },
                            usePostMessage: usePostMessage || false
                        });
                        _this.handler.init();
                    })];
            });
        });
    };
    return SilentAuthenticationHandler;
}());
exports.default = SilentAuthenticationHandler;

},{"./error":83,"./iframeHandler":84}],90:[function(require,module,exports){
"use strict";
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var ErrorFactory = require("./error");
var iframeHandler_1 = require("./iframeHandler");
/**
 * SilentLogoutHandler
 */
var SilentLogoutHandler = /** @class */ (function () {
    function SilentLogoutHandler(options) {
        this.logoutUrl = options.logoutUrl;
        // tslint:disable-next-line:no-magic-numbers
        this.timeout = (options.timeout !== undefined) ? options.timeout : 60 * 1000;
        this.handler = null;
    }
    SilentLogoutHandler.GET_CALLBACK_HANDLER = function (cb, usePostMessage) {
        return function (eventData) {
            var callbackValue;
            try {
                if (!usePostMessage) {
                    // loadイベントの場合は、iframeウィンドウのフラグメントをコールバックへ渡す
                    callbackValue = eventData.sourceObject.contentWindow.location.hash;
                }
                else if (typeof eventData.event.data === 'object' && eventData.event.data.hash) {
                    callbackValue = eventData.event.data.hash;
                }
                else {
                    callbackValue = eventData.event.data;
                }
            }
            catch (error) {
                // tslint:disable-next-line:no-console
                console.error('SilentLogoutHandler.GET_CALLBACK_HANDLER:', error);
            }
            cb(callbackValue);
        };
    };
    SilentLogoutHandler.CREATE = function (options) {
        return new SilentLogoutHandler(options);
    };
    SilentLogoutHandler.GET_EVENT_VALIDATOR = function () {
        return {};
    };
    SilentLogoutHandler.prototype.logout = function (usePostMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this.handler = new iframeHandler_1.default({
                            url: _this.logoutUrl,
                            eventListenerType: usePostMessage ? 'message' : 'load',
                            callback: SilentLogoutHandler.GET_CALLBACK_HANDLER(resolve, usePostMessage),
                            timeout: _this.timeout,
                            eventValidator: SilentLogoutHandler.GET_EVENT_VALIDATOR(),
                            timeoutCallback: function () {
                                var err = new ErrorFactory.AuthorizeError('Timeout during logout');
                                err.error = 'timeout';
                                err.errorDescription = 'Timeout during logout';
                                reject(err);
                            },
                            usePostMessage: usePostMessage || false
                        });
                        _this.handler.init();
                    })];
            });
        });
    };
    return SilentLogoutHandler;
}());
exports.default = SilentLogoutHandler;

},{"./error":83,"./iframeHandler":84}],91:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * API client for javascript
 */
var abstract_1 = require("./abstract");
var implicitGrantClient_1 = require("./auth/implicitGrantClient");
/**
 * factory
 * All object interfaces are here.
 * 全てのオブジェクトのインターフェースはここに含まれます。
 */
exports.factory = abstract_1.factory;
exports.service = abstract_1.service;
exports.transporters = abstract_1.transporters;
/**
 * create OAuth2 client instance using implicit grant
 * @param options implicit grant configurations
 */
function createAuthInstance(options) {
    return new implicitGrantClient_1.ImplicitGrantClient(options);
}
exports.createAuthInstance = createAuthInstance;

},{"./abstract":82,"./auth/implicitGrantClient":85}],92:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Chevre Factory
 */
__export(require("@chevre/factory"));

},{"@chevre/factory":60}],93:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],94:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 口座タイプ
 * Pecorinoサービスに対して口座タイプを指定します。
 */
var AccountType;
(function (AccountType) {
    /**
     * コイン口座
     */
    AccountType["Coin"] = "Coin";
    /**
     * ポイント口座
     */
    AccountType["Point"] = "Point";
})(AccountType || (AccountType = {}));
exports.default = AccountType;

},{}],95:[function(require,module,exports){
arguments[4][4][0].apply(exports,arguments)
},{"dup":4}],96:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * アクションタイプ
 */
var ActionType;
(function (ActionType) {
    ActionType["AuthorizeAction"] = "AuthorizeAction";
    ActionType["CheckAction"] = "CheckAction";
    ActionType["ConfirmAction"] = "ConfirmAction";
    ActionType["GiveAction"] = "GiveAction";
    ActionType["OrderAction"] = "OrderAction";
    ActionType["PayAction"] = "PayAction";
    ActionType["PrintAction"] = "PrintAction";
    ActionType["RefundAction"] = "RefundAction";
    ActionType["RegisterAction"] = "RegisterAction";
    ActionType["ReturnAction"] = "ReturnAction";
    ActionType["SendAction"] = "SendAction";
    ActionType["UnRegisterAction"] = "UnRegisterAction";
    ActionType["UpdateAction"] = "UpdateAction";
    ActionType["UseAction"] = "UseAction";
})(ActionType || (ActionType = {}));
exports.default = ActionType;

},{}],97:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectType;
(function (ObjectType) {
    ObjectType["PointAward"] = "PointAward";
})(ObjectType = exports.ObjectType || (exports.ObjectType = {}));

},{}],98:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectType;
(function (ObjectType) {
    ObjectType["SeatReservation"] = "SeatReservation";
})(ObjectType = exports.ObjectType || (exports.ObjectType = {}));

},{}],99:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],100:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],101:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],102:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],103:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],104:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],105:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],106:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],107:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],108:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],109:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("../../authorize/award/point");
exports.ObjectType = point_1.ObjectType;

},{"../../authorize/award/point":97}],110:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],111:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],112:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],113:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],114:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],115:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],116:[function(require,module,exports){
arguments[4][9][0].apply(exports,arguments)
},{"dup":9}],117:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],118:[function(require,module,exports){
"use strict";
/**
 * Media type typically expressed using a MIME format
 * @see http://www.iana.org/assignments/media-types/media-types.xhtml
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Application;
(function (Application) {
    Application["pdf"] = "application/pdf";
})(Application = exports.Application || (exports.Application = {}));
var Audio;
(function (Audio) {
})(Audio = exports.Audio || (exports.Audio = {}));
var Font;
(function (Font) {
})(Font = exports.Font || (exports.Font = {}));
var Example;
(function (Example) {
})(Example = exports.Example || (exports.Example = {}));
var Image;
(function (Image) {
})(Image = exports.Image || (exports.Image = {}));
var Message;
(function (Message) {
})(Message = exports.Message || (exports.Message = {}));
var Model;
(function (Model) {
})(Model = exports.Model || (exports.Model = {}));
var Multipart;
(function (Multipart) {
})(Multipart = exports.Multipart || (exports.Multipart = {}));
var Text;
(function (Text) {
    Text["csv"] = "text/csv";
})(Text = exports.Text || (exports.Text = {}));
var Video;
(function (Video) {
})(Video = exports.Video || (exports.Video = {}));

},{}],119:[function(require,module,exports){
arguments[4][12][0].apply(exports,arguments)
},{"dup":12}],120:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var common_1 = require("./common");
/**
 * AlreadyInUseError
 */
var AlreadyInUseError = /** @class */ (function (_super) {
    __extends(AlreadyInUseError, _super);
    function AlreadyInUseError(entityName, fieldNames, message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = "The specified '" + entityName + "' value is already in use for: " + fieldNames.join(', ') + ".";
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.AlreadyInUse, actualMessage) /* istanbul ignore next */ || this;
        _this.entityName = entityName;
        _this.fieldNames = fieldNames;
        setPrototypeOf(_this, AlreadyInUseError.prototype);
        return _this;
    }
    return AlreadyInUseError;
}(common_1.CinerinoError));
exports.default = AlreadyInUseError;

},{"../errorCode":119,"./common":123,"setprototypeof":162}],121:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var common_1 = require("./common");
/**
 * ArgumentError
 */
var ArgumentError = /** @class */ (function (_super) {
    __extends(ArgumentError, _super);
    function ArgumentError(argumentName, message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = "Invalid or missing argument supplied: " + argumentName + ".";
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.Argument, actualMessage) /* istanbul ignore next */ || this;
        _this.argumentName = argumentName;
        setPrototypeOf(_this, ArgumentError.prototype);
        return _this;
    }
    return ArgumentError;
}(common_1.CinerinoError));
exports.default = ArgumentError;

},{"../errorCode":119,"./common":123,"setprototypeof":162}],122:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var common_1 = require("./common");
/**
 * ArgumentNullError
 */
var ArgumentNullError = /** @class */ (function (_super) {
    __extends(ArgumentNullError, _super);
    function ArgumentNullError(argumentName, message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = "Missing argument: " + argumentName + ".";
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.ArgumentNull, actualMessage) /* istanbul ignore next */ || this;
        _this.argumentName = argumentName;
        setPrototypeOf(_this, ArgumentNullError.prototype);
        return _this;
    }
    return ArgumentNullError;
}(common_1.CinerinoError));
exports.default = ArgumentNullError;

},{"../errorCode":119,"./common":123,"setprototypeof":162}],123:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * CinerinoError
 */
var CinerinoError = /** @class */ (function (_super) {
    __extends(CinerinoError, _super);
    function CinerinoError(code, message) {
        var _this = 
        // tslint:disable-next-line:no-single-line-block-comment
        _super.call(this, message) /* istanbul ignore next */ || this;
        _this.name = 'CinerinoError';
        _this.reason = code;
        return _this;
    }
    return CinerinoError;
}(Error));
exports.CinerinoError = CinerinoError;

},{}],124:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var common_1 = require("./common");
/**
 * ForbiddenError
 */
var ForbiddenError = /** @class */ (function (_super) {
    __extends(ForbiddenError, _super);
    function ForbiddenError(message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Forbidden.';
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.Forbidden, actualMessage) /* istanbul ignore next */ || this;
        setPrototypeOf(_this, ForbiddenError.prototype);
        return _this;
    }
    return ForbiddenError;
}(common_1.CinerinoError));
exports.default = ForbiddenError;

},{"../errorCode":119,"./common":123,"setprototypeof":162}],125:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var common_1 = require("./common");
/**
 * NotFoundError
 */
var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(entityName, message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = "Not Found: " + entityName + ".";
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.NotFound, actualMessage) /* istanbul ignore next */ || this;
        _this.entityName = entityName;
        setPrototypeOf(_this, NotFoundError.prototype);
        return _this;
    }
    return NotFoundError;
}(common_1.CinerinoError));
exports.default = NotFoundError;

},{"../errorCode":119,"./common":123,"setprototypeof":162}],126:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var common_1 = require("./common");
/**
 * NotImplementedError
 */
var NotImplementedError = /** @class */ (function (_super) {
    __extends(NotImplementedError, _super);
    function NotImplementedError(message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Method is not yet implemented.';
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.NotImplemented, actualMessage) /* istanbul ignore next */ || this;
        setPrototypeOf(_this, NotImplementedError.prototype);
        return _this;
    }
    return NotImplementedError;
}(common_1.CinerinoError));
exports.default = NotImplementedError;

},{"../errorCode":119,"./common":123,"setprototypeof":162}],127:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var common_1 = require("./common");
/**
 * RateLimitExceededError
 */
var RateLimitExceededError = /** @class */ (function (_super) {
    __extends(RateLimitExceededError, _super);
    function RateLimitExceededError(message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Rate limit exceeded.';
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.RateLimitExceeded, actualMessage) /* istanbul ignore next */ || this;
        setPrototypeOf(_this, RateLimitExceededError.prototype);
        return _this;
    }
    return RateLimitExceededError;
}(common_1.CinerinoError));
exports.default = RateLimitExceededError;

},{"../errorCode":119,"./common":123,"setprototypeof":162}],128:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var common_1 = require("./common");
/**
 * ServiceUnavailableError
 */
var ServiceUnavailableError = /** @class */ (function (_super) {
    __extends(ServiceUnavailableError, _super);
    function ServiceUnavailableError(message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Service unavailable temporarily.';
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.ServiceUnavailable, actualMessage) /* istanbul ignore next */ || this;
        setPrototypeOf(_this, ServiceUnavailableError.prototype);
        return _this;
    }
    return ServiceUnavailableError;
}(common_1.CinerinoError));
exports.default = ServiceUnavailableError;

},{"../errorCode":119,"./common":123,"setprototypeof":162}],129:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var common_1 = require("./common");
/**
 * UnauthorizedError
 */
var UnauthorizedError = /** @class */ (function (_super) {
    __extends(UnauthorizedError, _super);
    function UnauthorizedError(message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Unauthorized.';
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.Unauthorized, actualMessage) /* istanbul ignore next */ || this;
        setPrototypeOf(_this, UnauthorizedError.prototype);
        return _this;
    }
    return UnauthorizedError;
}(common_1.CinerinoError));
exports.default = UnauthorizedError;

},{"../errorCode":119,"./common":123,"setprototypeof":162}],130:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * errors
 */
var alreadyInUse_1 = require("./error/alreadyInUse");
exports.AlreadyInUse = alreadyInUse_1.default;
var argument_1 = require("./error/argument");
exports.Argument = argument_1.default;
var argumentNull_1 = require("./error/argumentNull");
exports.ArgumentNull = argumentNull_1.default;
var common_1 = require("./error/common");
exports.Cinerino = common_1.CinerinoError;
var forbidden_1 = require("./error/forbidden");
exports.Forbidden = forbidden_1.default;
var notFound_1 = require("./error/notFound");
exports.NotFound = notFound_1.default;
var notImplemented_1 = require("./error/notImplemented");
exports.NotImplemented = notImplemented_1.default;
var rateLimitExceeded_1 = require("./error/rateLimitExceeded");
exports.RateLimitExceeded = rateLimitExceeded_1.default;
var serviceUnavailable_1 = require("./error/serviceUnavailable");
exports.ServiceUnavailable = serviceUnavailable_1.default;
var unauthorized_1 = require("./error/unauthorized");
exports.Unauthorized = unauthorized_1.default;

},{"./error/alreadyInUse":120,"./error/argument":121,"./error/argumentNull":122,"./error/common":123,"./error/forbidden":124,"./error/notFound":125,"./error/notImplemented":126,"./error/rateLimitExceeded":127,"./error/serviceUnavailable":128,"./error/unauthorized":129}],131:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],132:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],133:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],134:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],135:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],136:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 注文ステータス
 */
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["OrderCancelled"] = "OrderCancelled";
    OrderStatus["OrderDelivered"] = "OrderDelivered";
    OrderStatus["OrderInTransit"] = "OrderInTransit";
    OrderStatus["OrderPaymentDue"] = "OrderPaymentDue";
    OrderStatus["OrderPickupAvailable"] = "OrderPickupAvailable";
    OrderStatus["OrderProblem"] = "OrderProblem";
    OrderStatus["OrderProcessing"] = "OrderProcessing";
    OrderStatus["OrderReturned"] = "OrderReturned";
})(OrderStatus || (OrderStatus = {}));
exports.default = OrderStatus;

},{}],137:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 組織タイプ
 */
var OrganizationType;
(function (OrganizationType) {
    OrganizationType["Corporation"] = "Corporation";
    OrganizationType["MovieTheater"] = "MovieTheater";
})(OrganizationType || (OrganizationType = {}));
exports.default = OrganizationType;

},{}],138:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 口座タイプ
 */
var AccountGoodType;
(function (AccountGoodType) {
    /**
     * 口座
     */
    AccountGoodType["Account"] = "Account";
})(AccountGoodType = exports.AccountGoodType || (exports.AccountGoodType = {}));

},{}],139:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chevre_1 = require("../chevre");
/**
 * 決済方法タイプ
 */
exports.default = chevre_1.paymentMethodType;

},{"../chevre":92}],140:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],141:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],142:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 決済ステータス
 */
var PaymentStatusType;
(function (PaymentStatusType) {
    PaymentStatusType["PaymentAutomaticallyApplied"] = "PaymentAutomaticallyApplied";
    PaymentStatusType["PaymentComplete"] = "PaymentComplete";
    PaymentStatusType["PaymentDeclined"] = "PaymentDeclined";
    PaymentStatusType["PaymentDue"] = "PaymentDue";
    PaymentStatusType["PaymentPastDue"] = "PaymentPastDue";
})(PaymentStatusType || (PaymentStatusType = {}));
exports.default = PaymentStatusType;

},{}],143:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],144:[function(require,module,exports){
"use strict";
/**
 * 人物タイプ
 */
Object.defineProperty(exports, "__esModule", { value: true });
var PersonType;
(function (PersonType) {
    PersonType["Person"] = "Person";
})(PersonType || (PersonType = {}));
exports.default = PersonType;

},{}],145:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 場所タイプ
 */
var PlaceType;
(function (PlaceType) {
    PlaceType["Online"] = "Online";
    PlaceType["Store"] = "Store";
})(PlaceType || (PlaceType = {}));
exports.default = PlaceType;

},{}],146:[function(require,module,exports){
arguments[4][34][0].apply(exports,arguments)
},{"dup":34}],147:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],148:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],149:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],150:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Identifier;
(function (Identifier) {
    Identifier["COA"] = "COA";
    Identifier["Chevre"] = "Chevre";
})(Identifier = exports.Identifier || (exports.Identifier = {}));

},{}],151:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],152:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],153:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * タスク名
 */
var TaskName;
(function (TaskName) {
    /**
     * 上映イベント在庫仕入れ
     */
    TaskName["ImportScreeningEvents"] = "importScreeningEvents";
    /**
     * 座席予約承認アクション取消
     */
    TaskName["CancelSeatReservation"] = "cancelSeatReservation";
    /**
     * 予約確定
     */
    TaskName["ConfirmReservation"] = "confirmReservation";
    /**
     * クレジットカード承認アクション取消
     */
    TaskName["CancelCreditCard"] = "cancelCreditCard";
    /**
     * 口座承認アクション取消
     */
    TaskName["CancelAccount"] = "cancelAccount";
    /**
     * ポイントインセンティブ承認アクション取消
     */
    TaskName["CancelPointAward"] = "cancelPointAward";
    /**
     *  Eメールメッセージ送信
     */
    TaskName["SendEmailMessage"] = "sendEmailMessage";
    /**
     * 注文受付
     */
    TaskName["PlaceOrder"] = "placeOrder";
    /**
     * 注文返品
     */
    TaskName["ReturnOrder"] = "returnOrder";
    /**
     * ポイントインセンティブ返却
     */
    TaskName["ReturnPointAward"] = "returnPointAward";
    /**
     * 口座支払
     */
    TaskName["PayAccount"] = "payAccount";
    /**
     * クレジットカード支払
     */
    TaskName["PayCreditCard"] = "payCreditCard";
    /**
     * ムビチケ支払
     */
    TaskName["PayMovieTicket"] = "payMovieTicket";
    /**
     * 注文配送
     */
    TaskName["SendOrder"] = "sendOrder";
    /**
     * クレジットカード返金
     */
    TaskName["RefundCreditCard"] = "refundCreditCard";
    /**
     * ムビチケ着券取消
     */
    TaskName["RefundMovieTicket"] = "refundMovieTicket";
    /**
     * 口座返金
     */
    TaskName["RefundAccount"] = "refundAccount";
    /**
     * ポイントインセンティブ付与
     */
    TaskName["GivePointAward"] = "givePointAward";
    /**
     * 会員プログラム登録
     */
    TaskName["RegisterProgramMembership"] = "registerProgramMembership";
    /**
     * 会員プログラム登録解除
     */
    TaskName["UnRegisterProgramMembership"] = "unRegisterProgramMembership";
    /**
     * ウェブフックをたたく
     */
    TaskName["TriggerWebhook"] = "triggerWebhook";
})(TaskName || (TaskName = {}));
exports.default = TaskName;

},{}],154:[function(require,module,exports){
"use strict";
/**
 * タスクステータス
 */
Object.defineProperty(exports, "__esModule", { value: true });
var TaskStatus;
(function (TaskStatus) {
    /**
     * 準備OK
     */
    TaskStatus["Ready"] = "Ready";
    /**
     * 実行中
     */
    TaskStatus["Running"] = "Running";
    /**
     * 実行済
     */
    TaskStatus["Executed"] = "Executed";
    /**
     * 実行中止
     */
    TaskStatus["Aborted"] = "Aborted";
})(TaskStatus || (TaskStatus = {}));
exports.default = TaskStatus;

},{}],155:[function(require,module,exports){
arguments[4][52][0].apply(exports,arguments)
},{"dup":52}],156:[function(require,module,exports){
arguments[4][53][0].apply(exports,arguments)
},{"dup":53}],157:[function(require,module,exports){
"use strict";
/**
 * 取引タイプ
 */
Object.defineProperty(exports, "__esModule", { value: true });
var TransactionType;
(function (TransactionType) {
    /**
     * 注文取引
     */
    TransactionType["PlaceOrder"] = "PlaceOrder";
    /**
     * 注文返品取引
     */
    TransactionType["ReturnOrder"] = "ReturnOrder";
})(TransactionType || (TransactionType = {}));
exports.default = TransactionType;

},{}],158:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],159:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 返品理由
 */
var Reason;
(function (Reason) {
    /**
     * 購入者自身の都合での返品
     */
    Reason["Customer"] = "Customer";
    /**
     * 販売者都合での返品
     */
    Reason["Seller"] = "Seller";
})(Reason = exports.Reason || (exports.Reason = {}));

},{}],160:[function(require,module,exports){
arguments[4][57][0].apply(exports,arguments)
},{"dup":57}],161:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * factory
 */
var pecorino = require("@pecorino/factory");
var waiter = require("@waiter/factory");
var chevre = require("./chevre");
var cognito = require("./cognito");
var PointAwardAuthorizeActionFactory = require("./factory/action/authorize/award/point");
var SeatReservationOfferAuthorizeActionFactory = require("./factory/action/authorize/offer/seatReservation");
var AuthorizeAccountPaymentActionFactory = require("./factory/action/authorize/paymentMethod/account");
var AuthorizeAnyPaymentActionFactory = require("./factory/action/authorize/paymentMethod/any");
var AuthorizeCreditCardPaymentActionFactory = require("./factory/action/authorize/paymentMethod/creditCard");
var AuthorizeMovieTicketPaymentActionFactory = require("./factory/action/authorize/paymentMethod/movieTicket");
var CheckMovieTicketActionFactory = require("./factory/action/check/paymentMethod/movieTicket");
var CheckTokenActionFactory = require("./factory/action/check/token");
var ConfirmReservationActionFactory = require("./factory/action/interact/confirm/reservation");
var OrderActionFactory = require("./factory/action/trade/order");
var PayActionFactory = require("./factory/action/trade/pay");
var RefundActionFactory = require("./factory/action/trade/refund");
var GivePointAwardActionFactory = require("./factory/action/transfer/give/pointAward");
var PrintTicketActionFactory = require("./factory/action/transfer/print/ticket");
var ReturnOrderActionFactory = require("./factory/action/transfer/return/order");
var ReturnPointAwardActionFactory = require("./factory/action/transfer/return/pointAward");
var SendEmailMessageActionFactory = require("./factory/action/transfer/send/message/email");
var SendOrderActionFactory = require("./factory/action/transfer/send/order");
var actionStatusType_1 = require("./factory/actionStatusType");
var actionType_1 = require("./factory/actionType");
var accountType_1 = require("./factory/accountType");
var ClientUserFactory = require("./factory/clientUser");
var EmailMessageFactory = require("./factory/creativeWork/message/email");
var creativeWorkType_1 = require("./factory/creativeWorkType");
var EncodingFormat = require("./factory/encodingFormat");
var ScreeningEventFactory = require("./factory/event/screeningEvent");
var ScreeningEventSeriesFactory = require("./factory/event/screeningEventSeries");
var InvoiceFactory = require("./factory/invoice");
var MonetaryAmountFactory = require("./factory/monetaryAmount");
var OrderFactory = require("./factory/order");
var orderStatus_1 = require("./factory/orderStatus");
var organizationType_1 = require("./factory/organizationType");
var OwnershipInfoFactory = require("./factory/ownershipInfo");
var CreditCardFactory = require("./factory/paymentMethod/paymentCard/creditCard");
var MovieTicketFactory = require("./factory/paymentMethod/paymentCard/movieTicket");
var paymentMethodType_1 = require("./factory/paymentMethodType");
var paymentStatusType_1 = require("./factory/paymentStatusType");
var PersonFactory = require("./factory/person");
var personType_1 = require("./factory/personType");
var placeType_1 = require("./factory/placeType");
var priceCurrency_1 = require("./factory/priceCurrency");
var ProgramMembershipFactory = require("./factory/programMembership");
var PropertyValueFactory = require("./factory/propertyValue");
var QuantitativeValueFactory = require("./factory/quantitativeValue");
var WebAPIServiceFactory = require("./factory/service/webAPI");
var unitCode_1 = require("./factory/unitCode");
var sortType_1 = require("./factory/sortType");
var TaskExecutionResultFactory = require("./factory/taskExecutionResult");
var taskName_1 = require("./factory/taskName");
var taskStatus_1 = require("./factory/taskStatus");
var PlaceOrderTransactionFactory = require("./factory/transaction/placeOrder");
var ReturnOrderTransactionFactory = require("./factory/transaction/returnOrder");
var transactionStatusType_1 = require("./factory/transactionStatusType");
var transactionTasksExportationStatus_1 = require("./factory/transactionTasksExportationStatus");
var transactionType_1 = require("./factory/transactionType");
var errorCode_1 = require("./factory/errorCode");
var errors = require("./factory/errors");
exports.cognito = cognito;
exports.chevre = chevre;
exports.pecorino = pecorino;
exports.waiter = waiter;
exports.errors = errors;
exports.errorCode = errorCode_1.default;
exports.actionStatusType = actionStatusType_1.default;
exports.actionType = actionType_1.default;
var action;
(function (action) {
    var authorize;
    (function (authorize) {
        var award;
        (function (award) {
            // tslint:disable-next-line:no-shadowed-variable
            award.point = PointAwardAuthorizeActionFactory;
        })(award = authorize.award || (authorize.award = {}));
        // tslint:disable-next-line:no-shadowed-variable
        var paymentMethod;
        (function (paymentMethod) {
            paymentMethod.account = AuthorizeAccountPaymentActionFactory;
            paymentMethod.any = AuthorizeAnyPaymentActionFactory;
            paymentMethod.creditCard = AuthorizeCreditCardPaymentActionFactory;
            paymentMethod.movieTicket = AuthorizeMovieTicketPaymentActionFactory;
        })(paymentMethod = authorize.paymentMethod || (authorize.paymentMethod = {}));
        // tslint:disable-next-line:no-shadowed-variable
        var offer;
        (function (offer) {
            // tslint:disable-next-line:no-shadowed-variable
            offer.seatReservation = SeatReservationOfferAuthorizeActionFactory;
        })(offer = authorize.offer || (authorize.offer = {}));
    })(authorize = action.authorize || (action.authorize = {}));
    var check;
    (function (check) {
        // tslint:disable-next-line:no-shadowed-variable
        var paymentMethod;
        (function (paymentMethod) {
            paymentMethod.movieTicket = CheckMovieTicketActionFactory;
        })(paymentMethod = check.paymentMethod || (check.paymentMethod = {}));
        check.token = CheckTokenActionFactory;
    })(check = action.check || (action.check = {}));
    var interact;
    (function (interact) {
        var confirm;
        (function (confirm) {
            confirm.reservation = ConfirmReservationActionFactory;
        })(confirm = interact.confirm || (interact.confirm = {}));
        var register;
        (function (register) {
        })(register = interact.register || (interact.register = {}));
        var unRegister;
        (function (unRegister) {
        })(unRegister = interact.unRegister || (interact.unRegister = {}));
    })(interact = action.interact || (action.interact = {}));
    var trade;
    (function (trade) {
        // tslint:disable-next-line:no-shadowed-variable
        trade.order = OrderActionFactory;
        trade.pay = PayActionFactory;
        trade.refund = RefundActionFactory;
    })(trade = action.trade || (action.trade = {}));
    var transfer;
    (function (transfer) {
        var give;
        (function (give) {
            // tslint:disable-next-line:no-shadowed-variable
            give.pointAward = GivePointAwardActionFactory;
        })(give = transfer.give || (transfer.give = {}));
        var print;
        (function (print) {
            print.ticket = PrintTicketActionFactory;
        })(print = transfer.print || (transfer.print = {}));
        /**
         * 返却アクション
         * returnはネームスペース名に使えないのでreturnAction
         */
        var returnAction;
        (function (returnAction) {
            // tslint:disable-next-line:no-shadowed-variable
            returnAction.order = ReturnOrderActionFactory;
            returnAction.pointAward = ReturnPointAwardActionFactory;
        })(returnAction = transfer.returnAction || (transfer.returnAction = {}));
        var send;
        (function (send) {
            var message;
            (function (message) {
                message.email = SendEmailMessageActionFactory;
            })(message = send.message || (send.message = {}));
            // tslint:disable-next-line:no-shadowed-variable
            send.order = SendOrderActionFactory;
        })(send = transfer.send || (transfer.send = {}));
    })(transfer = action.transfer || (action.transfer = {}));
})(action = exports.action || (exports.action = {}));
exports.accountType = accountType_1.default;
exports.encodingFormat = EncodingFormat;
var paymentMethod;
(function (paymentMethod) {
    var paymentCard;
    (function (paymentCard) {
        paymentCard.creditCard = CreditCardFactory;
        paymentCard.movieTicket = MovieTicketFactory;
    })(paymentCard = paymentMethod.paymentCard || (paymentMethod.paymentCard = {}));
})(paymentMethod = exports.paymentMethod || (exports.paymentMethod = {}));
exports.clientUser = ClientUserFactory;
var creativeWork;
(function (creativeWork) {
    var message;
    (function (message) {
        message.email = EmailMessageFactory;
    })(message = creativeWork.message || (creativeWork.message = {}));
})(creativeWork = exports.creativeWork || (exports.creativeWork = {}));
exports.creativeWorkType = creativeWorkType_1.default;
var event;
(function (event) {
    event.screeningEvent = ScreeningEventFactory;
    event.screeningEventSeries = ScreeningEventSeriesFactory;
})(event = exports.event || (exports.event = {}));
exports.invoice = InvoiceFactory;
exports.monetaryAmount = MonetaryAmountFactory;
var offer;
(function (offer) {
})(offer = exports.offer || (exports.offer = {}));
exports.order = OrderFactory;
exports.orderStatus = orderStatus_1.default;
var organization;
(function (organization) {
})(organization = exports.organization || (exports.organization = {}));
exports.organizationType = organizationType_1.default;
exports.ownershipInfo = OwnershipInfoFactory;
exports.priceCurrency = priceCurrency_1.default;
exports.paymentMethodType = paymentMethodType_1.default;
exports.paymentStatusType = paymentStatusType_1.default;
exports.person = PersonFactory;
exports.personType = personType_1.default;
exports.placeType = placeType_1.default;
exports.programMembership = ProgramMembershipFactory;
exports.propertyValue = PropertyValueFactory;
exports.quantitativeValue = QuantitativeValueFactory;
var service;
(function (service) {
    service.webAPI = WebAPIServiceFactory;
})(service = exports.service || (exports.service = {}));
exports.sortType = sortType_1.default;
exports.taskExecutionResult = TaskExecutionResultFactory;
exports.taskName = taskName_1.default;
exports.taskStatus = taskStatus_1.default;
var transaction;
(function (transaction) {
    transaction.placeOrder = PlaceOrderTransactionFactory;
    transaction.returnOrder = ReturnOrderTransactionFactory;
})(transaction = exports.transaction || (exports.transaction = {}));
exports.transactionStatusType = transactionStatusType_1.default;
exports.transactionTasksExportationStatus = transactionTasksExportationStatus_1.default;
exports.transactionType = transactionType_1.default;
exports.unitCode = unitCode_1.UnitCode;

},{"./chevre":92,"./cognito":93,"./factory/accountType":94,"./factory/action/authorize/award/point":97,"./factory/action/authorize/offer/seatReservation":98,"./factory/action/authorize/paymentMethod/account":99,"./factory/action/authorize/paymentMethod/any":100,"./factory/action/authorize/paymentMethod/creditCard":101,"./factory/action/authorize/paymentMethod/movieTicket":102,"./factory/action/check/paymentMethod/movieTicket":103,"./factory/action/check/token":104,"./factory/action/interact/confirm/reservation":105,"./factory/action/trade/order":106,"./factory/action/trade/pay":107,"./factory/action/trade/refund":108,"./factory/action/transfer/give/pointAward":109,"./factory/action/transfer/print/ticket":110,"./factory/action/transfer/return/order":111,"./factory/action/transfer/return/pointAward":112,"./factory/action/transfer/send/message/email":113,"./factory/action/transfer/send/order":114,"./factory/actionStatusType":95,"./factory/actionType":96,"./factory/clientUser":115,"./factory/creativeWork/message/email":117,"./factory/creativeWorkType":116,"./factory/encodingFormat":118,"./factory/errorCode":119,"./factory/errors":130,"./factory/event/screeningEvent":131,"./factory/event/screeningEventSeries":132,"./factory/invoice":133,"./factory/monetaryAmount":134,"./factory/order":135,"./factory/orderStatus":136,"./factory/organizationType":137,"./factory/ownershipInfo":138,"./factory/paymentMethod/paymentCard/creditCard":140,"./factory/paymentMethod/paymentCard/movieTicket":141,"./factory/paymentMethodType":139,"./factory/paymentStatusType":142,"./factory/person":143,"./factory/personType":144,"./factory/placeType":145,"./factory/priceCurrency":146,"./factory/programMembership":147,"./factory/propertyValue":148,"./factory/quantitativeValue":149,"./factory/service/webAPI":150,"./factory/sortType":151,"./factory/taskExecutionResult":152,"./factory/taskName":153,"./factory/taskStatus":154,"./factory/transaction/placeOrder":158,"./factory/transaction/returnOrder":159,"./factory/transactionStatusType":155,"./factory/transactionTasksExportationStatus":156,"./factory/transactionType":157,"./factory/unitCode":160,"@pecorino/factory":427,"@waiter/factory":441}],162:[function(require,module,exports){
'use strict'
/* eslint no-proto: 0 */
module.exports = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties)

function setProtoOf (obj, proto) {
  obj.__proto__ = proto
  return obj
}

function mixinProperties (obj, proto) {
  for (var prop in proto) {
    if (!obj.hasOwnProperty(prop)) {
      obj[prop] = proto[prop]
    }
  }
  return obj
}

},{}],163:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * factory
 */
__export(require("@motionpicture/sskts-factory"));

},{"@motionpicture/sskts-factory":261}],164:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:max-classes-per-file
/**
 * API Service Library for Javascript
 */
var cinerino = require("@cinerino/api-abstract-client");
var factory = require("./factory");
var account_1 = require("./service/account");
var action_1 = require("./service/action");
var event_1 = require("./service/event");
var order_1 = require("./service/order");
var organization_1 = require("./service/organization");
var ownershipInfo_1 = require("./service/ownershipInfo");
var person_1 = require("./service/person");
var place_1 = require("./service/place");
var programMembership_1 = require("./service/programMembership");
var task_1 = require("./service/task");
var placeOrder_1 = require("./service/transaction/placeOrder");
var returnOrder_1 = require("./service/transaction/returnOrder");
var userPool_1 = require("./service/userPool");
exports.factory = factory;
exports.transporters = cinerino.transporters;
exports.auth = cinerino.auth;
/**
 * 抽象認証クライアント
 */
var Auth = /** @class */ (function (_super) {
    __extends(Auth, _super);
    function Auth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Auth;
}(cinerino.auth.Auth));
exports.Auth = Auth;
var service;
(function (service) {
    /**
     * Pecorino口座サービス
     */
    var Account = /** @class */ (function (_super) {
        __extends(Account, _super);
        function Account() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Account;
    }(account_1.AccountService));
    service.Account = Account;
    /**
     * アクションサービス
     */
    var Action = /** @class */ (function (_super) {
        __extends(Action, _super);
        function Action() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Action;
    }(action_1.ActionService));
    service.Action = Action;
    /**
     * イベントサービス
     */
    var Event = /** @class */ (function (_super) {
        __extends(Event, _super);
        function Event() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Event;
    }(event_1.EventService));
    service.Event = Event;
    /**
     * 注文サービス
     */
    var Order = /** @class */ (function (_super) {
        __extends(Order, _super);
        function Order() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Order;
    }(order_1.OrderService));
    service.Order = Order;
    /**
     * 組織サービス
     */
    var Organization = /** @class */ (function (_super) {
        __extends(Organization, _super);
        function Organization() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Organization;
    }(organization_1.OrganizationService));
    service.Organization = Organization;
    /**
     * 所有権サービス
     */
    var OwnershipInfo = /** @class */ (function (_super) {
        __extends(OwnershipInfo, _super);
        function OwnershipInfo() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return OwnershipInfo;
    }(ownershipInfo_1.OwnershipInfoService));
    service.OwnershipInfo = OwnershipInfo;
    /**
     * ユーザーサービス
     */
    var Person = /** @class */ (function (_super) {
        __extends(Person, _super);
        function Person() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Person;
    }(person_1.PersonService));
    service.Person = Person;
    /**
     * 場所サービス
     */
    var Place = /** @class */ (function (_super) {
        __extends(Place, _super);
        function Place() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Place;
    }(place_1.PlaceService));
    service.Place = Place;
    /**
     * 会員プログラムサービス
     */
    var ProgramMembership = /** @class */ (function (_super) {
        __extends(ProgramMembership, _super);
        function ProgramMembership() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ProgramMembership;
    }(programMembership_1.ProgramMembershipService));
    service.ProgramMembership = ProgramMembership;
    /**
     * タスクサービス
     */
    var Task = /** @class */ (function (_super) {
        __extends(Task, _super);
        function Task() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Task;
    }(task_1.TaskService));
    service.Task = Task;
    var transaction;
    (function (transaction) {
        /**
         * 注文取引サービス
         */
        var PlaceOrder = /** @class */ (function (_super) {
            __extends(PlaceOrder, _super);
            function PlaceOrder() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return PlaceOrder;
        }(placeOrder_1.PlaceOrderTransactionService));
        transaction.PlaceOrder = PlaceOrder;
        /**
         * 注文返品取引サービス
         */
        var ReturnOrder = /** @class */ (function (_super) {
            __extends(ReturnOrder, _super);
            function ReturnOrder() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ReturnOrder;
        }(returnOrder_1.ReturnOrderTransactionService));
        transaction.ReturnOrder = ReturnOrder;
    })(transaction = service.transaction || (service.transaction = {}));
    /**
     * 取引サービス
     * @alias service.transaction
     */
    // tslint:disable-next-line:no-single-line-block-comment
    /* istanbul ignore next */
    service.txn = transaction;
    /**
     * ユーザープールサービス
     */
    var UserPool = /** @class */ (function (_super) {
        __extends(UserPool, _super);
        function UserPool() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return UserPool;
    }(userPool_1.UserPoolService));
    service.UserPool = UserPool;
})(service = exports.service || (exports.service = {}));

},{"./factory":163,"./service/account":166,"./service/action":167,"./service/event":168,"./service/order":169,"./service/organization":170,"./service/ownershipInfo":171,"./service/person":172,"./service/place":173,"./service/programMembership":174,"./service/task":175,"./service/transaction/placeOrder":176,"./service/transaction/returnOrder":177,"./service/userPool":178,"@cinerino/api-abstract-client":63}],165:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * サービスファクトリー
 */
var cinerino = require("@cinerino/api-abstract-client");
/**
 * Baseサービス
 */
var Service = /** @class */ (function (_super) {
    __extends(Service, _super);
    function Service() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Service;
}(cinerino.service.Service));
exports.Service = Service;

},{"@cinerino/api-abstract-client":63}],166:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var http_status_1 = require("http-status");
var service_1 = require("../service");
/**
 * Pecorino口座サービス
 */
var AccountService = /** @class */ (function (_super) {
    __extends(AccountService, _super);
    function AccountService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Pecorinoポイントを入金する
     * 管理者権限が必要です。
     */
    AccountService.prototype.deposit = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch({
                            uri: '/accounts/transactions/deposit',
                            method: 'POST',
                            body: params,
                            expectedStatusCodes: [http_status_1.NO_CONTENT]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return AccountService;
}(service_1.Service));
exports.AccountService = AccountService;

},{"../service":165,"http-status":451}],167:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var http_status_1 = require("http-status");
var service_1 = require("../service");
/**
 * action service
 */
var ActionService = /** @class */ (function (_super) {
    __extends(ActionService, _super);
    function ActionService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * チケット印刷
     */
    ActionService.prototype.printTicket = function (
    /**
     * チケットオブジェクト
     */
    params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/actions/print/ticket',
                        method: 'POST',
                        body: params,
                        expectedStatusCodes: [http_status_1.CREATED]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * チケット印刷アクション検索
     */
    ActionService.prototype.searchPrintTicket = function (
    /**
     * 検索条件
     */
    params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/actions/print/ticket',
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    return ActionService;
}(service_1.Service));
exports.ActionService = ActionService;

},{"../service":165,"http-status":451}],168:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var http_status_1 = require("http-status");
var service_1 = require("../service");
/**
 * event service
 */
var EventService = /** @class */ (function (_super) {
    __extends(EventService, _super);
    function EventService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 上映イベント検索(ページング機能付き)
     */
    EventService.prototype.searchIndividualScreeningEventWithPagination = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/events/individualScreeningEvent',
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = {
                                        totalCount: Number(response.headers.get('X-Total-Count'))
                                    };
                                    return [4 /*yield*/, response.json()];
                                case 1: return [2 /*return*/, (_a.data = _b.sent(),
                                        _a)];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * 上映イベント検索
     * @deprecated Use searchIndividualScreeningEventWithPagination
     */
    EventService.prototype.searchIndividualScreeningEvent = function (
    /**
     * 検索条件
     */
    params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/events/individualScreeningEvent',
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 上映イベント情報取得
     */
    EventService.prototype.findIndividualScreeningEvent = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/events/individualScreeningEvent/" + params.identifier,
                        method: 'GET',
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    return EventService;
}(service_1.Service));
exports.EventService = EventService;

},{"../service":165,"http-status":451}],169:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var http_status_1 = require("http-status");
var service_1 = require("../service");
/**
 * 注文サービス
 */
var OrderService = /** @class */ (function (_super) {
    __extends(OrderService, _super);
    function OrderService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 照会キーで注文情報を取得する
     */
    OrderService.prototype.findByOrderInquiryKey = function (
    /**
     * 注文照会キー
     */
    params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/orders/findByOrderInquiryKey',
                        method: 'POST',
                        body: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 注文を検索する
     */
    OrderService.prototype.search = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/orders',
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = {
                                        totalCount: Number(response.headers.get('X-Total-Count'))
                                    };
                                    return [4 /*yield*/, response.json()];
                                case 1: return [2 /*return*/, (_a.data = _b.sent(),
                                        _a)];
                            }
                        });
                    }); })];
            });
        });
    };
    return OrderService;
}(service_1.Service));
exports.OrderService = OrderService;

},{"../service":165,"http-status":451}],170:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
/**
 * 組織サービス
 */
var http_status_1 = require("http-status");
var service_1 = require("../service");
/**
 * organization service
 */
var OrganizationService = /** @class */ (function (_super) {
    __extends(OrganizationService, _super);
    function OrganizationService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 劇場組織検索
     */
    OrganizationService.prototype.searchMovieTheaters = function (
    /**
     * 検索条件
     */
    params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/organizations/movieTheater',
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 枝番号で劇場組織検索
     */
    OrganizationService.prototype.findMovieTheaterByBranchCode = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/organizations/movieTheater/" + params.branchCode,
                        method: 'GET',
                        qs: {},
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    return OrganizationService;
}(service_1.Service));
exports.OrganizationService = OrganizationService;

},{"../service":165,"http-status":451}],171:[function(require,module,exports){
"use strict";
/**
 * 所有権サービス
 *
 * @namespace service.ownershipInfo
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var http_status_1 = require("http-status");
var service_1 = require("../service");
/**
 * organization service
 */
var OwnershipInfoService = /** @class */ (function (_super) {
    __extends(OwnershipInfoService, _super);
    function OwnershipInfoService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 登録日と劇場で会員数をカウント
     */
    OwnershipInfoService.prototype.countByRegisterDateAndTheater = function (
    /**
     * 検索条件
     * fromDateとtoDateの時間を注意して
     */
    params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/ownershipInfos/countByRegisterDateAndTheater',
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    return OwnershipInfoService;
}(service_1.Service));
exports.OwnershipInfoService = OwnershipInfoService;

},{"../service":165,"http-status":451}],172:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var cinerino = require("@cinerino/api-abstract-client");
var http_status_1 = require("http-status");
/**
 * ユーザーサービス
 */
var PersonService = /** @class */ (function (_super) {
    __extends(PersonService, _super);
    function PersonService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * ユーザーの連絡先を検索する
     * @deprecated Use getProfile()
     */
    PersonService.prototype.getContacts = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/people/" + params.personId + "/contacts",
                        method: 'GET',
                        qs: {},
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * ユーザーの連絡先を更新する
     * @deprecated Use updateProfile()
     */
    PersonService.prototype.updateContacts = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch({
                            uri: "/people/" + params.personId + "/contacts",
                            method: 'PUT',
                            body: params.contacts,
                            expectedStatusCodes: [http_status_1.NO_CONTENT]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * クレジットカード検索
     * @see example /example/person/handleCreditCards
     */
    PersonService.prototype.findCreditCards = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/people/" + params.personId + "/creditCards",
                        method: 'GET',
                        qs: {},
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * クレジットカード追加
     * @return successfully created credit card info
     * @see example /example/person/handleCreditCards
     */
    PersonService.prototype.addCreditCard = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/people/" + params.personId + "/creditCards",
                        method: 'POST',
                        body: params.creditCard,
                        expectedStatusCodes: [http_status_1.CREATED]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * クレジットカード削除
     * @see /example/person/handleCreditCards
     */
    PersonService.prototype.deleteCreditCard = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch({
                            uri: "/people/" + params.personId + "/creditCards/" + params.cardSeq,
                            method: 'DELETE',
                            expectedStatusCodes: [http_status_1.NO_CONTENT]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 口座開設
     */
    PersonService.prototype.openAccount = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/people/" + params.personId + "/accounts",
                        method: 'POST',
                        body: {
                            name: params.name
                        },
                        expectedStatusCodes: [http_status_1.CREATED]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 口座開解約
     * 口座の状態を変更するだけで、ユーザーの所有する口座リストから削除はされません。
     * 解約された口座で取引を進行しようとすると400エラーとなります。
     */
    PersonService.prototype.closeAccount = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch({
                            uri: "/people/" + params.personId + "/accounts/" + params.accountNumber + "/close",
                            method: 'PUT',
                            expectedStatusCodes: [http_status_1.NO_CONTENT]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 口座照会
     */
    PersonService.prototype.findAccounts = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/people/" + params.personId + "/accounts",
                        method: 'GET',
                        qs: {},
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 口座取引履歴検索
     */
    PersonService.prototype.searchAccountMoneyTransferActions = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/people/" + params.personId + "/accounts/" + params.accountNumber + "/actions/moneyTransfer",
                        method: 'GET',
                        qs: {},
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 所有権を検索する
     * 座席予約、所属会員プログラム、などユーザーの資産(モノ、サービス)を検索します。
     */
    PersonService.prototype.searchOwnershipInfos = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/people/" + params.ownedBy + "/ownershipInfos/" + params.goodType,
                        method: 'GET',
                        qs: {
                            ownedAt: params.ownedAt
                        },
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 会員プログラムに登録する
     */
    PersonService.prototype.registerProgramMembership = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/people/" + params.personId + "/ownershipInfos/programMembership/register",
                        method: 'PUT',
                        body: {
                            programMembershipId: params.programMembershipId,
                            offerIdentifier: params.offerIdentifier,
                            sellerType: params.sellerType,
                            sellerId: params.sellerId
                        },
                        expectedStatusCodes: [http_status_1.ACCEPTED]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 会員プログラム登録解除
     */
    PersonService.prototype.unRegisterProgramMembership = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/people/" + params.personId + "/ownershipInfos/programMembership/" + params.ownershipInfoIdentifier + "/unRegister",
                        method: 'PUT',
                        body: {},
                        expectedStatusCodes: [http_status_1.ACCEPTED]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    return PersonService;
}(cinerino.service.Person));
exports.PersonService = PersonService;

},{"@cinerino/api-abstract-client":63,"http-status":451}],173:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
/**
 * 場所サービス
 */
var http_status_1 = require("http-status");
var service_1 = require("../service");
/**
 * place service
 */
var PlaceService = /** @class */ (function (_super) {
    __extends(PlaceService, _super);
    function PlaceService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 劇場検索
     */
    PlaceService.prototype.searchMovieTheaters = function (
    /**
     * 検索条件
     */
    params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/places/movieTheater',
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 劇場情報取得
     */
    PlaceService.prototype.findMovieTheater = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/places/movieTheater/" + params.branchCode,
                        method: 'GET',
                        qs: {},
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    return PlaceService;
}(service_1.Service));
exports.PlaceService = PlaceService;

},{"../service":165,"http-status":451}],174:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var http_status_1 = require("http-status");
var service_1 = require("../service");
/**
 * 会員プログラムサービス
 */
var ProgramMembershipService = /** @class */ (function (_super) {
    __extends(ProgramMembershipService, _super);
    function ProgramMembershipService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 検索
     */
    ProgramMembershipService.prototype.search = function (
    /**
     * 検索条件
     */
    params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/programMemberships',
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    return ProgramMembershipService;
}(service_1.Service));
exports.ProgramMembershipService = ProgramMembershipService;

},{"../service":165,"http-status":451}],175:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var cinerino = require("@cinerino/api-abstract-client");
/**
 * タスクサービス
 */
var TaskService = /** @class */ (function (_super) {
    __extends(TaskService, _super);
    function TaskService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TaskService;
}(cinerino.service.Task));
exports.TaskService = TaskService;

},{"@cinerino/api-abstract-client":63}],176:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
/**
 * 注文取引サービス
 */
var http_status_1 = require("http-status");
var factory = require("../../factory");
var service_1 = require("../../service");
/**
 * 注文取引サービス
 */
var PlaceOrderTransactionService = /** @class */ (function (_super) {
    __extends(PlaceOrderTransactionService, _super);
    function PlaceOrderTransactionService(options) {
        var _this = _super.call(this, options) /* istanbul ignore next */ || this;
        _this.typeOf = factory.transactionType.PlaceOrder;
        return _this;
    }
    /**
     * 取引を開始する
     * 開始できない場合(混雑中など)、nullが返されます。
     * @returns 取引オブジェクト
     */
    PlaceOrderTransactionService.prototype.start = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/transactions/placeOrder/start',
                        method: 'POST',
                        body: {
                            expires: params.expires,
                            sellerId: params.sellerId,
                            passportToken: params.passportToken
                        },
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 取引に座席予約を追加する
     * @returns 座席予約承認アクション
     */
    PlaceOrderTransactionService.prototype.createSeatReservationAuthorization = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/transactions/placeOrder/" + params.transactionId + "/actions/authorize/seatReservation",
                        method: 'POST',
                        expectedStatusCodes: [http_status_1.CREATED],
                        body: {
                            eventIdentifier: params.eventIdentifier,
                            offers: params.offers
                        }
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 座席予約取消
     */
    PlaceOrderTransactionService.prototype.cancelSeatReservationAuthorization = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch({
                            uri: "/transactions/placeOrder/" + params.transactionId + "/actions/authorize/seatReservation/" + params.actionId,
                            method: 'DELETE',
                            expectedStatusCodes: [http_status_1.NO_CONTENT]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 座席予約承認アクションの供給情報を変更する
     * 完了ステータスの座席仮予約に対して券種変更する際に使用
     * @returns 座席予約承認アクション
     */
    PlaceOrderTransactionService.prototype.changeSeatReservationOffers = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/transactions/placeOrder/" + params.transactionId + "/actions/authorize/seatReservation/" + params.actionId,
                        method: 'PATCH',
                        expectedStatusCodes: [http_status_1.OK],
                        body: {
                            eventIdentifier: params.eventIdentifier,
                            offers: params.offers
                        }
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * クレジットカードのオーソリを取得する
     * @returns 承認アクション
     */
    PlaceOrderTransactionService.prototype.createCreditCardAuthorization = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/transactions/placeOrder/" + params.transactionId + "/actions/authorize/creditCard",
                        method: 'POST',
                        expectedStatusCodes: [http_status_1.CREATED],
                        body: {
                            orderId: params.orderId,
                            amount: params.amount,
                            method: params.method,
                            creditCard: params.creditCard
                        }
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * クレジットカードオーソリ取消
     */
    PlaceOrderTransactionService.prototype.cancelCreditCardAuthorization = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch({
                            uri: "/transactions/placeOrder/" + params.transactionId + "/actions/authorize/creditCard/" + params.actionId,
                            method: 'DELETE',
                            expectedStatusCodes: [http_status_1.NO_CONTENT]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 決済方法として、ムビチケを追加する
     * @returns 承認アクション
     */
    PlaceOrderTransactionService.prototype.createMvtkAuthorization = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/transactions/placeOrder/" + params.transactionId + "/actions/authorize/mvtk",
                        method: 'POST',
                        expectedStatusCodes: [http_status_1.CREATED],
                        body: params.mvtk
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * ムビチケ取消
     */
    PlaceOrderTransactionService.prototype.cancelMvtkAuthorization = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch({
                            uri: "/transactions/placeOrder/" + params.transactionId + "/actions/authorize/mvtk/" + params.actionId,
                            method: 'DELETE',
                            expectedStatusCodes: [http_status_1.NO_CONTENT]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Pecorino口座決済のオーソリを取得する
     * @returns 承認アクション
     */
    PlaceOrderTransactionService.prototype.createPecorinoPaymentAuthorization = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/transactions/placeOrder/" + params.transactionId + "/actions/authorize/paymentMethod/pecorino",
                        method: 'POST',
                        expectedStatusCodes: [http_status_1.CREATED],
                        body: {
                            amount: params.amount,
                            fromAccountNumber: params.fromAccountNumber,
                            notes: params.notes
                        }
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * Pecorino口座決済オーソリ取消
     */
    PlaceOrderTransactionService.prototype.cancelPecorinoPaymentAuthorization = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch({
                            uri: "/transactions/placeOrder/" + params.transactionId + "/actions/authorize/paymentMethod/pecorino/" + params.actionId,
                            method: 'DELETE',
                            expectedStatusCodes: [http_status_1.NO_CONTENT]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Pecorinoポイントインセンティブのオーソリを取得する
     * @returns 承認アクション
     */
    PlaceOrderTransactionService.prototype.createPecorinoAwardAuthorization = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/transactions/placeOrder/" + params.transactionId + "/actions/authorize/award/pecorino",
                        method: 'POST',
                        expectedStatusCodes: [http_status_1.CREATED],
                        body: {
                            amount: params.amount,
                            toAccountNumber: params.toAccountNumber,
                            notes: params.notes
                        }
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * Pecorinoポイントインセンティブオーソリ取消
     */
    PlaceOrderTransactionService.prototype.cancelPecorinoAwardAuthorization = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch({
                            uri: "/transactions/placeOrder/" + params.transactionId + "/actions/authorize/award/pecorino/" + params.actionId,
                            method: 'DELETE',
                            expectedStatusCodes: [http_status_1.NO_CONTENT]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * register a customer contact
     * @returns 登録された購入者情報
     */
    PlaceOrderTransactionService.prototype.setCustomerContact = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/transactions/placeOrder/" + params.transactionId + "/customerContact",
                        method: 'PUT',
                        expectedStatusCodes: [http_status_1.CREATED],
                        body: params.contact
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 取引確定
     * @returns 作成された注文
     */
    PlaceOrderTransactionService.prototype.confirm = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/transactions/placeOrder/" + params.transactionId + "/confirm",
                        method: 'POST',
                        expectedStatusCodes: [http_status_1.CREATED],
                        body: {
                            sendEmailMessage: params.sendEmailMessage,
                            incentives: params.incentives
                        }
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 確定した取引に関して、購入者にメール通知を送信する
     * @returns メール送信タスク
     */
    PlaceOrderTransactionService.prototype.sendEmailNotification = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/transactions/placeOrder/" + params.transactionId + "/tasks/sendEmailNotification",
                        method: 'POST',
                        expectedStatusCodes: [http_status_1.CREATED],
                        body: params.emailMessageAttributes
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 明示的に取引を中止する
     * 既に確定済、あるいは、期限切れの取引に対して実行するとNotFoundエラーが返されます。
     * @param params.transactionId 取引ID
     */
    PlaceOrderTransactionService.prototype.cancel = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch({
                            uri: "/transactions/placeOrder/" + params.transactionId + "/cancel",
                            method: 'POST',
                            expectedStatusCodes: [http_status_1.NO_CONTENT]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 取引検索
     */
    PlaceOrderTransactionService.prototype.search = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/transactions/" + this.typeOf,
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = {
                                        totalCount: Number(response.headers.get('X-Total-Count'))
                                    };
                                    return [4 /*yield*/, response.json()];
                                case 1: return [2 /*return*/, (_a.data = _b.sent(),
                                        _a)];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * 取引に対するアクションを検索する
     */
    PlaceOrderTransactionService.prototype.searchActionsByTransactionId = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: "/transactions/" + this.typeOf + "/" + params.id + "/actions",
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    return PlaceOrderTransactionService;
}(service_1.Service));
exports.PlaceOrderTransactionService = PlaceOrderTransactionService;

},{"../../factory":163,"../../service":165,"http-status":451}],177:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var http_status_1 = require("http-status");
var factory = require("../../factory");
var service_1 = require("../../service");
/**
 * 注文返品取引サービス
 */
var ReturnOrderTransactionService = /** @class */ (function (_super) {
    __extends(ReturnOrderTransactionService, _super);
    function ReturnOrderTransactionService(options) {
        var _this = _super.call(this, options) /* istanbul ignore next */ || this;
        _this.typeOf = factory.transactionType.ReturnOrder;
        return _this;
    }
    /**
     * 取引を開始する
     */
    ReturnOrderTransactionService.prototype.start = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/transactions/returnOrder/start',
                        method: 'POST',
                        body: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, response.json()];
                    }); }); })];
            });
        });
    };
    /**
     * 取引確定
     */
    ReturnOrderTransactionService.prototype.confirm = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch({
                            uri: "/transactions/returnOrder/" + params.id + "/confirm",
                            method: 'PUT',
                            expectedStatusCodes: [http_status_1.NO_CONTENT]
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 取引検索
     */
    ReturnOrderTransactionService.prototype.search = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.fetch({
                        uri: '/transactions/returnOrder',
                        method: 'GET',
                        qs: params,
                        expectedStatusCodes: [http_status_1.OK]
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = {
                                        totalCount: Number(response.headers.get('X-Total-Count'))
                                    };
                                    return [4 /*yield*/, response.json()];
                                case 1: return [2 /*return*/, (_a.data = _b.sent(),
                                        _a)];
                            }
                        });
                    }); })];
            });
        });
    };
    return ReturnOrderTransactionService;
}(service_1.Service));
exports.ReturnOrderTransactionService = ReturnOrderTransactionService;

},{"../../factory":163,"../../service":165,"http-status":451}],178:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var cinerino = require("@cinerino/api-abstract-client");
/**
 * Cognitoユーザープールサービス
 */
var UserPoolService = /** @class */ (function (_super) {
    __extends(UserPoolService, _super);
    function UserPoolService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserPoolService;
}(cinerino.service.UserPool));
exports.UserPoolService = UserPoolService;

},{"@cinerino/api-abstract-client":63}],179:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],180:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 口座タイプ
 * Pecorinoサービスに対して口座タイプを指定します。
 */
var AccountType;
(function (AccountType) {
    AccountType["Point"] = "Point";
})(AccountType || (AccountType = {}));
exports.default = AccountType;

},{}],181:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = require("@cinerino/factory");
/**
 * アクションステータス
 */
exports.default = factory_1.actionStatusType;

},{"@cinerino/factory":389}],182:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = require("@cinerino/factory");
/**
 * アクションタイプ
 */
exports.default = factory_1.actionType;

},{"@cinerino/factory":389}],183:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectType;
(function (ObjectType) {
    ObjectType["PecorinoAward"] = "PecorinoAward";
})(ObjectType = exports.ObjectType || (exports.ObjectType = {}));

},{}],184:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectType;
(function (ObjectType) {
    ObjectType["Mvtk"] = "Mvtk";
})(ObjectType = exports.ObjectType || (exports.ObjectType = {}));

},{}],185:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],186:[function(require,module,exports){
arguments[4][98][0].apply(exports,arguments)
},{"dup":98}],187:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],188:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],189:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],190:[function(require,module,exports){
arguments[4][184][0].apply(exports,arguments)
},{"dup":184}],191:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],192:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],193:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],194:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],195:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],196:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pecorino_1 = require("../../../action/authorize/award/pecorino");
exports.ObjectType = pecorino_1.ObjectType;

},{"../../../action/authorize/award/pecorino":183}],197:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],198:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],199:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],200:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],201:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],202:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],203:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = require("@cinerino/factory");
/**
 * 作品タイプ
 */
exports.default = factory_1.creativeWorkType;

},{"@cinerino/factory":389}],204:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],205:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],206:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = require("@cinerino/factory");
/**
 * エラーコード
 */
exports.default = factory_1.errorCode;

},{"@cinerino/factory":389}],207:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * errors
 */
var factory_1 = require("@cinerino/factory");
exports.errors = factory_1.errors;

},{"@cinerino/factory":389}],208:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-single-line-block-comment
/* istanbul ignore next */
function create(params) {
    return {
        id: params.id,
        identifier: params.identifier,
        name: (params.name === undefined) ? { ja: '', en: '' } : params.name,
        description: params.description,
        doorTime: params.doorTime,
        duration: (params.duration === undefined) ? undefined : params.duration.toString(),
        endDate: params.endDate,
        eventStatus: params.eventStatus,
        location: params.location,
        startDate: params.startDate,
        workPerformed: params.workPerformed,
        maximumAttendeeCapacity: params.maximumAttendeeCapacity,
        // offers: params.offers,
        remainingAttendeeCapacity: params.remainingAttendeeCapacity,
        typeOf: params.typeOf
    };
}
exports.create = create;

},{}],209:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cinerino = require("@cinerino/factory");
/**
 * イベントステータス
 */
exports.EventStatusType = cinerino.chevre.eventStatusType;

},{"@cinerino/factory":389}],210:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cinerino = require("@cinerino/factory");
/**
 * イベントタイプ
 */
exports.EventType = cinerino.chevre.eventType;

},{"@cinerino/factory":389}],211:[function(require,module,exports){
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var EventFactory = require("../event");
var ScreeningEventSeriesFactory = require("../event/screeningEventSeries");
var eventStatusType_1 = require("../eventStatusType");
var eventType_1 = require("../eventType");
/**
 * COAデータから上映イベントを作成する
 */
// tslint:disable-next-line:no-single-line-block-comment
/* istanbul ignore next */
function createFromCOA(params) {
    var identifier = createIdentifierFromCOA({
        theaterCode: params.superEvent.location.branchCode,
        titleCode: params.superEvent.workPerformed.identifier,
        titleBranchNum: params.superEvent.coaInfo.titleBranchNum,
        dateJouei: params.performanceFromCOA.dateJouei,
        screenCode: params.performanceFromCOA.screenCode,
        timeBegin: params.performanceFromCOA.timeBegin
    });
    // COA情報を整形して開始日時と終了日時を作成('2500'のような日またぎの時刻入力に対応)
    var timeEnd = params.performanceFromCOA.timeEnd;
    var addDay = 0;
    try {
        var DAY = 2400;
        addDay += Math.floor(Number(timeEnd) / DAY);
        // tslint:disable-next-line:no-magic-numbers
        timeEnd = ("0000" + Number(timeEnd) % DAY).slice(-4);
    }
    catch (error) {
        // no op
    }
    var endDate = moment(params.performanceFromCOA.dateJouei + " " + timeEnd + " +09:00", 'YYYYMMDD HHmm Z').add(addDay, 'days')
        .toDate();
    var startDate = moment(params.performanceFromCOA.dateJouei + " " + params.performanceFromCOA.timeBegin + " +09:00", 'YYYYMMDD HHmm Z')
        .toDate();
    return __assign({}, EventFactory.create({
        eventStatus: eventStatusType_1.EventStatusType.EventScheduled,
        typeOf: eventType_1.EventType.ScreeningEvent,
        id: identifier,
        identifier: identifier,
        name: params.superEvent.name
    }), {
        workPerformed: params.superEvent.workPerformed,
        location: {
            typeOf: params.screenRoom.typeOf,
            branchCode: params.screenRoom.branchCode,
            name: params.screenRoom.name
        },
        endDate: endDate,
        startDate: startDate,
        superEvent: params.superEvent,
        coaInfo: {
            theaterCode: params.superEvent.location.branchCode,
            dateJouei: params.performanceFromCOA.dateJouei,
            titleCode: params.performanceFromCOA.titleCode,
            titleBranchNum: params.performanceFromCOA.titleBranchNum,
            timeBegin: params.performanceFromCOA.timeBegin,
            timeEnd: params.performanceFromCOA.timeEnd,
            screenCode: params.performanceFromCOA.screenCode,
            trailerTime: params.performanceFromCOA.trailerTime,
            kbnService: params.serviceKubuns.filter(function (kubun) { return kubun.kubunCode === params.performanceFromCOA.kbnService; })[0],
            kbnAcoustic: params.acousticKubuns.filter(function (kubun) { return kubun.kubunCode === params.performanceFromCOA.kbnAcoustic; })[0],
            nameServiceDay: params.performanceFromCOA.nameServiceDay,
            availableNum: params.performanceFromCOA.availableNum,
            rsvStartDate: params.performanceFromCOA.rsvStartDate,
            rsvEndDate: params.performanceFromCOA.rsvEndDate,
            flgEarlyBooking: params.performanceFromCOA.flgEarlyBooking
        }
    });
}
exports.createFromCOA = createFromCOA;
/**
 * COA情報から上映イベント識別子を作成する
 */
function createIdentifierFromCOA(params) {
    return [
        ScreeningEventSeriesFactory.createIdentifier(params),
        params.dateJouei,
        params.screenCode,
        params.timeBegin
    ].join('');
}
exports.createIdentifierFromCOA = createIdentifierFromCOA;

},{"../event":208,"../event/screeningEventSeries":212,"../eventStatusType":209,"../eventType":210,"moment":390}],212:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var creativeWorkType_1 = require("../creativeWorkType");
var eventStatusType_1 = require("../eventStatusType");
var eventType_1 = require("../eventType");
var organizationType_1 = require("../organizationType");
/**
 * COAの作品抽出結果からFilmオブジェクトを作成する
 */
// tslint:disable-next-line:no-single-line-block-comment
/* istanbul ignore next */
function createFromCOA(params) {
    var endDate = (moment(params.filmFromCOA.dateEnd + " +09:00", 'YYYYMMDD Z').isValid())
        ? moment(params.filmFromCOA.dateEnd + " +09:00", 'YYYYMMDD Z').toDate()
        : undefined;
    var startDate = (moment(params.filmFromCOA.dateBegin + " +09:00", 'YYYYMMDD Z').isValid())
        ? moment(params.filmFromCOA.dateBegin + " +09:00", 'YYYYMMDD Z').toDate()
        : undefined;
    // title_codeは劇場をまたいで共有、title_branch_numは劇場毎に管理
    var identifier = createIdentifier({
        theaterCode: params.movieTheater.branchCode,
        titleCode: params.filmFromCOA.titleCode,
        titleBranchNum: params.filmFromCOA.titleBranchNum
    });
    return {
        id: identifier,
        identifier: identifier,
        name: {
            ja: params.filmFromCOA.titleName,
            en: params.filmFromCOA.titleNameEng
        },
        kanaName: params.filmFromCOA.titleNameKana,
        alternativeHeadline: params.filmFromCOA.titleNameShort,
        location: {
            identifier: params.movieTheater.identifier,
            branchCode: params.movieTheater.branchCode,
            name: params.movieTheater.name,
            kanaName: params.movieTheater.kanaName,
            typeOf: params.movieTheater.typeOf
        },
        organizer: {
            typeOf: organizationType_1.default.MovieTheater,
            identifier: params.movieTheater.identifier,
            name: params.movieTheater.name
        },
        videoFormat: params.eizouKubuns.filter(function (kubun) { return kubun.kubunCode === params.filmFromCOA.kbnEizou; })[0],
        workPerformed: {
            identifier: params.filmFromCOA.titleCode,
            name: params.filmFromCOA.titleNameOrig,
            duration: moment.duration(params.filmFromCOA.showTime, 'm').toISOString(),
            contentRating: params.eirinKubuns.filter(function (kubun) { return kubun.kubunCode === params.filmFromCOA.kbnEirin; })[0],
            typeOf: creativeWorkType_1.default.Movie
        },
        duration: moment.duration(params.filmFromCOA.showTime, 'm').toISOString(),
        endDate: endDate,
        startDate: startDate,
        coaInfo: {
            titleBranchNum: params.filmFromCOA.titleBranchNum,
            kbnJoueihousiki: params.joueihousikiKubuns.filter(function (kubun) { return kubun.kubunCode === params.filmFromCOA.kbnJoueihousiki; })[0],
            kbnJimakufukikae: params.jimakufukikaeKubuns.filter(function (kubun) { return kubun.kubunCode === params.filmFromCOA.kbnJimakufukikae; })[0],
            flgMvtkUse: params.filmFromCOA.flgMvtkUse,
            dateMvtkBegin: params.filmFromCOA.dateMvtkBegin
        },
        eventStatus: eventStatusType_1.EventStatusType.EventScheduled,
        typeOf: eventType_1.EventType.ScreeningEventSeries
    };
}
exports.createFromCOA = createFromCOA;
/**
 * COA情報から上映イベント識別子を作成する
 */
// tslint:disable-next-line:no-single-line-block-comment
/* istanbul ignore next */
function createIdentifier(params) {
    return [
        params.theaterCode,
        params.titleCode,
        params.titleBranchNum
    ].join('');
}
exports.createIdentifier = createIdentifier;

},{"../creativeWorkType":203,"../eventStatusType":209,"../eventType":210,"../organizationType":217,"moment":390}],213:[function(require,module,exports){
"use strict";
/**
 * 座席予約供給情報ファクトリー
 * @namespace offer.seatReservation
 */
Object.defineProperty(exports, "__esModule", { value: true });

},{}],214:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],215:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = require("@cinerino/factory");
/**
 * 注文ステータス
 */
exports.default = factory_1.orderStatus;

},{"@cinerino/factory":389}],216:[function(require,module,exports){
"use strict";
/**
 * 企業識別子
 */
Object.defineProperty(exports, "__esModule", { value: true });
var CorporationOrganizationIdentifier;
(function (CorporationOrganizationIdentifier) {
    CorporationOrganizationIdentifier["SasakiKogyo"] = "SasakiKogyo";
})(CorporationOrganizationIdentifier || (CorporationOrganizationIdentifier = {}));
exports.default = CorporationOrganizationIdentifier;

},{}],217:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = require("@cinerino/factory");
/**
 * 組織タイプ
 */
exports.default = factory_1.organizationType;

},{"@cinerino/factory":389}],218:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],219:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],220:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],221:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = require("@cinerino/factory");
/**
 * 決済方法タイプ
 */
exports.default = factory_1.paymentMethodType;

},{"@cinerino/factory":389}],222:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],223:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = require("@cinerino/factory");
/**
 * 決済ステータスタイプ
 */
exports.default = factory_1.paymentStatusType;

},{"@cinerino/factory":389}],224:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],225:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = require("@cinerino/factory");
/**
 * 人物タイプ
 */
exports.default = factory_1.personType;

},{"@cinerino/factory":389}],226:[function(require,module,exports){
arguments[4][32][0].apply(exports,arguments)
},{"dup":32}],227:[function(require,module,exports){
"use strict";
/**
 * 劇場ファクトリー
 *
 * @namespace place.movieTheater
 */
Object.defineProperty(exports, "__esModule", { value: true });
var placeType_1 = require("../placeType");
/**
 * COAのマスター抽出結果から作成する
 * @param theaterFromCOA COA劇場抽出結果
 * @param screensFromCOA COAスクリーン抽出結果
 */
// tslint:disable-next-line:no-single-line-block-comment
/* istanbul ignore next */
function createFromCOA(theaterFromCOA, screensFromCOA) {
    var identifier = "MovieTheater-" + theaterFromCOA.theaterCode;
    return {
        identifier: identifier,
        screenCount: screensFromCOA.length,
        branchCode: theaterFromCOA.theaterCode,
        name: {
            ja: theaterFromCOA.theaterName,
            en: theaterFromCOA.theaterNameEng
        },
        kanaName: theaterFromCOA.theaterNameKana,
        containsPlace: screensFromCOA.map(function (screenFromCOA) {
            return createScreeningRoomFromCOA(screenFromCOA);
        }),
        typeOf: placeType_1.default.MovieTheater,
        telephone: theaterFromCOA.theaterTelNum
    };
}
exports.createFromCOA = createFromCOA;
/**
 * COAのスクリーン抽出結果から上映室を作成する
 * @param screenFromCOA COAスクリーン抽出結果
 */
// tslint:disable-next-line:no-single-line-block-comment
/* istanbul ignore next */
function createScreeningRoomFromCOA(screenFromCOA) {
    var sections = [];
    var sectionCodes = [];
    screenFromCOA.listSeat.forEach(function (seat) {
        if (sectionCodes.indexOf(seat.seatSection) < 0) {
            sectionCodes.push(seat.seatSection);
            sections.push({
                branchCode: seat.seatSection,
                name: {
                    ja: "\u30BB\u30AF\u30B7\u30E7\u30F3" + seat.seatSection,
                    en: "section" + seat.seatSection
                },
                containsPlace: [],
                typeOf: placeType_1.default.ScreeningRoomSection
            });
        }
        sections[sectionCodes.indexOf(seat.seatSection)].containsPlace.push({
            branchCode: seat.seatNum,
            typeOf: placeType_1.default.Seat
        });
    });
    return {
        containsPlace: sections,
        branchCode: screenFromCOA.screenCode,
        name: {
            ja: screenFromCOA.screenName,
            en: screenFromCOA.screenNameEng
        },
        typeOf: placeType_1.default.ScreeningRoom
    };
}
exports.createScreeningRoomFromCOA = createScreeningRoomFromCOA;

},{"../placeType":226}],228:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = require("@cinerino/factory");
/**
 * price currency
 * The currency (in 3-letter ISO 4217 format) of the price or a price component,
 * when attached to PriceSpecification and its subtypes.
 */
exports.default = factory_1.priceCurrency;

},{"@cinerino/factory":389}],229:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 会員プログラム特典インターフェース
 */
var Award;
(function (Award) {
    /**
     * 口座決済
     */
    Award["PecorinoPayment"] = "PecorinoPayment";
})(Award = exports.Award || (exports.Award = {}));

},{}],230:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],231:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],232:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = require("@cinerino/factory");
/**
 * Enumerated status values for Reservation.
 */
exports.ReservationStatusType = factory_1.chevre.reservationStatusType;

},{"@cinerino/factory":389}],233:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cinerino = require("@cinerino/factory");
/**
 * 予約タイプ
 */
exports.ReservationType = cinerino.chevre.reservationType;

},{"@cinerino/factory":389}],234:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],235:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = require("@cinerino/factory");
/**
 * ソートタイプ
 */
exports.default = factory_1.sortType;

},{"@cinerino/factory":389}],236:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],237:[function(require,module,exports){
"use strict";
/**
 * task name
 * タスク名
 */
Object.defineProperty(exports, "__esModule", { value: true });
var TaskName;
(function (TaskName) {
    /**
     * 座席予約承認アクション取消
     */
    TaskName["CancelSeatReservation"] = "cancelSeatReservation";
    /**
     * クレジットカード承認アクション取消
     */
    TaskName["CancelCreditCard"] = "cancelCreditCard";
    /**
     * ムビチケ承認アクション取消
     */
    TaskName["CancelMvtk"] = "cancelMvtk";
    /**
     * 口座承認アクション取消
     */
    TaskName["CancelAccount"] = "cancelAccount";
    /**
     * ポイントインセンティブ承認アクション取消
     */
    TaskName["CancelPecorinoAward"] = "cancelPecorinoAward";
    /**
     * 上映イベント在庫仕入れ
     */
    TaskName["ImportScreeningEvents"] = "importScreeningEvents";
    /**
     *  Eメールメッセージ送信
     */
    TaskName["SendEmailMessage"] = "sendEmailMessage";
    /**
     * ムビチケ使用
     */
    TaskName["UseMvtk"] = "useMvtk";
    /**
     * 注文受付
     */
    TaskName["PlaceOrder"] = "placeOrder";
    /**
     * 注文返品
     */
    TaskName["ReturnOrder"] = "returnOrder";
    /**
     * ポイントインセンティブ返却
     */
    TaskName["ReturnPecorinoAward"] = "returnPecorinoAward";
    /**
     * 口座支払
     */
    TaskName["PayAccount"] = "payAccount";
    /**
     * クレジットカード支払
     */
    TaskName["PayCreditCard"] = "payCreditCard";
    /**
     * 注文配送
     */
    TaskName["SendOrder"] = "sendOrder";
    /**
     * 口座返金
     */
    TaskName["RefundAccount"] = "refundAccount";
    /**
     * クレジットカード返金
     */
    TaskName["RefundCreditCard"] = "refundCreditCard";
    /**
     * ポイントインセンティブ付与
     */
    TaskName["GivePecorinoAward"] = "givePecorinoAward";
    /**
     * 会員プログラム登録
     */
    TaskName["RegisterProgramMembership"] = "registerProgramMembership";
    /**
     * 会員プログラム登録解除
     */
    TaskName["UnRegisterProgramMembership"] = "unRegisterProgramMembership";
    /**
     * ウェブフックをたたく
     */
    TaskName["TriggerWebhook"] = "triggerWebhook";
})(TaskName || (TaskName = {}));
exports.default = TaskName;

},{}],238:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = require("@cinerino/factory");
/**
 * タスクステータス
 */
exports.default = factory_1.taskStatus;

},{"@cinerino/factory":389}],239:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],240:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],241:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],242:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],243:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],244:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],245:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],246:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],247:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],248:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],249:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],250:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],251:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],252:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],253:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],254:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],255:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = require("@cinerino/factory");
/**
 * 取引ステータス
 */
exports.default = factory_1.transactionStatusType;

},{"@cinerino/factory":389}],256:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = require("@cinerino/factory");
/**
 * 取引タスクエクスポートステータス
 */
exports.default = factory_1.transactionTasksExportationStatus;

},{"@cinerino/factory":389}],257:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = require("@cinerino/factory");
/**
 * 取引タイプ
 */
exports.default = factory_1.transactionType;

},{"@cinerino/factory":389}],258:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],259:[function(require,module,exports){
arguments[4][159][0].apply(exports,arguments)
},{"dup":159}],260:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = require("@cinerino/factory");
/**
 * 単位符号
 */
exports.UnitCode = factory_1.unitCode;

},{"@cinerino/factory":389}],261:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * factory
 */
var factory_1 = require("@cinerino/factory");
var cognito = require("./cognito");
var PecorinoAwardAuthorizeActionFactory = require("./factory/action/authorize/award/pecorino");
var MvtkAuthorizeActionFactory = require("./factory/action/authorize/discount/mvtk");
var ProgramMembershipOfferAuthorizeActionFactory = require("./factory/action/authorize/offer/programMembership");
var SeatReservationOfferAuthorizeActionFactory = require("./factory/action/authorize/offer/seatReservation");
var AuthorizeAccountPaymentActionFactory = require("./factory/action/authorize/paymentMethod/account");
var AuthorizeAnyPaymentActionFactory = require("./factory/action/authorize/paymentMethod/any");
var CreditCardAuthorizeActionFactory = require("./factory/action/authorize/paymentMethod/creditCard");
var UseMvtkActionFactory = require("./factory/action/consume/use/mvtk");
var RegisterProgramMembershipActionFactory = require("./factory/action/interact/register/programMembership");
var UnRegisterProgramMembershipActionFactory = require("./factory/action/interact/unRegister/programMembership");
var OrderActionFactory = require("./factory/action/trade/order");
var PayActionFactory = require("./factory/action/trade/pay");
var RefundActionFactory = require("./factory/action/trade/refund");
var GivePecorinoAwardActionFactory = require("./factory/action/transfer/give/pecorinoAward");
var PrintTicketActionFactory = require("./factory/action/transfer/print/ticket");
var ReturnOrderActionFactory = require("./factory/action/transfer/return/order");
var ReturnPecorinoAwardActionFactory = require("./factory/action/transfer/return/pecorinoAward");
var SendEmailMessageActionFactory = require("./factory/action/transfer/send/message/email");
var SendOrderActionFactory = require("./factory/action/transfer/send/order");
var actionStatusType_1 = require("./factory/actionStatusType");
var actionType_1 = require("./factory/actionType");
var accountType_1 = require("./factory/accountType");
var ClientUserFactory = require("./factory/clientUser");
var EmailMessageFactory = require("./factory/creativeWork/message/email");
var MovieCreativeWorkFactory = require("./factory/creativeWork/movie");
var creativeWorkType_1 = require("./factory/creativeWorkType");
var ScreeningEventFactory = require("./factory/event/screeningEvent");
var ScreeningEventSeriesFactory = require("./factory/event/screeningEventSeries");
var eventStatusType_1 = require("./factory/eventStatusType");
var eventType_1 = require("./factory/eventType");
var SeatReservationOfferFactory = require("./factory/offer/seatReservation");
var OrderFactory = require("./factory/order");
var orderStatus_1 = require("./factory/orderStatus");
var CorporationOrganizationFactory = require("./factory/organization/corporation");
var MovieTheaterOrganizationFactory = require("./factory/organization/movieTheater");
var corporation_1 = require("./factory/organizationIdentifier/corporation");
var organizationType_1 = require("./factory/organizationType");
var OwnershipInfoFactory = require("./factory/ownershipInfo");
var CreditCardFactory = require("./factory/paymentMethod/paymentCard/creditCard");
var paymentMethodType_1 = require("./factory/paymentMethodType");
var paymentStatusType_1 = require("./factory/paymentStatusType");
var PersonFactory = require("./factory/person");
var personType_1 = require("./factory/personType");
var MovieTheaterPlaceFactory = require("./factory/place/movieTheater");
var placeType_1 = require("./factory/placeType");
var priceCurrency_1 = require("./factory/priceCurrency");
var ProgramMembershipFactory = require("./factory/programMembership");
var PropertyValueFactory = require("./factory/propertyValue");
var QuantitativeValueFactory = require("./factory/quantitativeValue");
var EventReservationFactory = require("./factory/reservation/event");
var reservationStatusType_1 = require("./factory/reservationStatusType");
var reservationType_1 = require("./factory/reservationType");
var sortType_1 = require("./factory/sortType");
var unitCode_1 = require("./factory/unitCode");
var CancelCreditCardTaskFactory = require("./factory/task/cancelCreditCard");
var CancelMvtkTaskFactory = require("./factory/task/cancelMvtk");
var CancelPecorinoAwardTaskFactory = require("./factory/task/cancelPecorinoAward");
var CancelSeatReservationTaskFactory = require("./factory/task/cancelSeatReservation");
var GivePecorinoAwardTaskFactory = require("./factory/task/givePecorinoAward");
var PayCreditCardTaskFactory = require("./factory/task/payCreditCard");
var PlaceOrderTaskFactory = require("./factory/task/placeOrder");
var RefundCreditCardTaskFactory = require("./factory/task/refundCreditCard");
var RegisterProgramMembershipTaskFactory = require("./factory/task/registerProgramMembership");
var ReturnOrderTaskFactory = require("./factory/task/returnOrder");
var ReturnPecorinoAwardTaskFactory = require("./factory/task/returnPecorinoAward");
var SendEmailMessageTaskFactory = require("./factory/task/sendEmailMessage");
var SendOrderTaskFactory = require("./factory/task/sendOrder");
var TriggerWebhookTaskFactory = require("./factory/task/triggerWebhook");
var UnRegisterProgramMembershipTaskFactory = require("./factory/task/unRegisterProgramMembership");
var UseMvtkTaskFactory = require("./factory/task/useMvtk");
var TaskExecutionResultFactory = require("./factory/taskExecutionResult");
var taskName_1 = require("./factory/taskName");
var taskStatus_1 = require("./factory/taskStatus");
var PlaceOrderTransactionFactory = require("./factory/transaction/placeOrder");
var ReturnOrderTransactionFactory = require("./factory/transaction/returnOrder");
var transactionStatusType_1 = require("./factory/transactionStatusType");
var transactionTasksExportationStatus_1 = require("./factory/transactionTasksExportationStatus");
var transactionType_1 = require("./factory/transactionType");
var errorCode_1 = require("./factory/errorCode");
var errors_1 = require("./factory/errors");
exports.chevre = factory_1.chevre;
exports.cognito = cognito;
exports.pecorino = factory_1.pecorino;
exports.waiter = factory_1.waiter;
exports.errors = errors_1.errors;
exports.errorCode = errorCode_1.default;
exports.actionStatusType = actionStatusType_1.default;
exports.actionType = actionType_1.default;
var action;
(function (action) {
    var authorize;
    (function (authorize) {
        var award;
        (function (award) {
            // tslint:disable-next-line:no-shadowed-variable
            award.pecorino = PecorinoAwardAuthorizeActionFactory;
        })(award = authorize.award || (authorize.award = {}));
        // tslint:disable-next-line:no-shadowed-variable
        var paymentMethod;
        (function (paymentMethod) {
            paymentMethod.account = AuthorizeAccountPaymentActionFactory;
            paymentMethod.any = AuthorizeAnyPaymentActionFactory;
            paymentMethod.creditCard = CreditCardAuthorizeActionFactory;
            /**
             * @alias account
             * @deprecated Use account
             */
            // tslint:disable-next-line:no-shadowed-variable
            paymentMethod.pecorino = paymentMethod.account;
        })(paymentMethod = authorize.paymentMethod || (authorize.paymentMethod = {}));
        var discount;
        (function (discount) {
            discount.mvtk = MvtkAuthorizeActionFactory;
        })(discount = authorize.discount || (authorize.discount = {}));
        // tslint:disable-next-line:no-shadowed-variable
        var offer;
        (function (offer) {
            // tslint:disable-next-line:no-shadowed-variable
            offer.programMembership = ProgramMembershipOfferAuthorizeActionFactory;
            offer.seatReservation = SeatReservationOfferAuthorizeActionFactory;
        })(offer = authorize.offer || (authorize.offer = {}));
    })(authorize = action.authorize || (action.authorize = {}));
    var interact;
    (function (interact) {
        var register;
        (function (register) {
            // tslint:disable-next-line:no-shadowed-variable
            register.programMembership = RegisterProgramMembershipActionFactory;
        })(register = interact.register || (interact.register = {}));
        var unRegister;
        (function (unRegister) {
            // tslint:disable-next-line:no-shadowed-variable
            unRegister.programMembership = UnRegisterProgramMembershipActionFactory;
        })(unRegister = interact.unRegister || (interact.unRegister = {}));
    })(interact = action.interact || (action.interact = {}));
    var trade;
    (function (trade) {
        // tslint:disable-next-line:no-shadowed-variable
        trade.order = OrderActionFactory;
        trade.pay = PayActionFactory;
        trade.refund = RefundActionFactory;
    })(trade = action.trade || (action.trade = {}));
    var transfer;
    (function (transfer) {
        var give;
        (function (give) {
            // tslint:disable-next-line:no-shadowed-variable
            give.pecorinoAward = GivePecorinoAwardActionFactory;
        })(give = transfer.give || (transfer.give = {}));
        var print;
        (function (print) {
            print.ticket = PrintTicketActionFactory;
        })(print = transfer.print || (transfer.print = {}));
        /**
         * 返却アクション
         * returnはネームスペース名に使えないのでreturnAction
         */
        var returnAction;
        (function (returnAction) {
            // tslint:disable-next-line:no-shadowed-variable
            returnAction.order = ReturnOrderActionFactory;
            returnAction.pecorinoAward = ReturnPecorinoAwardActionFactory;
        })(returnAction = transfer.returnAction || (transfer.returnAction = {}));
        var send;
        (function (send) {
            var message;
            (function (message) {
                message.email = SendEmailMessageActionFactory;
            })(message = send.message || (send.message = {}));
            // tslint:disable-next-line:no-shadowed-variable
            send.order = SendOrderActionFactory;
        })(send = transfer.send || (transfer.send = {}));
    })(transfer = action.transfer || (action.transfer = {}));
    var consume;
    (function (consume) {
        var use;
        (function (use) {
            use.mvtk = UseMvtkActionFactory;
        })(use = consume.use || (consume.use = {}));
    })(consume = action.consume || (action.consume = {}));
})(action = exports.action || (exports.action = {}));
exports.accountType = accountType_1.default;
exports.encodingFormat = factory_1.encodingFormat;
var paymentMethod;
(function (paymentMethod) {
    var paymentCard;
    (function (paymentCard) {
        paymentCard.creditCard = CreditCardFactory;
        // export import movieTicket = MovieTicketFactory;
    })(paymentCard = paymentMethod.paymentCard || (paymentMethod.paymentCard = {}));
})(paymentMethod = exports.paymentMethod || (exports.paymentMethod = {}));
exports.clientUser = ClientUserFactory;
var creativeWork;
(function (creativeWork) {
    var message;
    (function (message) {
        message.email = EmailMessageFactory;
    })(message = creativeWork.message || (creativeWork.message = {}));
    creativeWork.movie = MovieCreativeWorkFactory;
})(creativeWork = exports.creativeWork || (exports.creativeWork = {}));
exports.creativeWorkType = creativeWorkType_1.default;
var event;
(function (event) {
    event.screeningEvent = ScreeningEventFactory;
    event.screeningEventSeries = ScreeningEventSeriesFactory;
})(event = exports.event || (exports.event = {}));
exports.eventStatusType = eventStatusType_1.EventStatusType;
exports.eventType = eventType_1.EventType;
var offer;
(function (offer) {
    offer.seatReservation = SeatReservationOfferFactory;
})(offer = exports.offer || (exports.offer = {}));
exports.order = OrderFactory;
exports.orderStatus = orderStatus_1.default;
var organization;
(function (organization) {
    organization.corporation = CorporationOrganizationFactory;
    organization.movieTheater = MovieTheaterOrganizationFactory;
})(organization = exports.organization || (exports.organization = {}));
var organizationIdentifier;
(function (organizationIdentifier) {
    organizationIdentifier.corporation = corporation_1.default;
})(organizationIdentifier = exports.organizationIdentifier || (exports.organizationIdentifier = {}));
exports.organizationType = organizationType_1.default;
exports.ownershipInfo = OwnershipInfoFactory;
exports.priceCurrency = priceCurrency_1.default;
var place;
(function (place) {
    place.movieTheater = MovieTheaterPlaceFactory;
})(place = exports.place || (exports.place = {}));
exports.paymentMethodType = paymentMethodType_1.default;
exports.paymentStatusType = paymentStatusType_1.default;
exports.person = PersonFactory;
exports.personType = personType_1.default;
exports.placeType = placeType_1.default;
exports.programMembership = ProgramMembershipFactory;
exports.propertyValue = PropertyValueFactory;
exports.quantitativeValue = QuantitativeValueFactory;
var reservation;
(function (reservation) {
    // tslint:disable-next-line:no-shadowed-variable
    reservation.event = EventReservationFactory;
})(reservation = exports.reservation || (exports.reservation = {}));
exports.reservationStatusType = reservationStatusType_1.ReservationStatusType;
exports.reservationType = reservationType_1.ReservationType;
var task;
(function (task) {
    task.cancelCreditCard = CancelCreditCardTaskFactory;
    task.cancelMvtk = CancelMvtkTaskFactory;
    task.cancelPecorinoAward = CancelPecorinoAwardTaskFactory;
    task.cancelSeatReservation = CancelSeatReservationTaskFactory;
    task.givePecorinoAward = GivePecorinoAwardTaskFactory;
    task.placeOrder = PlaceOrderTaskFactory;
    task.refundCreditCard = RefundCreditCardTaskFactory;
    task.registerProgramMembership = RegisterProgramMembershipTaskFactory;
    task.returnOrder = ReturnOrderTaskFactory;
    task.returnPecorinoAward = ReturnPecorinoAwardTaskFactory;
    task.sendEmailMessage = SendEmailMessageTaskFactory;
    task.sendOrder = SendOrderTaskFactory;
    task.payCreditCard = PayCreditCardTaskFactory;
    task.triggerWebhook = TriggerWebhookTaskFactory;
    task.unRegisterProgramMembership = UnRegisterProgramMembershipTaskFactory;
    task.useMvtk = UseMvtkTaskFactory;
})(task = exports.task || (exports.task = {}));
exports.sortType = sortType_1.default;
exports.taskExecutionResult = TaskExecutionResultFactory;
exports.taskName = taskName_1.default;
exports.taskStatus = taskStatus_1.default;
var transaction;
(function (transaction) {
    transaction.placeOrder = PlaceOrderTransactionFactory;
    transaction.returnOrder = ReturnOrderTransactionFactory;
})(transaction = exports.transaction || (exports.transaction = {}));
exports.transactionStatusType = transactionStatusType_1.default;
exports.transactionTasksExportationStatus = transactionTasksExportationStatus_1.default;
exports.transactionType = transactionType_1.default;
exports.unitCode = unitCode_1.UnitCode;

},{"./cognito":179,"./factory/accountType":180,"./factory/action/authorize/award/pecorino":183,"./factory/action/authorize/discount/mvtk":184,"./factory/action/authorize/offer/programMembership":185,"./factory/action/authorize/offer/seatReservation":186,"./factory/action/authorize/paymentMethod/account":187,"./factory/action/authorize/paymentMethod/any":188,"./factory/action/authorize/paymentMethod/creditCard":189,"./factory/action/consume/use/mvtk":190,"./factory/action/interact/register/programMembership":191,"./factory/action/interact/unRegister/programMembership":192,"./factory/action/trade/order":193,"./factory/action/trade/pay":194,"./factory/action/trade/refund":195,"./factory/action/transfer/give/pecorinoAward":196,"./factory/action/transfer/print/ticket":197,"./factory/action/transfer/return/order":198,"./factory/action/transfer/return/pecorinoAward":199,"./factory/action/transfer/send/message/email":200,"./factory/action/transfer/send/order":201,"./factory/actionStatusType":181,"./factory/actionType":182,"./factory/clientUser":202,"./factory/creativeWork/message/email":204,"./factory/creativeWork/movie":205,"./factory/creativeWorkType":203,"./factory/errorCode":206,"./factory/errors":207,"./factory/event/screeningEvent":211,"./factory/event/screeningEventSeries":212,"./factory/eventStatusType":209,"./factory/eventType":210,"./factory/offer/seatReservation":213,"./factory/order":214,"./factory/orderStatus":215,"./factory/organization/corporation":218,"./factory/organization/movieTheater":219,"./factory/organizationIdentifier/corporation":216,"./factory/organizationType":217,"./factory/ownershipInfo":220,"./factory/paymentMethod/paymentCard/creditCard":222,"./factory/paymentMethodType":221,"./factory/paymentStatusType":223,"./factory/person":224,"./factory/personType":225,"./factory/place/movieTheater":227,"./factory/placeType":226,"./factory/priceCurrency":228,"./factory/programMembership":229,"./factory/propertyValue":230,"./factory/quantitativeValue":231,"./factory/reservation/event":234,"./factory/reservationStatusType":232,"./factory/reservationType":233,"./factory/sortType":235,"./factory/task/cancelCreditCard":239,"./factory/task/cancelMvtk":240,"./factory/task/cancelPecorinoAward":241,"./factory/task/cancelSeatReservation":242,"./factory/task/givePecorinoAward":243,"./factory/task/payCreditCard":244,"./factory/task/placeOrder":245,"./factory/task/refundCreditCard":246,"./factory/task/registerProgramMembership":247,"./factory/task/returnOrder":248,"./factory/task/returnPecorinoAward":249,"./factory/task/sendEmailMessage":250,"./factory/task/sendOrder":251,"./factory/task/triggerWebhook":252,"./factory/task/unRegisterProgramMembership":253,"./factory/task/useMvtk":254,"./factory/taskExecutionResult":236,"./factory/taskName":237,"./factory/taskStatus":238,"./factory/transaction/placeOrder":258,"./factory/transaction/returnOrder":259,"./factory/transactionStatusType":255,"./factory/transactionTasksExportationStatus":256,"./factory/transactionType":257,"./factory/unitCode":260,"@cinerino/factory":389}],262:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],263:[function(require,module,exports){
arguments[4][4][0].apply(exports,arguments)
},{"dup":4}],264:[function(require,module,exports){
arguments[4][5][0].apply(exports,arguments)
},{"dup":5}],265:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],266:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],267:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],268:[function(require,module,exports){
arguments[4][9][0].apply(exports,arguments)
},{"dup":9}],269:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],270:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],271:[function(require,module,exports){
arguments[4][12][0].apply(exports,arguments)
},{"dup":12}],272:[function(require,module,exports){
arguments[4][13][0].apply(exports,arguments)
},{"../errorCode":271,"./chevre":275,"dup":13,"setprototypeof":391}],273:[function(require,module,exports){
arguments[4][14][0].apply(exports,arguments)
},{"../errorCode":271,"./chevre":275,"dup":14,"setprototypeof":391}],274:[function(require,module,exports){
arguments[4][15][0].apply(exports,arguments)
},{"../errorCode":271,"./chevre":275,"dup":15,"setprototypeof":391}],275:[function(require,module,exports){
arguments[4][16][0].apply(exports,arguments)
},{"dup":16}],276:[function(require,module,exports){
arguments[4][17][0].apply(exports,arguments)
},{"../errorCode":271,"./chevre":275,"dup":17,"setprototypeof":391}],277:[function(require,module,exports){
arguments[4][18][0].apply(exports,arguments)
},{"../errorCode":271,"./chevre":275,"dup":18,"setprototypeof":391}],278:[function(require,module,exports){
arguments[4][19][0].apply(exports,arguments)
},{"../errorCode":271,"./chevre":275,"dup":19,"setprototypeof":391}],279:[function(require,module,exports){
arguments[4][20][0].apply(exports,arguments)
},{"../errorCode":271,"./chevre":275,"dup":20,"setprototypeof":391}],280:[function(require,module,exports){
arguments[4][21][0].apply(exports,arguments)
},{"../errorCode":271,"./chevre":275,"dup":21,"setprototypeof":391}],281:[function(require,module,exports){
arguments[4][22][0].apply(exports,arguments)
},{"../errorCode":271,"./chevre":275,"dup":22,"setprototypeof":391}],282:[function(require,module,exports){
arguments[4][23][0].apply(exports,arguments)
},{"./error/alreadyInUse":272,"./error/argument":273,"./error/argumentNull":274,"./error/chevre":275,"./error/forbidden":276,"./error/notFound":277,"./error/notImplemented":278,"./error/rateLimitExceeded":279,"./error/serviceUnavailable":280,"./error/unauthorized":281,"dup":23}],283:[function(require,module,exports){
arguments[4][24][0].apply(exports,arguments)
},{"dup":24}],284:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * イベントタイプ
 */
var EventType;
(function (EventType) {
    /**
     * @deprecated Use ScreeningEvent
     */
    EventType["IndividualScreeningEvent"] = "IndividualScreeningEvent";
    EventType["ScreeningEvent"] = "ScreeningEvent";
    EventType["ScreeningEventSeries"] = "ScreeningEventSeries";
})(EventType || (EventType = {}));
exports.default = EventType;

},{}],285:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],286:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],287:[function(require,module,exports){
arguments[4][28][0].apply(exports,arguments)
},{"dup":28}],288:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],289:[function(require,module,exports){
arguments[4][30][0].apply(exports,arguments)
},{"dup":30}],290:[function(require,module,exports){
arguments[4][31][0].apply(exports,arguments)
},{"dup":31}],291:[function(require,module,exports){
arguments[4][32][0].apply(exports,arguments)
},{"dup":32}],292:[function(require,module,exports){
arguments[4][33][0].apply(exports,arguments)
},{"dup":33}],293:[function(require,module,exports){
arguments[4][34][0].apply(exports,arguments)
},{"dup":34}],294:[function(require,module,exports){
arguments[4][35][0].apply(exports,arguments)
},{"dup":35}],295:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],296:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],297:[function(require,module,exports){
arguments[4][38][0].apply(exports,arguments)
},{"dup":38}],298:[function(require,module,exports){
arguments[4][39][0].apply(exports,arguments)
},{"dup":39}],299:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],300:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],301:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],302:[function(require,module,exports){
arguments[4][43][0].apply(exports,arguments)
},{"dup":43}],303:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],304:[function(require,module,exports){
arguments[4][45][0].apply(exports,arguments)
},{"dup":45}],305:[function(require,module,exports){
arguments[4][46][0].apply(exports,arguments)
},{"dup":46}],306:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],307:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],308:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],309:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],310:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],311:[function(require,module,exports){
arguments[4][52][0].apply(exports,arguments)
},{"dup":52}],312:[function(require,module,exports){
arguments[4][53][0].apply(exports,arguments)
},{"dup":53}],313:[function(require,module,exports){
arguments[4][54][0].apply(exports,arguments)
},{"dup":54}],314:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],315:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],316:[function(require,module,exports){
arguments[4][57][0].apply(exports,arguments)
},{"dup":57}],317:[function(require,module,exports){
arguments[4][58][0].apply(exports,arguments)
},{"dup":58}],318:[function(require,module,exports){
arguments[4][59][0].apply(exports,arguments)
},{"dup":59}],319:[function(require,module,exports){
arguments[4][60][0].apply(exports,arguments)
},{"./factory/accountTitle":262,"./factory/action/cancel/reservation":265,"./factory/action/reserve":266,"./factory/actionStatusType":263,"./factory/actionType":264,"./factory/clientUser":267,"./factory/creativeWork/message/email":269,"./factory/creativeWork/movie":270,"./factory/creativeWorkType":268,"./factory/errorCode":271,"./factory/errors":282,"./factory/event/screeningEvent":285,"./factory/event/screeningEventSeries":286,"./factory/eventStatusType":283,"./factory/eventType":284,"./factory/itemAvailability":287,"./factory/language":288,"./factory/organizationType":289,"./factory/paymentMethodType":290,"./factory/place/movieTheater":292,"./factory/placeType":291,"./factory/priceCurrency":293,"./factory/priceSpecificationType":294,"./factory/propertyValue":295,"./factory/quantitativeValue":296,"./factory/reservation/event":299,"./factory/reservationStatusType":297,"./factory/reservationType":298,"./factory/serviceType":300,"./factory/sortType":301,"./factory/soundFormatType":302,"./factory/task/aggregateScreeningEvent":306,"./factory/task/cancelPendingReservation":307,"./factory/task/cancelReservation":308,"./factory/task/reserve":309,"./factory/taskExecutionResult":303,"./factory/taskName":304,"./factory/taskStatus":305,"./factory/ticketType":310,"./factory/transaction/cancelReservation":314,"./factory/transaction/reserve":315,"./factory/transactionStatusType":311,"./factory/transactionTasksExportationStatus":312,"./factory/transactionType":313,"./factory/unitCode":316,"./factory/url":317,"./factory/videoFormatType":318,"dup":60}],320:[function(require,module,exports){
arguments[4][92][0].apply(exports,arguments)
},{"@chevre/factory":319,"dup":92}],321:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],322:[function(require,module,exports){
arguments[4][94][0].apply(exports,arguments)
},{"dup":94}],323:[function(require,module,exports){
arguments[4][4][0].apply(exports,arguments)
},{"dup":4}],324:[function(require,module,exports){
arguments[4][96][0].apply(exports,arguments)
},{"dup":96}],325:[function(require,module,exports){
arguments[4][97][0].apply(exports,arguments)
},{"dup":97}],326:[function(require,module,exports){
arguments[4][98][0].apply(exports,arguments)
},{"dup":98}],327:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],328:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],329:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],330:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],331:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],332:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],333:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],334:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],335:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],336:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],337:[function(require,module,exports){
arguments[4][109][0].apply(exports,arguments)
},{"../../authorize/award/point":325,"dup":109}],338:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],339:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],340:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],341:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],342:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],343:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],344:[function(require,module,exports){
arguments[4][9][0].apply(exports,arguments)
},{"dup":9}],345:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],346:[function(require,module,exports){
arguments[4][118][0].apply(exports,arguments)
},{"dup":118}],347:[function(require,module,exports){
arguments[4][12][0].apply(exports,arguments)
},{"dup":12}],348:[function(require,module,exports){
arguments[4][120][0].apply(exports,arguments)
},{"../errorCode":347,"./common":351,"dup":120,"setprototypeof":391}],349:[function(require,module,exports){
arguments[4][121][0].apply(exports,arguments)
},{"../errorCode":347,"./common":351,"dup":121,"setprototypeof":391}],350:[function(require,module,exports){
arguments[4][122][0].apply(exports,arguments)
},{"../errorCode":347,"./common":351,"dup":122,"setprototypeof":391}],351:[function(require,module,exports){
arguments[4][123][0].apply(exports,arguments)
},{"dup":123}],352:[function(require,module,exports){
arguments[4][124][0].apply(exports,arguments)
},{"../errorCode":347,"./common":351,"dup":124,"setprototypeof":391}],353:[function(require,module,exports){
arguments[4][125][0].apply(exports,arguments)
},{"../errorCode":347,"./common":351,"dup":125,"setprototypeof":391}],354:[function(require,module,exports){
arguments[4][126][0].apply(exports,arguments)
},{"../errorCode":347,"./common":351,"dup":126,"setprototypeof":391}],355:[function(require,module,exports){
arguments[4][127][0].apply(exports,arguments)
},{"../errorCode":347,"./common":351,"dup":127,"setprototypeof":391}],356:[function(require,module,exports){
arguments[4][128][0].apply(exports,arguments)
},{"../errorCode":347,"./common":351,"dup":128,"setprototypeof":391}],357:[function(require,module,exports){
arguments[4][129][0].apply(exports,arguments)
},{"../errorCode":347,"./common":351,"dup":129,"setprototypeof":391}],358:[function(require,module,exports){
arguments[4][130][0].apply(exports,arguments)
},{"./error/alreadyInUse":348,"./error/argument":349,"./error/argumentNull":350,"./error/common":351,"./error/forbidden":352,"./error/notFound":353,"./error/notImplemented":354,"./error/rateLimitExceeded":355,"./error/serviceUnavailable":356,"./error/unauthorized":357,"dup":130}],359:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],360:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],361:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],362:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],363:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],364:[function(require,module,exports){
arguments[4][136][0].apply(exports,arguments)
},{"dup":136}],365:[function(require,module,exports){
arguments[4][137][0].apply(exports,arguments)
},{"dup":137}],366:[function(require,module,exports){
arguments[4][138][0].apply(exports,arguments)
},{"dup":138}],367:[function(require,module,exports){
arguments[4][139][0].apply(exports,arguments)
},{"../chevre":320,"dup":139}],368:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],369:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],370:[function(require,module,exports){
arguments[4][142][0].apply(exports,arguments)
},{"dup":142}],371:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],372:[function(require,module,exports){
arguments[4][144][0].apply(exports,arguments)
},{"dup":144}],373:[function(require,module,exports){
arguments[4][145][0].apply(exports,arguments)
},{"dup":145}],374:[function(require,module,exports){
arguments[4][34][0].apply(exports,arguments)
},{"dup":34}],375:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],376:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],377:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],378:[function(require,module,exports){
arguments[4][150][0].apply(exports,arguments)
},{"dup":150}],379:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],380:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],381:[function(require,module,exports){
arguments[4][153][0].apply(exports,arguments)
},{"dup":153}],382:[function(require,module,exports){
arguments[4][154][0].apply(exports,arguments)
},{"dup":154}],383:[function(require,module,exports){
arguments[4][52][0].apply(exports,arguments)
},{"dup":52}],384:[function(require,module,exports){
arguments[4][53][0].apply(exports,arguments)
},{"dup":53}],385:[function(require,module,exports){
arguments[4][157][0].apply(exports,arguments)
},{"dup":157}],386:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],387:[function(require,module,exports){
arguments[4][159][0].apply(exports,arguments)
},{"dup":159}],388:[function(require,module,exports){
arguments[4][57][0].apply(exports,arguments)
},{"dup":57}],389:[function(require,module,exports){
arguments[4][161][0].apply(exports,arguments)
},{"./chevre":320,"./cognito":321,"./factory/accountType":322,"./factory/action/authorize/award/point":325,"./factory/action/authorize/offer/seatReservation":326,"./factory/action/authorize/paymentMethod/account":327,"./factory/action/authorize/paymentMethod/any":328,"./factory/action/authorize/paymentMethod/creditCard":329,"./factory/action/authorize/paymentMethod/movieTicket":330,"./factory/action/check/paymentMethod/movieTicket":331,"./factory/action/check/token":332,"./factory/action/interact/confirm/reservation":333,"./factory/action/trade/order":334,"./factory/action/trade/pay":335,"./factory/action/trade/refund":336,"./factory/action/transfer/give/pointAward":337,"./factory/action/transfer/print/ticket":338,"./factory/action/transfer/return/order":339,"./factory/action/transfer/return/pointAward":340,"./factory/action/transfer/send/message/email":341,"./factory/action/transfer/send/order":342,"./factory/actionStatusType":323,"./factory/actionType":324,"./factory/clientUser":343,"./factory/creativeWork/message/email":345,"./factory/creativeWorkType":344,"./factory/encodingFormat":346,"./factory/errorCode":347,"./factory/errors":358,"./factory/event/screeningEvent":359,"./factory/event/screeningEventSeries":360,"./factory/invoice":361,"./factory/monetaryAmount":362,"./factory/order":363,"./factory/orderStatus":364,"./factory/organizationType":365,"./factory/ownershipInfo":366,"./factory/paymentMethod/paymentCard/creditCard":368,"./factory/paymentMethod/paymentCard/movieTicket":369,"./factory/paymentMethodType":367,"./factory/paymentStatusType":370,"./factory/person":371,"./factory/personType":372,"./factory/placeType":373,"./factory/priceCurrency":374,"./factory/programMembership":375,"./factory/propertyValue":376,"./factory/quantitativeValue":377,"./factory/service/webAPI":378,"./factory/sortType":379,"./factory/taskExecutionResult":380,"./factory/taskName":381,"./factory/taskStatus":382,"./factory/transaction/placeOrder":386,"./factory/transaction/returnOrder":387,"./factory/transactionStatusType":383,"./factory/transactionTasksExportationStatus":384,"./factory/transactionType":385,"./factory/unitCode":388,"@pecorino/factory":427,"@waiter/factory":441,"dup":161}],390:[function(require,module,exports){
//! moment.js

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

    var hookCallback;

    function hooks () {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback (callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return input != null && Object.prototype.toString.call(input) === '[object Object]';
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return (Object.getOwnPropertyNames(obj).length === 0);
        } else {
            var k;
            for (k in obj) {
                if (obj.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
    }

    function isDate(input) {
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
    }

    function map(arr, fn) {
        var res = [], i;
        for (i = 0; i < arr.length; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty           : false,
            unusedTokens    : [],
            unusedInput     : [],
            overflow        : -2,
            charsLeftOver   : 0,
            nullInput       : false,
            invalidMonth    : null,
            invalidFormat   : false,
            userInvalidated : false,
            iso             : false,
            parsedDateParts : [],
            meridiem        : null,
            rfc2822         : false,
            weekdayMismatch : false
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this);
            var len = t.length >>> 0;

            for (var i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m);
            var parsedParts = some.call(flags.parsedDateParts, function (i) {
                return i != null;
            });
            var isNowValid = !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid = isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            }
            else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid (flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        }
        else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = hooks.momentProperties = [];

    function copyConfig(to, from) {
        var i, prop, val;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentProperties.length > 0) {
            for (i = 0; i < momentProperties.length; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    var updateInProgress = false;

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment (obj) {
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
    }

    function absFloor (number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function warn(msg) {
        if (hooks.suppressDeprecationWarnings === false &&
                (typeof console !==  'undefined') && console.warn) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [];
                var arg;
                for (var i = 0; i < arguments.length; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (var key in arguments[0]) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
    }

    function set (config) {
        var prop, i;
        for (i in config) {
            prop = config[i];
            if (isFunction(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' + (/\d{1,2}/).source);
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig), prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (hasOwnProp(parentConfig, prop) &&
                    !hasOwnProp(childConfig, prop) &&
                    isObject(parentConfig[prop])) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i, res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay : '[Today at] LT',
        nextDay : '[Tomorrow at] LT',
        nextWeek : 'dddd [at] LT',
        lastDay : '[Yesterday at] LT',
        lastWeek : '[Last] dddd [at] LT',
        sameElse : 'L'
    };

    function calendar (key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    var defaultLongDateFormat = {
        LTS  : 'h:mm:ss A',
        LT   : 'h:mm A',
        L    : 'MM/DD/YYYY',
        LL   : 'MMMM D, YYYY',
        LLL  : 'MMMM D, YYYY h:mm A',
        LLLL : 'dddd, MMMM D, YYYY h:mm A'
    };

    function longDateFormat (key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate () {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d';
    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal (number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future : 'in %s',
        past   : '%s ago',
        s  : 'a few seconds',
        ss : '%d seconds',
        m  : 'a minute',
        mm : '%d minutes',
        h  : 'an hour',
        hh : '%d hours',
        d  : 'a day',
        dd : '%d days',
        M  : 'a month',
        MM : '%d months',
        y  : 'a year',
        yy : '%d years'
    };

    function relativeTime (number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return (isFunction(output)) ?
            output(number, withoutSuffix, string, isFuture) :
            output.replace(/%d/i, number);
    }

    function pastFuture (diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias (unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [];
        for (var u in unitsObj) {
            units.push({unit: u, priority: priorities[u]});
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
    }

    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

    var formatFunctions = {};

    var formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken (token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(func.apply(this, arguments), token);
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '', i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var match1         = /\d/;            //       0 - 9
    var match2         = /\d\d/;          //      00 - 99
    var match3         = /\d{3}/;         //     000 - 999
    var match4         = /\d{4}/;         //    0000 - 9999
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
    var match1to2      = /\d\d?/;         //       0 - 99
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
    var match1to3      = /\d{1,3}/;       //       0 - 999
    var match1to4      = /\d{1,4}/;       //       0 - 9999
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

    var matchUnsigned  = /\d+/;           //       0 - inf
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    var regexes = {};

    function addRegexToken (token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
            return (isStrict && strictRegex) ? strictRegex : regex;
        };
    }

    function getParseRegexForToken (token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        }));
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken (token, callback) {
        var i, func = callback;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        for (i = 0; i < token.length; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken (token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0;
    var MONTH = 1;
    var DATE = 2;
    var HOUR = 3;
    var MINUTE = 4;
    var SECOND = 5;
    var MILLISECOND = 6;
    var WEEK = 7;
    var WEEKDAY = 8;

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? '' + y : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY',   4],       0, 'year');
    addFormatToken(0, ['YYYYY',  5],       0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y',      matchSigned);
    addRegexToken('YY',     match1to2, match2);
    addRegexToken('YYYY',   match1to4, match4);
    addRegexToken('YYYYY',  match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear () {
        return isLeapYear(this.year());
    }

    function makeGetSet (unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get (mom, unit) {
        return mom.isValid() ?
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
    }

    function set$1 (mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
            }
            else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet (units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }


    function stringSet (units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units);
            for (var i = 0; i < prioritized.length; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M',    match1to2);
    addRegexToken('MM',   match1to2, match2);
    addRegexToken('MMM',  function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {
        if (!m) {
            return isArray(this._months) ? this._months :
                this._months['standalone'];
        }
        return isArray(this._months) ? this._months[m.month()] :
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }

    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
    function localeMonthsShort (m, format) {
        if (!m) {
            return isArray(this._monthsShort) ? this._monthsShort :
                this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i, ii, mom, llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse (monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
                return i;
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth (mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth (value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth () {
        return daysInMonth(this.year(), this.month());
    }

    var defaultMonthsShortRegex = matchWord;
    function monthsShortRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict ?
                this._monthsShortStrictRegex : this._monthsShortRegex;
        }
    }

    var defaultMonthsRegex = matchWord;
    function monthsRegex (isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict ?
                this._monthsStrictRegex : this._monthsRegex;
        }
    }

    function computeMonthsParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    }

    function createDate (y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate (y) {
        var date;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            var args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear, resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek, resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w',  match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W',  match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
    });

    // HELPERS

    // LOCALES

    function localeWeek (mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow : 0, // Sunday is the first day of the week.
        doy : 6  // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek () {
        return this._week.dow;
    }

    function localeFirstDayOfYear () {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek (input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek (input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d',    match1to2);
    addRegexToken('e',    match1to2);
    addRegexToken('E',    match1to2);
    addRegexToken('dd',   function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd',   function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd',   function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays (ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
    function localeWeekdays (m, format) {
        var weekdays = isArray(this._weekdays) ? this._weekdays :
            this._weekdays[(m && m !== true && this._weekdays.isFormat.test(format)) ? 'format' : 'standalone'];
        return (m === true) ? shiftWeekdays(weekdays, this._week.dow)
            : (m) ? weekdays[m.day()] : weekdays;
    }

    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
    function localeWeekdaysShort (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
    }

    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
    function localeWeekdaysMin (m) {
        return (m === true) ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse (weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek (input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    var defaultWeekdaysRegex = matchWord;
    function weekdaysRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }

    var defaultWeekdaysShortRegex = matchWord;
    function weekdaysShortRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }

    var defaultWeekdaysMinRegex = matchWord;
    function weekdaysMinRegex (isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }


    function computeWeekdaysParse () {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
            i, mom, minp, shortp, longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = this.weekdaysMin(mom, '');
            shortp = this.weekdaysShort(mom, '');
            longp = this.weekdays(mom, '');
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2);
    });

    function meridiem (token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem (isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a',  matchMeridiem);
    addRegexToken('A',  matchMeridiem);
    addRegexToken('H',  match1to2);
    addRegexToken('h',  match1to2);
    addRegexToken('k',  match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4;
        var pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return ((input + '').toLowerCase().charAt(0) === 'p');
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
    function localeMeridiem (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }


    // MOMENTS

    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    var getSetHour = makeGetSet('Hours', true);

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse
    };

    // internal storage for locale config files
    var locales = {};
    var localeFamilies = {};
    var globalLocale;

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0, j, next, locale, split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function loadLocale(name) {
        var oldLocale = null;
        // TODO: Find a better way to register and load all the locales in Node
        if (!locales[name] && (typeof module !== 'undefined') &&
                module && module.exports) {
            try {
                oldLocale = globalLocale._abbr;
                var aliasedRequire = require;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {}
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale (key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            }
            else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            }
            else {
                if ((typeof console !==  'undefined') && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale (name, config) {
        if (config !== null) {
            var locale, parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple('defineLocaleOverride',
                        'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);


            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale, tmpLocale, parentConfig = baseConfig;
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = mergeConfigs(parentConfig, config);
            locale = new Locale(config);
            locale.parentLocale = locales[name];
            locales[name] = locale;

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale (key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow (m) {
        var overflow;
        var a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray (config) {
        var i, date, input = [], currentDate, expectedWeekday, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (config._a[HOUR] === 24 &&
                config._a[MINUTE] === 0 &&
                config._a[SECOND] === 0 &&
                config._a[MILLISECOND] === 0) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            var curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

    var isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        // YYYYMM is NOT allowed by the standard
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/]
    ];

    // iso time formats and regexes
    var isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/]
    ];

    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

    // date from iso format
    function configFromISO(config) {
        var i, l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime, dateFormat, timeFormat, tzFormat;

        if (match) {
            getParsingFlags(config).iso = true;

            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimes.length; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10)
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    var obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
    };

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10);
            var m = hm % 100, h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i));
        if (match) {
            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);

        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        // Final attempt, use Input Fallback
        hooks.createFromInputFallback(config);
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            // console.log('token', token, 'parsedInput', parsedInput,
            //         'regex', getParseRegexForToken(token, config));
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                }
                else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

        configFromArray(config);
        checkOverflow(config);
    }


    function meridiemFixWrap (locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i);
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);
        });

        configFromArray(config);
    }

    function createFromConfig (config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig (config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        }  else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC (input, format, locale, strict, isUTC) {
        var c = {};

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if ((isObject(input) && isObjectEmpty(input)) ||
                (isArray(input) && input.length === 0)) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal (input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    var prototypeMax = deprecate(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = createLocal.apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return createInvalid();
            }
        }
    );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +(new Date());
    };

    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

    function isDurationValid(m) {
        for (var key in m) {
            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
                return false;
            }
        }

        var unitHasDecimal = false;
        for (var i = 0; i < ordering.length; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration (duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration (obj) {
        return obj instanceof Duration;
    }

    function absRound (number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // FORMATTING

    function offset (token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset();
            var sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z',  matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher);

        if (matches === null) {
            return null;
        }

        var chunk   = matches[matches.length - 1] || [];
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        var minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ?
          0 :
          parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset (m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset (input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone (input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset () {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            }
            else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset (input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime () {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted () {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {};

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted = this.isValid() &&
                compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal () {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset () {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc () {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms : input._milliseconds,
                d  : input._days,
                M  : input._months
            };
        } else if (isNumber(input)) {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y  : 0,
                d  : toInt(match[DATE])                         * sign,
                h  : toInt(match[HOUR])                         * sign,
                m  : toInt(match[MINUTE])                       * sign,
                s  : toInt(match[SECOND])                       * sign,
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };
        } else if (!!(match = isoRegex.exec(input))) {
            sign = (match[1] === '-') ? -1 : 1;
            duration = {
                y : parseIso(match[2], sign),
                M : parseIso(match[3], sign),
                w : parseIso(match[4], sign),
                d : parseIso(match[5], sign),
                h : parseIso(match[6], sign),
                m : parseIso(match[7], sign),
                s : parseIso(match[8], sign)
            };
        } else if (duration == null) {// checks for null or undefined
            duration = {};
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso (inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months = other.month() - base.month() +
            (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return {milliseconds: 0, months: 0};
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
                tmp = val; val = period; period = tmp;
            }

            val = typeof val === 'string' ? +val : val;
            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract (mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add      = createAdder(1, 'add');
    var subtract = createAdder(-1, 'subtract');

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
    }

    function calendar$1 (time, formats) {
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse';

        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
    }

    function clone () {
        return new Moment(this);
    }

    function isAfter (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween (from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
    }

    function isSame (input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }
    }

    function isSameOrAfter (input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore (input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff (input, units, asFloat) {
        var that,
            zoneDelta,
            output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year': output = monthDiff(this, that) / 12; break;
            case 'month': output = monthDiff(this, that); break;
            case 'quarter': output = monthDiff(this, that) / 3; break;
            case 'second': output = (this - that) / 1e3; break; // 1000
            case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
            case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
            case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
            case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default: output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff (a, b) {
        // difference in months
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2, adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString () {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true;
        var m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect () {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment';
        var zone = '';
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        var prefix = '[' + func + '("]';
        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
        var suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format (inputString) {
        if (!inputString) {
            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow (withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to (time, withoutSuffix) {
        if (this.isValid() &&
                ((isMoment(time) && time.isValid()) ||
                 createLocal(time).isValid())) {
            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow (withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale (key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData () {
        return this._locale;
    }

    var MS_PER_SECOND = 1000;
    var MS_PER_MINUTE = 60 * MS_PER_SECOND;
    var MS_PER_HOUR = 60 * MS_PER_MINUTE;
    var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return (dividend % divisor + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf (units) {
        var time;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case 'isoWeek':
                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf () {
        return this._d.valueOf() - ((this._offset || 0) * 60000);
    }

    function unix () {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate () {
        return new Date(this.valueOf());
    }

    function toArray () {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
    }

    function toObject () {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        };
    }

    function toJSON () {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2 () {
        return isValid(this);
    }

    function parsingFlags () {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt () {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        };
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken (token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg',     'weekYear');
    addWeekYearFormatToken('ggggg',    'weekYear');
    addWeekYearFormatToken('GGGG',  'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);


    // PARSING

    addRegexToken('G',      matchSigned);
    addRegexToken('g',      matchSigned);
    addRegexToken('GG',     match1to2, match2);
    addRegexToken('gg',     match1to2, match2);
    addRegexToken('GGGG',   match1to4, match4);
    addRegexToken('gggg',   match1to4, match4);
    addRegexToken('GGGGG',  match1to6, match6);
    addRegexToken('ggggg',  match1to6, match6);

    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
    });

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input,
                this.week(),
                this.weekday(),
                this.localeData()._week.dow,
                this.localeData()._week.doy);
    }

    function getSetISOWeekYear (input) {
        return getSetWeekYearHelper.call(this,
                input, this.isoWeek(), this.isoWeekday(), 1, 4);
    }

    function getISOWeeksInYear () {
        return weeksInYear(this.year(), 1, 4);
    }

    function getWeeksInYear () {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter (input) {
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D',  match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict ?
          (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
          locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD',  match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear (input) {
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m',  match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s',  match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });


    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S',    match1to3, match1);
    addRegexToken('SS',   match1to3, match2);
    addRegexToken('SSS',  match1to3, match3);

    var token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS

    var getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z',  0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr () {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName () {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add               = add;
    proto.calendar          = calendar$1;
    proto.clone             = clone;
    proto.diff              = diff;
    proto.endOf             = endOf;
    proto.format            = format;
    proto.from              = from;
    proto.fromNow           = fromNow;
    proto.to                = to;
    proto.toNow             = toNow;
    proto.get               = stringGet;
    proto.invalidAt         = invalidAt;
    proto.isAfter           = isAfter;
    proto.isBefore          = isBefore;
    proto.isBetween         = isBetween;
    proto.isSame            = isSame;
    proto.isSameOrAfter     = isSameOrAfter;
    proto.isSameOrBefore    = isSameOrBefore;
    proto.isValid           = isValid$2;
    proto.lang              = lang;
    proto.locale            = locale;
    proto.localeData        = localeData;
    proto.max               = prototypeMax;
    proto.min               = prototypeMin;
    proto.parsingFlags      = parsingFlags;
    proto.set               = stringSet;
    proto.startOf           = startOf;
    proto.subtract          = subtract;
    proto.toArray           = toArray;
    proto.toObject          = toObject;
    proto.toDate            = toDate;
    proto.toISOString       = toISOString;
    proto.inspect           = inspect;
    proto.toJSON            = toJSON;
    proto.toString          = toString;
    proto.unix              = unix;
    proto.valueOf           = valueOf;
    proto.creationData      = creationData;
    proto.year       = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear    = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month       = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week           = proto.weeks        = getSetWeek;
    proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
    proto.weeksInYear    = getWeeksInYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.date       = getSetDayOfMonth;
    proto.day        = proto.days             = getSetDayOfWeek;
    proto.weekday    = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear  = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset            = getSetOffset;
    proto.utc                  = setOffsetToUTC;
    proto.local                = setOffsetToLocal;
    proto.parseZone            = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST                = isDaylightSavingTime;
    proto.isLocal              = isLocal;
    proto.isUtcOffset          = isUtcOffset;
    proto.isUtc                = isUtc;
    proto.isUTC                = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
    proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
    proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

    function createUnix (input) {
        return createLocal(input * 1000);
    }

    function createInZone () {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat (string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar        = calendar;
    proto$1.longDateFormat  = longDateFormat;
    proto$1.invalidDate     = invalidDate;
    proto$1.ordinal         = ordinal;
    proto$1.preparse        = preParsePostFormat;
    proto$1.postformat      = preParsePostFormat;
    proto$1.relativeTime    = relativeTime;
    proto$1.pastFuture      = pastFuture;
    proto$1.set             = set;

    proto$1.months            =        localeMonths;
    proto$1.monthsShort       =        localeMonthsShort;
    proto$1.monthsParse       =        localeMonthsParse;
    proto$1.monthsRegex       = monthsRegex;
    proto$1.monthsShortRegex  = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays       =        localeWeekdays;
    proto$1.weekdaysMin    =        localeWeekdaysMin;
    proto$1.weekdaysShort  =        localeWeekdaysShort;
    proto$1.weekdaysParse  =        localeWeekdaysParse;

    proto$1.weekdaysRegex       =        weekdaysRegex;
    proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
    proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1 (format, index, field, setter) {
        var locale = getLocale();
        var utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl (format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i;
        var out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl (localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0;

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        var i;
        var out = [];
        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths (format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort (format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin (localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    // Side effect imports

    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

    var mathAbs = Math.abs;

    function abs () {
        var data           = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days         = mathAbs(this._days);
        this._months       = mathAbs(this._months);

        data.milliseconds  = mathAbs(data.milliseconds);
        data.seconds       = mathAbs(data.seconds);
        data.minutes       = mathAbs(data.minutes);
        data.hours         = mathAbs(data.hours);
        data.months        = mathAbs(data.months);
        data.years         = mathAbs(data.years);

        return this;
    }

    function addSubtract$1 (duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days         += direction * other._days;
        duration._months       += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1 (input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1 (input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil (number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble () {
        var milliseconds = this._milliseconds;
        var days         = this._days;
        var months       = this._months;
        var data         = this._data;
        var seconds, minutes, hours, years, monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0))) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds           = absFloor(milliseconds / 1000);
        data.seconds      = seconds % 60;

        minutes           = absFloor(seconds / 60);
        data.minutes      = minutes % 60;

        hours             = absFloor(minutes / 60);
        data.hours        = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days   = days;
        data.months = months;
        data.years  = years;

        return this;
    }

    function daysToMonths (days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return days * 4800 / 146097;
    }

    function monthsToDays (months) {
        // the reverse of daysToMonths
        return months * 146097 / 4800;
    }

    function as (units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days;
        var months;
        var milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':   return months;
                case 'quarter': return months / 3;
                case 'year':    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week'   : return days / 7     + milliseconds / 6048e5;
                case 'day'    : return days         + milliseconds / 864e5;
                case 'hour'   : return days * 24    + milliseconds / 36e5;
                case 'minute' : return days * 1440  + milliseconds / 6e4;
                case 'second' : return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
                default: throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1 () {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs (alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms');
    var asSeconds      = makeAs('s');
    var asMinutes      = makeAs('m');
    var asHours        = makeAs('h');
    var asDays         = makeAs('d');
    var asWeeks        = makeAs('w');
    var asMonths       = makeAs('M');
    var asQuarters     = makeAs('Q');
    var asYears        = makeAs('y');

    function clone$1 () {
        return createDuration(this);
    }

    function get$2 (units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds');
    var seconds      = makeGetter('seconds');
    var minutes      = makeGetter('minutes');
    var hours        = makeGetter('hours');
    var days         = makeGetter('days');
    var months       = makeGetter('months');
    var years        = makeGetter('years');

    function weeks () {
        return absFloor(this.days() / 7);
    }

    var round = Math.round;
    var thresholds = {
        ss: 44,         // a few seconds to seconds
        s : 45,         // seconds to minute
        m : 45,         // minutes to hour
        h : 22,         // hours to day
        d : 26,         // days to month
        M : 11          // months to year
    };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
        var duration = createDuration(posNegDuration).abs();
        var seconds  = round(duration.as('s'));
        var minutes  = round(duration.as('m'));
        var hours    = round(duration.as('h'));
        var days     = round(duration.as('d'));
        var months   = round(duration.as('M'));
        var years    = round(duration.as('y'));

        var a = seconds <= thresholds.ss && ['s', seconds]  ||
                seconds < thresholds.s   && ['ss', seconds] ||
                minutes <= 1             && ['m']           ||
                minutes < thresholds.m   && ['mm', minutes] ||
                hours   <= 1             && ['h']           ||
                hours   < thresholds.h   && ['hh', hours]   ||
                days    <= 1             && ['d']           ||
                days    < thresholds.d   && ['dd', days]    ||
                months  <= 1             && ['M']           ||
                months  < thresholds.M   && ['MM', months]  ||
                years   <= 1             && ['y']           || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding (roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof(roundingFunction) === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold (threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize (withSuffix) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var locale = this.localeData();
        var output = relativeTime$1(this, !withSuffix, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return ((x > 0) - (x < 0)) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000;
        var days         = abs$1(this._days);
        var months       = abs$1(this._months);
        var minutes, hours, years;

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes           = absFloor(seconds / 60);
        hours             = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years  = absFloor(months / 12);
        months %= 12;


        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        var Y = years;
        var M = months;
        var D = days;
        var h = hours;
        var m = minutes;
        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
        var total = this.asSeconds();

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        var totalSign = total < 0 ? '-' : '';
        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return totalSign + 'P' +
            (Y ? ymSign + Y + 'Y' : '') +
            (M ? ymSign + M + 'M' : '') +
            (D ? daysSign + D + 'D' : '') +
            ((h || m || s) ? 'T' : '') +
            (h ? hmsSign + h + 'H' : '') +
            (m ? hmsSign + m + 'M' : '') +
            (s ? hmsSign + s + 'S' : '');
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid        = isValid$1;
    proto$2.abs            = abs;
    proto$2.add            = add$1;
    proto$2.subtract       = subtract$1;
    proto$2.as             = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds      = asSeconds;
    proto$2.asMinutes      = asMinutes;
    proto$2.asHours        = asHours;
    proto$2.asDays         = asDays;
    proto$2.asWeeks        = asWeeks;
    proto$2.asMonths       = asMonths;
    proto$2.asQuarters     = asQuarters;
    proto$2.asYears        = asYears;
    proto$2.valueOf        = valueOf$1;
    proto$2._bubble        = bubble;
    proto$2.clone          = clone$1;
    proto$2.get            = get$2;
    proto$2.milliseconds   = milliseconds;
    proto$2.seconds        = seconds;
    proto$2.minutes        = minutes;
    proto$2.hours          = hours;
    proto$2.days           = days;
    proto$2.weeks          = weeks;
    proto$2.months         = months;
    proto$2.years          = years;
    proto$2.humanize       = humanize;
    proto$2.toISOString    = toISOString$1;
    proto$2.toString       = toISOString$1;
    proto$2.toJSON         = toISOString$1;
    proto$2.locale         = locale;
    proto$2.localeData     = localeData;

    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
    proto$2.lang = lang;

    // Side effect imports

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input, 10) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    // Side effect imports


    hooks.version = '2.24.0';

    setHookCallback(createLocal);

    hooks.fn                    = proto;
    hooks.min                   = min;
    hooks.max                   = max;
    hooks.now                   = now;
    hooks.utc                   = createUTC;
    hooks.unix                  = createUnix;
    hooks.months                = listMonths;
    hooks.isDate                = isDate;
    hooks.locale                = getSetGlobalLocale;
    hooks.invalid               = createInvalid;
    hooks.duration              = createDuration;
    hooks.isMoment              = isMoment;
    hooks.weekdays              = listWeekdays;
    hooks.parseZone             = createInZone;
    hooks.localeData            = getLocale;
    hooks.isDuration            = isDuration;
    hooks.monthsShort           = listMonthsShort;
    hooks.weekdaysMin           = listWeekdaysMin;
    hooks.defineLocale          = defineLocale;
    hooks.updateLocale          = updateLocale;
    hooks.locales               = listLocales;
    hooks.weekdaysShort         = listWeekdaysShort;
    hooks.normalizeUnits        = normalizeUnits;
    hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat        = getCalendarFormat;
    hooks.prototype             = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD',                             // <input type="date" />
        TIME: 'HH:mm',                                  // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW',                             // <input type="week" />
        MONTH: 'YYYY-MM'                                // <input type="month" />
    };

    return hooks;

})));

},{}],391:[function(require,module,exports){
arguments[4][162][0].apply(exports,arguments)
},{"dup":162}],392:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 口座タイプ
 */
var TypeOf;
(function (TypeOf) {
    /**
     * 普通口座タイプ
     */
    TypeOf["Account"] = "Account";
})(TypeOf = exports.TypeOf || (exports.TypeOf = {}));

},{}],393:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 口座ステータスタイプ
 */
var AccountStatusType;
(function (AccountStatusType) {
    /**
     * 開設済
     */
    AccountStatusType["Opened"] = "Opened";
    /**
     * 解約済
     */
    AccountStatusType["Closed"] = "Closed";
})(AccountStatusType || (AccountStatusType = {}));
exports.default = AccountStatusType;

},{}],394:[function(require,module,exports){
arguments[4][4][0].apply(exports,arguments)
},{"dup":4}],395:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * アクションタイプ
 */
var ActionType;
(function (ActionType) {
    ActionType["AuthorizeAction"] = "AuthorizeAction";
    ActionType["MoneyTransfer"] = "MoneyTransfer";
    ActionType["OrderAction"] = "OrderAction";
    ActionType["PayAction"] = "PayAction";
    ActionType["PrintAction"] = "PrintAction";
    ActionType["RefundAction"] = "RefundAction";
    ActionType["ReturnAction"] = "ReturnAction";
    ActionType["SendAction"] = "SendAction";
    ActionType["TakeAction"] = "TakeAction";
    ActionType["UseAction"] = "UseAction";
})(ActionType || (ActionType = {}));
exports.default = ActionType;

},{}],396:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],397:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],398:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],399:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 作品タイプ
 */
var CreativeWorkType;
(function (CreativeWorkType) {
    CreativeWorkType["EmailMessage"] = "EmailMessage";
})(CreativeWorkType || (CreativeWorkType = {}));
exports.default = CreativeWorkType;

},{}],400:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],401:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * エラーコード
 */
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["AlreadyInUse"] = "AlreadyInUse";
    ErrorCode["Argument"] = "Argument";
    ErrorCode["ArgumentNull"] = "ArgumentNull";
    ErrorCode["Forbidden"] = "Forbidden";
    ErrorCode["NotFound"] = "NotFound";
    ErrorCode["NotImplemented"] = "NotImplemented";
    ErrorCode["RateLimitExceeded"] = "RateLimitExceeded";
    ErrorCode["ServiceUnavailable"] = "ServiceUnavailable";
    ErrorCode["Unauthorized"] = "Unauthorized";
})(ErrorCode || (ErrorCode = {}));
exports.default = ErrorCode;

},{}],402:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var pecorino_1 = require("./pecorino");
/**
 * AlreadyInUseError
 */
var AlreadyInUseError = /** @class */ (function (_super) {
    __extends(AlreadyInUseError, _super);
    function AlreadyInUseError(entityName, fieldNames, message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = "The specified '" + entityName + "' value is already in use for: " + fieldNames.join(', ') + ".";
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.AlreadyInUse, actualMessage) /* istanbul ignore next */ || this;
        _this.entityName = entityName;
        _this.fieldNames = fieldNames;
        setPrototypeOf(_this, AlreadyInUseError.prototype);
        return _this;
    }
    return AlreadyInUseError;
}(pecorino_1.PecorinoError));
exports.default = AlreadyInUseError;

},{"../errorCode":401,"./pecorino":408,"setprototypeof":467}],403:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var pecorino_1 = require("./pecorino");
/**
 * ArgumentError
 */
var ArgumentError = /** @class */ (function (_super) {
    __extends(ArgumentError, _super);
    function ArgumentError(argumentName, message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = "Invalid or missing argument supplied: " + argumentName + ".";
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.Argument, actualMessage) /* istanbul ignore next */ || this;
        _this.argumentName = argumentName;
        setPrototypeOf(_this, ArgumentError.prototype);
        return _this;
    }
    return ArgumentError;
}(pecorino_1.PecorinoError));
exports.default = ArgumentError;

},{"../errorCode":401,"./pecorino":408,"setprototypeof":467}],404:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var pecorino_1 = require("./pecorino");
/**
 * ArgumentNullError
 */
var ArgumentNullError = /** @class */ (function (_super) {
    __extends(ArgumentNullError, _super);
    function ArgumentNullError(argumentName, message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = "Missing argument: " + argumentName + ".";
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.ArgumentNull, actualMessage) /* istanbul ignore next */ || this;
        _this.argumentName = argumentName;
        setPrototypeOf(_this, ArgumentNullError.prototype);
        return _this;
    }
    return ArgumentNullError;
}(pecorino_1.PecorinoError));
exports.default = ArgumentNullError;

},{"../errorCode":401,"./pecorino":408,"setprototypeof":467}],405:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var pecorino_1 = require("./pecorino");
/**
 * ForbiddenError
 */
var ForbiddenError = /** @class */ (function (_super) {
    __extends(ForbiddenError, _super);
    function ForbiddenError(message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Forbidden.';
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.Forbidden, actualMessage) /* istanbul ignore next */ || this;
        setPrototypeOf(_this, ForbiddenError.prototype);
        return _this;
    }
    return ForbiddenError;
}(pecorino_1.PecorinoError));
exports.default = ForbiddenError;

},{"../errorCode":401,"./pecorino":408,"setprototypeof":467}],406:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var pecorino_1 = require("./pecorino");
/**
 * NotFoundError
 */
var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(entityName, message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = "Not Found: " + entityName + ".";
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.NotFound, actualMessage) /* istanbul ignore next */ || this;
        _this.entityName = entityName;
        setPrototypeOf(_this, NotFoundError.prototype);
        return _this;
    }
    return NotFoundError;
}(pecorino_1.PecorinoError));
exports.default = NotFoundError;

},{"../errorCode":401,"./pecorino":408,"setprototypeof":467}],407:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var pecorino_1 = require("./pecorino");
/**
 * NotImplementedError
 */
var NotImplementedError = /** @class */ (function (_super) {
    __extends(NotImplementedError, _super);
    function NotImplementedError(message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Method is not yet implemented.';
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.NotImplemented, actualMessage) /* istanbul ignore next */ || this;
        setPrototypeOf(_this, NotImplementedError.prototype);
        return _this;
    }
    return NotImplementedError;
}(pecorino_1.PecorinoError));
exports.default = NotImplementedError;

},{"../errorCode":401,"./pecorino":408,"setprototypeof":467}],408:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * PecorinoError
 * @extends {Error}
 */
var PecorinoError = /** @class */ (function (_super) {
    __extends(PecorinoError, _super);
    function PecorinoError(code, message) {
        var _this = 
        // tslint:disable-next-line:no-single-line-block-comment
        _super.call(this, message) /* istanbul ignore next */ || this;
        _this.name = 'PecorinoError';
        _this.reason = code;
        return _this;
    }
    return PecorinoError;
}(Error));
exports.PecorinoError = PecorinoError;

},{}],409:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var pecorino_1 = require("./pecorino");
/**
 * RateLimitExceededError
 */
var RateLimitExceededError = /** @class */ (function (_super) {
    __extends(RateLimitExceededError, _super);
    function RateLimitExceededError(message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Rate limit exceeded.';
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.RateLimitExceeded, actualMessage) /* istanbul ignore next */ || this;
        setPrototypeOf(_this, RateLimitExceededError.prototype);
        return _this;
    }
    return RateLimitExceededError;
}(pecorino_1.PecorinoError));
exports.default = RateLimitExceededError;

},{"../errorCode":401,"./pecorino":408,"setprototypeof":467}],410:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var pecorino_1 = require("./pecorino");
/**
 * ServiceUnavailableError
 */
var ServiceUnavailableError = /** @class */ (function (_super) {
    __extends(ServiceUnavailableError, _super);
    function ServiceUnavailableError(message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Service unavailable temporarily.';
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.ServiceUnavailable, actualMessage) /* istanbul ignore next */ || this;
        setPrototypeOf(_this, ServiceUnavailableError.prototype);
        return _this;
    }
    return ServiceUnavailableError;
}(pecorino_1.PecorinoError));
exports.default = ServiceUnavailableError;

},{"../errorCode":401,"./pecorino":408,"setprototypeof":467}],411:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var pecorino_1 = require("./pecorino");
/**
 * UnauthorizedError
 */
var UnauthorizedError = /** @class */ (function (_super) {
    __extends(UnauthorizedError, _super);
    function UnauthorizedError(message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Unauthorized.';
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.Unauthorized, actualMessage) /* istanbul ignore next */ || this;
        setPrototypeOf(_this, UnauthorizedError.prototype);
        return _this;
    }
    return UnauthorizedError;
}(pecorino_1.PecorinoError));
exports.default = UnauthorizedError;

},{"../errorCode":401,"./pecorino":408,"setprototypeof":467}],412:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * errors
 */
var alreadyInUse_1 = require("./error/alreadyInUse");
exports.AlreadyInUse = alreadyInUse_1.default;
var argument_1 = require("./error/argument");
exports.Argument = argument_1.default;
var argumentNull_1 = require("./error/argumentNull");
exports.ArgumentNull = argumentNull_1.default;
var forbidden_1 = require("./error/forbidden");
exports.Forbidden = forbidden_1.default;
var notFound_1 = require("./error/notFound");
exports.NotFound = notFound_1.default;
var notImplemented_1 = require("./error/notImplemented");
exports.NotImplemented = notImplemented_1.default;
var pecorino_1 = require("./error/pecorino");
exports.PECORINO = pecorino_1.PecorinoError;
var rateLimitExceeded_1 = require("./error/rateLimitExceeded");
exports.RateLimitExceeded = rateLimitExceeded_1.default;
var serviceUnavailable_1 = require("./error/serviceUnavailable");
exports.ServiceUnavailable = serviceUnavailable_1.default;
var unauthorized_1 = require("./error/unauthorized");
exports.Unauthorized = unauthorized_1.default;

},{"./error/alreadyInUse":402,"./error/argument":403,"./error/argumentNull":404,"./error/forbidden":405,"./error/notFound":406,"./error/notImplemented":407,"./error/pecorino":408,"./error/rateLimitExceeded":409,"./error/serviceUnavailable":410,"./error/unauthorized":411}],413:[function(require,module,exports){
arguments[4][34][0].apply(exports,arguments)
},{"dup":34}],414:[function(require,module,exports){
arguments[4][42][0].apply(exports,arguments)
},{"dup":42}],415:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],416:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * タスク名
 */
var TaskName;
(function (TaskName) {
    /**
     * 現金転送取消
     */
    TaskName["CancelMoneyTransfer"] = "cancelMoneyTransfer";
    /**
     * 現金転送
     */
    TaskName["MoneyTransfer"] = "moneyTransfer";
})(TaskName || (TaskName = {}));
exports.default = TaskName;

},{}],417:[function(require,module,exports){
arguments[4][46][0].apply(exports,arguments)
},{"dup":46}],418:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],419:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],420:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 取引ステータス
 */
var TransactionStatusType;
(function (TransactionStatusType) {
    TransactionStatusType["InProgress"] = "InProgress";
    TransactionStatusType["Canceled"] = "Canceled";
    TransactionStatusType["Confirmed"] = "Confirmed";
    TransactionStatusType["Expired"] = "Expired";
})(TransactionStatusType || (TransactionStatusType = {}));
exports.default = TransactionStatusType;

},{}],421:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 取引タスクエクスポートステータス
 */
var TransactionTasksExportationStatus;
(function (TransactionTasksExportationStatus) {
    /**
     * 未エクスポート
     */
    TransactionTasksExportationStatus["Unexported"] = "Unexported";
    /**
     * エクスポート中
     */
    TransactionTasksExportationStatus["Exporting"] = "Exporting";
    /**
     * エクスポート済
     */
    TransactionTasksExportationStatus["Exported"] = "Exported";
})(TransactionTasksExportationStatus || (TransactionTasksExportationStatus = {}));
exports.default = TransactionTasksExportationStatus;

},{}],422:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 取引タイプ
 */
var TransactionType;
(function (TransactionType) {
    /**
     * 出金取引
     */
    TransactionType["Withdraw"] = "Withdraw";
    /**
     * 入金取引
     */
    TransactionType["Deposit"] = "Deposit";
    /**
     * 転送取引
     */
    TransactionType["Transfer"] = "Transfer";
})(TransactionType || (TransactionType = {}));
exports.default = TransactionType;

},{}],423:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],424:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],425:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],426:[function(require,module,exports){
arguments[4][58][0].apply(exports,arguments)
},{"dup":58}],427:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * factory
 */
var AccountFactory = require("./factory/account");
var accountStatusType_1 = require("./factory/accountStatusType");
var MoneyTransferActionFactory = require("./factory/action/transfer/moneyTransfer");
var SendEmailMessageActionFactory = require("./factory/action/transfer/send/message/email");
var actionStatusType_1 = require("./factory/actionStatusType");
var actionType_1 = require("./factory/actionType");
var ClientUserFactory = require("./factory/clientUser");
var EmailMessageFactory = require("./factory/creativeWork/message/email");
var creativeWorkType_1 = require("./factory/creativeWorkType");
var priceCurrency_1 = require("./factory/priceCurrency");
var CancelMoneyTransferTaskFactory = require("./factory/task/cancelMoneyTransfer");
var MoneyTransferTaskFactory = require("./factory/task/moneyTransfer");
var TaskExecutionResultFactory = require("./factory/taskExecutionResult");
var taskName_1 = require("./factory/taskName");
var taskStatus_1 = require("./factory/taskStatus");
var DepositTransactionFactory = require("./factory/transaction/deposit");
var TransferTransactionFactory = require("./factory/transaction/transfer");
var WithdrawTransactionFactory = require("./factory/transaction/withdraw");
var transactionStatusType_1 = require("./factory/transactionStatusType");
var transactionTasksExportationStatus_1 = require("./factory/transactionTasksExportationStatus");
var transactionType_1 = require("./factory/transactionType");
var sortType_1 = require("./factory/sortType");
var URLFactory = require("./factory/url");
var errorCode_1 = require("./factory/errorCode");
var errors = require("./factory/errors");
exports.errors = errors;
exports.errorCode = errorCode_1.default;
exports.actionStatusType = actionStatusType_1.default;
exports.actionType = actionType_1.default;
var action;
(function (action) {
    var transfer;
    (function (transfer) {
        transfer.moneyTransfer = MoneyTransferActionFactory;
        var send;
        (function (send) {
            var message;
            (function (message) {
                message.email = SendEmailMessageActionFactory;
            })(message = send.message || (send.message = {}));
        })(send = transfer.send || (transfer.send = {}));
    })(transfer = action.transfer || (action.transfer = {}));
})(action = exports.action || (exports.action = {}));
exports.account = AccountFactory;
exports.accountStatusType = accountStatusType_1.default;
exports.clientUser = ClientUserFactory;
var creativeWork;
(function (creativeWork) {
    var message;
    (function (message) {
        message.email = EmailMessageFactory;
    })(message = creativeWork.message || (creativeWork.message = {}));
})(creativeWork = exports.creativeWork || (exports.creativeWork = {}));
exports.creativeWorkType = creativeWorkType_1.default;
exports.priceCurrency = priceCurrency_1.default;
var task;
(function (task) {
    task.cancelMoneyTransfer = CancelMoneyTransferTaskFactory;
    task.moneyTransfer = MoneyTransferTaskFactory;
})(task = exports.task || (exports.task = {}));
exports.sortType = sortType_1.default;
exports.taskExecutionResult = TaskExecutionResultFactory;
exports.taskName = taskName_1.default;
exports.taskStatus = taskStatus_1.default;
var transaction;
(function (transaction) {
    transaction.withdraw = WithdrawTransactionFactory;
    transaction.deposit = DepositTransactionFactory;
    transaction.transfer = TransferTransactionFactory;
})(transaction = exports.transaction || (exports.transaction = {}));
exports.transactionStatusType = transactionStatusType_1.default;
exports.transactionTasksExportationStatus = transactionTasksExportationStatus_1.default;
exports.transactionType = transactionType_1.default;
exports.url = URLFactory;

},{"./factory/account":392,"./factory/accountStatusType":393,"./factory/action/transfer/moneyTransfer":396,"./factory/action/transfer/send/message/email":397,"./factory/actionStatusType":394,"./factory/actionType":395,"./factory/clientUser":398,"./factory/creativeWork/message/email":400,"./factory/creativeWorkType":399,"./factory/errorCode":401,"./factory/errors":412,"./factory/priceCurrency":413,"./factory/sortType":414,"./factory/task/cancelMoneyTransfer":418,"./factory/task/moneyTransfer":419,"./factory/taskExecutionResult":415,"./factory/taskName":416,"./factory/taskStatus":417,"./factory/transaction/deposit":423,"./factory/transaction/transfer":424,"./factory/transaction/withdraw":425,"./factory/transactionStatusType":420,"./factory/transactionTasksExportationStatus":421,"./factory/transactionType":422,"./factory/url":426}],428:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],429:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * エラーコード
 */
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["AlreadyInUse"] = "AlreadyInUse";
    ErrorCode["Argument"] = "Argument";
    ErrorCode["ArgumentNull"] = "ArgumentNull";
    ErrorCode["Forbidden"] = "Forbidden";
    ErrorCode["NotFound"] = "NotFound";
    ErrorCode["NotImplemented"] = "NotImplemented";
    ErrorCode["ServiceUnavailable"] = "ServiceUnavailable";
    ErrorCode["RateLimitExceeded"] = "RateLimitExceeded";
})(ErrorCode || (ErrorCode = {}));
exports.default = ErrorCode;

},{}],430:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var waiter_1 = require("./waiter");
/**
 * ArgumentError
 */
var ArgumentError = /** @class */ (function (_super) {
    __extends(ArgumentError, _super);
    function ArgumentError(argumentName, message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = "Invalid or missing argument supplied: " + argumentName;
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.Argument, actualMessage) /* istanbul ignore next */ || this;
        _this.argumentName = argumentName;
        setPrototypeOf(_this, ArgumentError.prototype);
        return _this;
    }
    return ArgumentError;
}(waiter_1.WaiterError));
exports.default = ArgumentError;

},{"../errorCode":429,"./waiter":436,"setprototypeof":467}],431:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var waiter_1 = require("./waiter");
/**
 * ArgumentNullError
 */
var ArgumentNullError = /** @class */ (function (_super) {
    __extends(ArgumentNullError, _super);
    function ArgumentNullError(argumentName, message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = "Missing argument: " + argumentName;
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.Argument, actualMessage) /* istanbul ignore next */ || this;
        _this.argumentName = argumentName;
        setPrototypeOf(_this, ArgumentNullError.prototype);
        return _this;
    }
    return ArgumentNullError;
}(waiter_1.WaiterError));
exports.default = ArgumentNullError;

},{"../errorCode":429,"./waiter":436,"setprototypeof":467}],432:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var waiter_1 = require("./waiter");
/**
 * ForbiddenError
 */
var ForbiddenError = /** @class */ (function (_super) {
    __extends(ForbiddenError, _super);
    function ForbiddenError(message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Forbidden';
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.Forbidden, actualMessage) /* istanbul ignore next */ || this;
        setPrototypeOf(_this, ForbiddenError.prototype);
        return _this;
    }
    return ForbiddenError;
}(waiter_1.WaiterError));
exports.default = ForbiddenError;

},{"../errorCode":429,"./waiter":436,"setprototypeof":467}],433:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var waiter_1 = require("./waiter");
/**
 * NotFoundError
 */
var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(entityName, message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = "Not Found: " + entityName;
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.NotFound, actualMessage) /* istanbul ignore next */ || this;
        _this.entityName = entityName;
        setPrototypeOf(_this, NotFoundError.prototype);
        return _this;
    }
    return NotFoundError;
}(waiter_1.WaiterError));
exports.default = NotFoundError;

},{"../errorCode":429,"./waiter":436,"setprototypeof":467}],434:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var waiter_1 = require("./waiter");
/**
 * RateLimitExceededError
 */
var RateLimitExceededError = /** @class */ (function (_super) {
    __extends(RateLimitExceededError, _super);
    function RateLimitExceededError(message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Rate limit exceeded.';
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.RateLimitExceeded, actualMessage) /* istanbul ignore next */ || this;
        setPrototypeOf(_this, RateLimitExceededError.prototype);
        return _this;
    }
    return RateLimitExceededError;
}(waiter_1.WaiterError));
exports.default = RateLimitExceededError;

},{"../errorCode":429,"./waiter":436,"setprototypeof":467}],435:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-require-imports
var setPrototypeOf = require("setprototypeof");
var errorCode_1 = require("../errorCode");
var waiter_1 = require("./waiter");
/**
 * ServiceUnavailableError
 */
var ServiceUnavailableError = /** @class */ (function (_super) {
    __extends(ServiceUnavailableError, _super);
    function ServiceUnavailableError(message) {
        var _this = this;
        var actualMessage = message;
        if (message === undefined || message.length === 0) {
            actualMessage = 'Service unavailable temporarily.';
        }
        // tslint:disable-next-line:no-single-line-block-comment
        _this = _super.call(this, errorCode_1.default.ServiceUnavailable, actualMessage) /* istanbul ignore next */ || this;
        setPrototypeOf(_this, ServiceUnavailableError.prototype);
        return _this;
    }
    return ServiceUnavailableError;
}(waiter_1.WaiterError));
exports.default = ServiceUnavailableError;

},{"../errorCode":429,"./waiter":436,"setprototypeof":467}],436:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * WaiterError
 */
var WaiterError = /** @class */ (function (_super) {
    __extends(WaiterError, _super);
    function WaiterError(code, message) {
        var _this = 
        // tslint:disable-next-line:no-single-line-block-comment
        _super.call(this, message) /* istanbul ignore next */ || this;
        _this.name = 'WaiterError';
        _this.reason = code;
        return _this;
    }
    return WaiterError;
}(Error));
exports.WaiterError = WaiterError;

},{}],437:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * errors
 */
var argument_1 = require("./error/argument");
exports.Argument = argument_1.default;
var argumentNull_1 = require("./error/argumentNull");
exports.ArgumentNull = argumentNull_1.default;
var forbidden_1 = require("./error/forbidden");
exports.Forbidden = forbidden_1.default;
var notFound_1 = require("./error/notFound");
exports.NotFound = notFound_1.default;
var rateLimitExceeded_1 = require("./error/rateLimitExceeded");
exports.RateLimitExceeded = rateLimitExceeded_1.default;
var serviceUnavailable_1 = require("./error/serviceUnavailable");
exports.ServiceUnavailable = serviceUnavailable_1.default;
var waiter_1 = require("./error/waiter");
exports.Waiter = waiter_1.WaiterError;

},{"./error/argument":430,"./error/argumentNull":431,"./error/forbidden":432,"./error/notFound":433,"./error/rateLimitExceeded":434,"./error/serviceUnavailable":435,"./error/waiter":436}],438:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],439:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],440:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"dup":3}],441:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * factory index
 */
var client = require("./factory/client");
var errorCode_1 = require("./factory/errorCode");
var errors = require("./factory/errors");
var passport = require("./factory/passport");
var project = require("./factory/project");
var rule = require("./factory/rule");
exports.client = client;
exports.errorCode = errorCode_1.default;
exports.errors = errors;
exports.passport = passport;
exports.project = project;
exports.rule = rule;

},{"./factory/client":428,"./factory/errorCode":429,"./factory/errors":437,"./factory/passport":438,"./factory/project":439,"./factory/rule":440}],442:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}

},{}],443:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

if (typeof module !== 'undefined') {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],444:[function(require,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory();
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define([], factory);
	}
	else {
		// Global (browser)
		root.CryptoJS = factory();
	}
}(this, function () {

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {
	    /*
	     * Local polyfil of Object.create
	     */
	    var create = Object.create || (function () {
	        function F() {};

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }())

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var i = 0; i < thatSigBytes; i += 4) {
	                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            var r = (function (m_w) {
	                var m_w = m_w;
	                var m_z = 0x3ade68b1;
	                var mask = 0xffffffff;

	                return function () {
	                    m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
	                    m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
	                    var result = ((m_z << 0x10) + m_w) & mask;
	                    result /= 0x100000000;
	                    result += 0.5;
	                    return result * (Math.random() > .5 ? 1 : -1);
	                }
	            });

	            for (var i = 0, rcache; i < nBytes; i += 4) {
	                var _r = r((rcache || Math.random()) * 0x100000000);

	                rcache = _r() * 0x3ade67b7;
	                words.push((_r() * 0x100000000) | 0);
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                var processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));
},{}],445:[function(require,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * Base64 encoding strategy.
	     */
	    var Base64 = C_enc.Base64 = {
	        /**
	         * Converts a word array to a Base64 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Base64 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = this._map;

	            // Clamp excess bits
	            wordArray.clamp();

	            // Convert
	            var base64Chars = [];
	            for (var i = 0; i < sigBytes; i += 3) {
	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
	                }
	            }

	            // Add padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                while (base64Chars.length % 4) {
	                    base64Chars.push(paddingChar);
	                }
	            }

	            return base64Chars.join('');
	        },

	        /**
	         * Converts a Base64 string to a word array.
	         *
	         * @param {string} base64Str The Base64 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	         */
	        parse: function (base64Str) {
	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = this._map;
	            var reverseMap = this._reverseMap;

	            if (!reverseMap) {
	                    reverseMap = this._reverseMap = [];
	                    for (var j = 0; j < map.length; j++) {
	                        reverseMap[map.charCodeAt(j)] = j;
	                    }
	            }

	            // Ignore padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                var paddingIndex = base64Str.indexOf(paddingChar);
	                if (paddingIndex !== -1) {
	                    base64StrLength = paddingIndex;
	                }
	            }

	            // Convert
	            return parseLoop(base64Str, base64StrLength, reverseMap);

	        },

	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
	    };

	    function parseLoop(base64Str, base64StrLength, reverseMap) {
	      var words = [];
	      var nBytes = 0;
	      for (var i = 0; i < base64StrLength; i++) {
	          if (i % 4) {
	              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
	              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
	              words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
	              nBytes++;
	          }
	      }
	      return WordArray.create(words, nBytes);
	    }
	}());


	return CryptoJS.enc.Base64;

}));
},{"./core":444}],446:[function(require,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	return CryptoJS.enc.Hex;

}));
},{"./core":444}],447:[function(require,module,exports){
;(function (root, factory) {
	if (typeof exports === "object") {
		// CommonJS
		module.exports = exports = factory(require("./core"));
	}
	else if (typeof define === "function" && define.amd) {
		// AMD
		define(["./core"], factory);
	}
	else {
		// Global (browser)
		factory(root.CryptoJS);
	}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Initialization and round constants tables
	    var H = [];
	    var K = [];

	    // Compute constants
	    (function () {
	        function isPrime(n) {
	            var sqrtN = Math.sqrt(n);
	            for (var factor = 2; factor <= sqrtN; factor++) {
	                if (!(n % factor)) {
	                    return false;
	                }
	            }

	            return true;
	        }

	        function getFractionalBits(n) {
	            return ((n - (n | 0)) * 0x100000000) | 0;
	        }

	        var n = 2;
	        var nPrime = 0;
	        while (nPrime < 64) {
	            if (isPrime(n)) {
	                if (nPrime < 8) {
	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
	                }
	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

	                nPrime++;
	            }

	            n++;
	        }
	    }());

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];

	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);

	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);

	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }

	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);

	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;

	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */
	    C.SHA256 = Hasher._createHelper(SHA256);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */
	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));


	return CryptoJS.SHA256;

}));
},{"./core":444}],448:[function(require,module,exports){
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

},{}],449:[function(require,module,exports){
(function (process){
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

  if (!this.useColors) {
    return;
  }

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  var _console;

  // This hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.getItem('debug');
  } catch (error) {} // Swallow
  // XXX (@Qix-) should we be logging these?
  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

module.exports = require('./common')(exports);
var formatters = module.exports.formatters;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};


}).call(this,require('_process'))
},{"./common":450,"_process":461}],450:[function(require,module,exports){
"use strict";

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = require('ms');
  Object.keys(env).forEach(function (key) {
    createDebug[key] = env[key];
  });
  /**
  * Active `debug` instances.
  */

  createDebug.instances = [];
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    var hash = 0;

    for (var i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

  function createDebug(namespace) {
    var prevTime;

    function debug() {
      // Disabled?
      if (!debug.enabled) {
        return;
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var self = debug; // Set `diff` timestamp

      var curr = Number(new Date());
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return match;
        }

        index++;
        var formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          var val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      var logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = createDebug.enabled(namespace);
    debug.useColors = createDebug.useColors();
    debug.color = selectColor(namespace);
    debug.destroy = destroy;
    debug.extend = extend; // Debug.formatArgs = formatArgs;
    // debug.rawLog = rawLog;
    // env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    createDebug.instances.push(debug);
    return debug;
  }

  function destroy() {
    var index = createDebug.instances.indexOf(this);

    if (index !== -1) {
      createDebug.instances.splice(index, 1);
      return true;
    }

    return false;
  }

  function extend(namespace, delimiter) {
    return createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.names = [];
    createDebug.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }

    for (i = 0; i < createDebug.instances.length; i++) {
      var instance = createDebug.instances[i];
      instance.enabled = createDebug.enabled(instance.namespace);
    }
  }
  /**
  * Disable debug output.
  *
  * @api public
  */


  function disable() {
    createDebug.enable('');
  }
  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    var i;
    var len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

module.exports = setup;


},{"ms":448}],451:[function(require,module,exports){
// Generated by CoffeeScript 2.3.0
// # node-http-status

// **Reference:**  
// http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html  
// http://www.w3.org/Protocols/rfc2616/rfc2616-sec6.html#sec6.1.1
module.exports = {
  // ## Informational 1xx

  // Request received, continuing process.

  // 100 - The server has received the request headers and the client should proceed to send the request body.
  100: 'Continue',
  '100_NAME': 'CONTINUE',
  '100_MESSAGE': 'The server has received the request headers and the client should proceed to send the request body.',
  CONTINUE: 100,
  // 101 - The requester has asked the server to switch protocols and the server has agreed to do so.
  101: 'Switching Protocols',
  '101_NAME': 'SWITCHING_PROTOCOLS',
  '101_MESSAGE': 'The requester has asked the server to switch protocols and the server has agreed to do so.',
  SWITCHING_PROTOCOLS: 101,
  // 102 Processing (WebDAV; RFC 2518) - A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet.[7] This prevents the client from timing out and assuming the request was lost.
  102: 'Processing',
  '102_NAME': 'PROCESSING',
  '102_MESSAGE': 'A WebDAV request may contain many sub-requests involving file operations, requiring a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet.[7] This prevents the client from timing out and assuming the request was lost.',
  PROCESSING: 102,
  // 103 Early Hints (RFC 8297) - Used to return some response headers before final HTTP message.
  103: 'Early Hints',
  '103_NAME': 'EARLY_HINTS',
  '103_MESSAGE': 'Used to return some response headers before final HTTP message.',
  EARLY_HINTS: 103,
  // ## Successful 2xx

  // The action was successfully received, understood, and accepted.

  // 200 - Standard response for successful HTTP requests.
  200: 'OK',
  '200_NAME': 'OK',
  '200_MESSAGE': 'Standard response for successful HTTP requests.',
  OK: 200,
  // 201 - The request has been fulfilled, resulting in the creation of a new resource.
  201: 'Created',
  '201_NAME': 'CREATED',
  '201_MESSAGE': 'The request has been fulfilled, resulting in the creation of a new resource.',
  CREATED: 201,
  // 202 - The request has been accepted for processing, but the processing has not been completed.
  202: 'Accepted',
  '202_NAME': 'ACCEPTED',
  '202_MESSAGE': 'The request has been accepted for processing, but the processing has not been completed.',
  ACCEPTED: 202,
  // 203 (since HTTP/1.1) - The server is a transforming proxy (e.g. a Web accelerator) that received a 200 OK from its origin, but is returning a modified version of the origin's response.
  203: 'Non-Authoritative Information',
  '203_NAME': 'NON_AUTHORITATIVE_INFORMATION',
  '203_MESSAGE': 'The server is a transforming proxy (e.g. a Web accelerator) that received a 200 OK from its origin, but is returning a modified version of the origin\'s response.',
  NON_AUTHORITATIVE_INFORMATION: 203,
  // 204 - The server successfully processed the request and is not returning any content.
  204: 'No Content',
  '204_NAME': 'NO_CONTENT',
  '204_MESSAGE': 'The server successfully processed the request and is not returning any content.',
  NO_CONTENT: 204,
  // 205 - The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.
  205: 'Reset Content',
  '205_NAME': 'RESET_CONTENT',
  '205_MESSAGE': 'The server successfully processed the request, but is not returning any content. Unlike a 204 response, this response requires that the requester reset the document view.',
  RESET_CONTENT: 205,
  // 206 (RFC 7233) - The server is delivering only part of the resource (byte serving) due to a range header sent by the client.
  206: 'Partial Content',
  '206_NAME': 'PARTIAL_CONTENT',
  '206_MESSAGE': 'The server is delivering only part of the resource (byte serving) due to a range header sent by the client.',
  PARTIAL_CONTENT: 206,
  // 207 (WebDAV; RFC 4918) - The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.
  207: 'Multi Status',
  '207_NAME': 'MULTI_STATUS',
  '207_MESSAGE': 'The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.',
  MULTI_STATUS: 207,
  // 208 (WebDAV; RFC 5842) - The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.
  208: 'Already Reported',
  '208_NAME': 'ALREADY_REPORTED',
  '208_MESSAGE': 'The members of a DAV binding have already been enumerated in a preceding part of the (multistatus) response, and are not being included again.',
  ALREADY_REPORTED: 208,
  // 226 (RFC 3229) - The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
  226: 'IM Used',
  '226_NAME': 'IM_USED',
  '226_MESSAGE': 'The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.',
  IM_USED: 226,
  // ## Redirection 3xx

  // Further action must be taken in order to complete the request.

  // 300 - Indicates multiple options for the resource from which the client may choose.
  300: 'Multiple Choices',
  '300_NAME': 'MULTIPLE_CHOICES',
  '300_MESSAGE': 'Indicates multiple options for the resource from which the client may choose.',
  MULTIPLE_CHOICES: 300,
  // 301 - This and all future requests should be directed to the given URI.
  301: 'Moved Permanently',
  '301_NAME': 'MOVED_PERMANENTLY',
  '301_MESSAGE': 'This and all future requests should be directed to the given URI.',
  MOVED_PERMANENTLY: 301,
  // 302 - This is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours.
  302: 'Found',
  '302_NAME': 'FOUND',
  '302_MESSAGE': 'This is an example of industry practice contradicting the standard. The HTTP/1.0 specification (RFC 1945) required the client to perform a temporary redirect (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302 with the functionality of a 303 See Other. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours.',
  FOUND: 302,
  // 303 (since HTTP/1.1) - The response to the request can be found under another URI using the GET method.
  303: 'See Other',
  '303_NAME': 'SEE_OTHER',
  '303_MESSAGE': 'The response to the request can be found under another URI using the GET method.',
  SEE_OTHER: 303,
  // 304 (RFC 7232) - Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.
  304: 'Not Modified',
  '304_NAME': 'NOT_MODIFIED',
  '304_MESSAGE': 'Indicates that the resource has not been modified since the version specified by the request headers If-Modified-Since or If-None-Match.',
  NOT_MODIFIED: 304,
  // 305 (since HTTP/1.1) - The requested resource is available only through a proxy, the address for which is provided in the response.
  305: 'Use Proxy',
  '305_NAME': 'USE_PROXY',
  '305_MESSAGE': 'The requested resource is available only through a proxy, the address for which is provided in the response.',
  USE_PROXY: 305,
  // 306 - No longer used. Originally meant "Subsequent requests should use the specified proxy.
  306: 'Switch Proxy',
  '306_NAME': 'SWITCH_PROXY',
  '306_MESSAGE': 'No longer used. Originally meant "Subsequent requests should use the specified proxy.',
  SWITCH_PROXY: 306,
  // 307 (since HTTP/1.1) - In this case, the request should be repeated with another URI; however, future requests should still use the original URI.
  307: 'Temporary Redirect',
  '307_NAME': 'TEMPORARY_REDIRECT',
  '307_MESSAGE': 'In this case, the request should be repeated with another URI; however, future requests should still use the original URI.',
  TEMPORARY_REDIRECT: 307,
  // 308 (RFC 7538) - The request and all future requests should be repeated using another URI.
  308: 'Permanent Redirect',
  '308_NAME': 'PERMANENT_REDIRECT',
  '308_MESSAGE': 'The request and all future requests should be repeated using another URI.',
  PERMANENT_REDIRECT: 308,
  // ## Client Error 4xx

  // The request contains bad syntax or cannot be fulfilled.

  // 400 - The server cannot or will not process the request due to an apparent client error.
  400: 'Bad Request',
  '400_NAME': 'BAD_REQUEST',
  '400_MESSAGE': 'The server cannot or will not process the request due to an apparent client error.',
  BAD_REQUEST: 400,
  // 401 (RFC 7235) - Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided.
  401: 'Unauthorized',
  '401_NAME': 'UNAUTHORIZED',
  '401_MESSAGE': 'Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided.',
  UNAUTHORIZED: 401,
  // 402 - Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, as proposed for example by GNU Taler, but that has not yet happened, and this code is not usually used.
  402: 'Payment Required',
  '402_NAME': 'PAYMENT_REQUIRED',
  '402_MESSAGE': 'Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme, as proposed for example by GNU Taler, but that has not yet happened, and this code is not usually used.',
  PAYMENT_REQUIRED: 402,
  // 403 - The request was valid, but the server is refusing action.
  403: 'Forbidden',
  '403_NAME': 'FORBIDDEN',
  '403_MESSAGE': 'The request was valid, but the server is refusing action.',
  FORBIDDEN: 403,
  // 404 - The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.
  404: 'Not Found',
  '404_NAME': 'NOT_FOUND',
  '404_MESSAGE': 'The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.',
  NOT_FOUND: 404,
  // 405 - A request method is not supported for the requested resource.
  405: 'Method Not Allowed',
  '405_NAME': 'METHOD_NOT_ALLOWED',
  '405_MESSAGE': 'A request method is not supported for the requested resource.',
  METHOD_NOT_ALLOWED: 405,
  // 406 - The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.
  406: 'Not Acceptable',
  '406_NAME': 'NOT_ACCEPTABLE',
  '406_MESSAGE': 'The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.',
  NOT_ACCEPTABLE: 406,
  // 407 (RFC 7235) - The client must first authenticate itself with the proxy.
  407: 'Proxy Authentication Required',
  '407_NAME': 'PROXY_AUTHENTICATION_REQUIRED',
  '407_MESSAGE': 'The client must first authenticate itself with the proxy.',
  PROXY_AUTHENTICATION_REQUIRED: 407,
  // 408 - The server timed out waiting for the request.
  408: 'Request Time-out',
  '408_NAME': 'REQUEST_TIMEOUT',
  '408_MESSAGE': 'The server timed out waiting for the request.',
  REQUEST_TIMEOUT: 408,
  // 409 - Indicates that the request could not be processed because of conflict in the request, such as an edit conflict between multiple simultaneous updates.
  409: 'Conflict',
  '409_NAME': 'CONFLICT',
  '409_MESSAGE': 'Indicates that the request could not be processed because of conflict in the request, such as an edit conflict between multiple simultaneous updates.',
  CONFLICT: 409,
  // 410 - Indicates that the resource requested is no longer available and will not be available again.
  410: 'Gone',
  '410_NAME': 'GONE',
  '410_MESSAGE': 'Indicates that the resource requested is no longer available and will not be available again.',
  GONE: 410,
  // 411 - The request did not specify the length of its content, which is required by the requested resource.
  411: 'Length Required',
  '411_NAME': 'LENGTH_REQUIRED',
  '411_MESSAGE': 'The request did not specify the length of its content, which is required by the requested resource.',
  LENGTH_REQUIRED: 411,
  // 412 (RFC 7232) - The server does not meet one of the preconditions that the requester put on the request.
  412: 'Precondition Failed',
  '412_NAME': 'PRECONDITION_FAILED',
  '412_MESSAGE': 'The server does not meet one of the preconditions that the requester put on the request.',
  PRECONDITION_FAILED: 412,
  // 413 (RFC 7231) - The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large".
  413: 'Request Entity Too Large',
  '413_NAME': 'REQUEST_ENTITY_TOO_LARGE',
  '413_MESSAGE': 'The request is larger than the server is willing or able to process. Previously called "Request Entity Too Large".',
  REQUEST_ENTITY_TOO_LARGE: 413,
  // 414 (RFC 7231) - The URI provided was too long for the server to process.
  414: 'Request-URI Too Large',
  '414_NAME': 'REQUEST_URI_TOO_LONG',
  '414_MESSAGE': 'The URI provided was too long for the server to process.',
  REQUEST_URI_TOO_LONG: 414,
  // 415 - The request entity has a media type which the server or resource does not support.
  415: 'Unsupported Media Type',
  '415_NAME': 'UNSUPPORTED_MEDIA_TYPE',
  '415_MESSAGE': 'The request entity has a media type which the server or resource does not support.',
  UNSUPPORTED_MEDIA_TYPE: 415,
  // 416 (RFC 7233) - The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.
  416: 'Requested Range not Satisfiable',
  '416_NAME': 'REQUESTED_RANGE_NOT_SATISFIABLE',
  '416_MESSAGE': 'The client has asked for a portion of the file (byte serving), but the server cannot supply that portion.',
  REQUESTED_RANGE_NOT_SATISFIABLE: 416,
  // 417 - The server cannot meet the requirements of the Expect request-header field.
  417: 'Expectation Failed',
  '417_NAME': 'EXPECTATION_FAILED',
  '417_MESSAGE': 'The server cannot meet the requirements of the Expect request-header field.',
  EXPECTATION_FAILED: 417,
  // 418 (RFC 2324, RFC 7168) - Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout. This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by teapots requested to brew coffee. This HTTP status is used as an Easter egg in some websites, including Google.com.
  418: 'I\'m a teapot',
  '418_NAME': 'IM_A_TEAPOT',
  '418_MESSAGE': 'Any attempt to brew coffee with a teapot should result in the error code "418 I\'m a teapot". The resulting entity body MAY be short and stout.',
  IM_A_TEAPOT: 418,
  // 421 (RFC 7540) - The request was directed at a server that is not able to produce a response.
  421: 'Misdirected Request',
  '421_NAME': 'MISDIRECTED_REQUEST',
  '421_MESSAGE': 'The request was directed at a server that is not able to produce a response.',
  MISDIRECTED_REQUEST: 421,
  // 422 (WebDAV; RFC 4918) - The request was well-formed but was unable to be followed due to semantic errors.
  422: 'Unprocessable Entity',
  '422_NAME': 'UNPROCESSABLE_ENTITY',
  '422_MESSAGE': 'The request was well-formed but was unable to be followed due to semantic errors.',
  UNPROCESSABLE_ENTITY: 422,
  // 423 (WebDAV; RFC 4918) - The resource that is being accessed is locked.
  423: 'Locked',
  '423_NAME': 'LOCKED',
  '423_MESSAGE': 'The resource that is being accessed is locked.',
  LOCKED: 423,
  // 424 (WebDAV; RFC 4918) - The request failed because it depended on another request and that request failed.
  424: 'Failed Dependency',
  '424_NAME': 'FAILED_DEPENDENCY',
  '424_MESSAGE': 'The request failed because it depended on another request and that request failed.',
  FAILED_DEPENDENCY: 424,
  // 426 - The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.
  426: 'Upgrade Required',
  '426_NAME': 'UPGRADE_REQUIRED',
  '426_MESSAGE': 'The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.',
  UPGRADE_REQUIRED: 426,
  // 428 (RFC 6585) - The origin server requires the request to be conditional.
  428: 'Precondition Required', // RFC 6585
  '428_NAME': 'PRECONDITION_REQUIRED',
  '428_MESSAGE': 'The origin server requires the request to be conditional.',
  PRECONDITION_REQUIRED: 428,
  // 429 (RFC 6585) - The user has sent too many requests in a given amount of time.
  429: 'Too Many Requests',
  '429_NAME': 'TOO_MANY_REQUESTS',
  '429_MESSAGE': 'The user has sent too many requests in a given amount of time.',
  TOO_MANY_REQUESTS: 429,
  // 431 (RFC 6585) - The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.
  431: 'Request Header Fields Too Large', // RFC 6585
  '431_NAME': 'REQUEST_HEADER_FIELDS_TOO_LARGE',
  '431_MESSAGE': 'The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.',
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  // 451 (RFC 7725) - A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.
  451: 'Unavailable For Legal Reasons',
  '451_NAME': 'UNAVAILABLE_FOR_LEGAL_REASONS',
  '451_MESSAGE': 'A server operator has received a legal demand to deny access to a resource or to a set of resources that includes the requested resource.',
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  // ## Server Error 5xx

  // The server failed to fulfill an apparently valid request.

  // 500 - A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
  500: 'Internal Server Error',
  '500_NAME': 'INTERNAL_SERVER_ERROR',
  '500_MESSAGE': 'A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.',
  INTERNAL_SERVER_ERROR: 500,
  // 501 - The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability.
  501: 'Not Implemented',
  '501_NAME': 'NOT_IMPLEMENTED',
  '501_MESSAGE': 'The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability.',
  NOT_IMPLEMENTED: 501,
  // 502 - The server was acting as a gateway or proxy and received an invalid response from the upstream server.
  502: 'Bad Gateway',
  '_NAME': 'BAD_GATEWAY',
  '_MESSAGE': 'The server was acting as a gateway or proxy and received an invalid response from the upstream server.',
  BAD_GATEWAY: 502,
  // 503 - The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.
  503: 'Service Unavailable',
  '503_NAME': 'SERVICE_UNAVAILABLE',
  '503_MESSAGE': 'The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.',
  SERVICE_UNAVAILABLE: 503,
  // 504 - The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
  504: 'Gateway Time-out',
  '504_NAME': 'GATEWAY_TIMEOUT',
  '504_MESSAGE': 'The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.',
  GATEWAY_TIMEOUT: 504,
  // 505 - The server does not support the HTTP protocol version used in the request.
  505: 'HTTP Version not Supported',
  '505_NAME': 'HTTP_VERSION_NOT_SUPPORTED',
  '505_MESSAGE': 'The server does not support the HTTP protocol version used in the request.',
  HTTP_VERSION_NOT_SUPPORTED: 505,
  // 506 (RFC 2295) - Transparent content negotiation for the request results in a circular reference.
  506: 'Variant Also Negotiates',
  '506_NAME': 'VARIANT_ALSO_NEGOTIATES',
  '506_MESSAGE': 'Transparent content negotiation for the request results in a circular reference.',
  VARIANT_ALSO_NEGOTIATES: 506,
  // 507 (WebDAV; RFC 4918) - The server is unable to store the representation needed to complete the request.
  507: 'Insufficient Storage',
  '507_NAME': 'INSUFFICIENT_STORAGE',
  '507_MESSAGE': 'The server is unable to store the representation needed to complete the request.',
  INSUFFICIENT_STORAGE: 507,
  // 508 (WebDAV; RFC 5842) - The server detected an infinite loop while processing the request.
  508: 'Loop Detected',
  '508_NAME': 'LOOP_DETECTED',
  '508_MESSAGE': 'The server detected an infinite loop while processing the request.',
  LOOP_DETECTED: 508,
  // 510 (RFC 2774) - Further extensions to the request are required for the server to fulfil it.
  510: 'Not Extended',
  '510_NAME': 'NOT_EXTENDED',
  '510_MESSAGE': 'Further extensions to the request are required for the server to fulfil it.',
  NOT_EXTENDED: 510,
  // 511 (RFC 6585) - The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network.
  511: 'Network Authentication Required',
  '511_NAME': 'NETWORK_AUTHENTICATION_REQUIRED',
  '511_MESSAGE': 'The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network.',
  NETWORK_AUTHENTICATION_REQUIRED: 511,
  // ## Extra code

  // Extra HTTP code implemented by vendors and other specifications.
  extra: {
    // ### Unofficial codes

    // The following codes are not specified by any standard.
    unofficial: {
      // 103 - Used in the resumable requests proposal to resume aborted PUT or POST requests.
      103: 'Checkpoint',
      '103_NAME': 'CHECKPOINT',
      '103_MESSAGE': 'Used in the resumable requests proposal to resume aborted PUT or POST requests.',
      CHECKPOINT: 103,
      // 419 Page Expired (Laravel Framework) - Used by the Laravel Framework when a CSRF Token is missing or expired.
      419: 'Page Expired',
      '419_NAME': 'PAGE_EXPIRED',
      '419_MESSAGE': 'Used by the Laravel Framework when a CSRF Token is missing or expired.',
      PAGE_EXPIRED: 419,
      // 218 This is fine (Apache Web Server) - Used as a catch-all error condition for allowing response bodies to flow through Apache when ProxyErrorOverride is enabled. When ProxyErrorOverride is enabled in Apache, response bodies that contain a status code of 4xx or 5xx are automatically discarded by Apache in favor of a generic response or a custom response specified by the ErrorDocument directive.
      218: 'This is fine',
      '218_NAME': 'THIS_IS_FINE',
      '218_MESSAGE': 'Used as a catch-all error condition for allowing response bodies to flow through Apache when ProxyErrorOverride is enabled. When ProxyErrorOverride is enabled in Apache, response bodies that contain a status code of 4xx or 5xx are automatically discarded by Apache in favor of a generic response or a custom response specified by the ErrorDocument directive.',
      THIS_IS_FINE: 218,
      // 420 Enhance Your Calm (Twitter) - Returned by version 1 of the Twitter Search and Trends API when the client is being rate limited; versions 1.1 and later use the 429 Too Many Requests response code instead.
      420: 'Enhance Your Calm',
      '420_NAME': 'ENHANCE_YOUR_CALM',
      '420_MESSAGE': 'Returned by version 1 of the Twitter Search and Trends API when the client is being rate limited; versions 1.1 and later use the 429 Too Many Requests response code instead.',
      ENHANCE_YOUR_CALM: 420,
      // 450 Blocked by Windows Parental (Microsoft) - The Microsoft extension code indicated when Windows Parental Controls are turned on and are blocking access to the requested webpage.
      450: 'Blocked by Windows Parental Controls',
      '450_NAME': 'BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS',
      '450_MESSAGE': 'The Microsoft extension code indicated when Windows Parental Controls are turned on and are blocking access to the requested webpage.',
      BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS: 450,
      // 498 Invalid Token (Esri) - Returned by ArcGIS for Server. Code 498 indicates an expired or otherwise invalid token.
      498: 'Invalid Token',
      '498_NAME': 'INVALID_TOKEN',
      '498_MESSAGE': 'Returned by ArcGIS for Server. Code 498 indicates an expired or otherwise invalid token.',
      INVALID_TOKEN: 498,
      // 499 Token Required (Esri) - Returned by ArcGIS for Server. Code 499 indicates that a token is required but was not submitted.
      499: 'Token Required',
      '499_NAME': 'TOKEN_REQUIRED',
      '499_MESSAGE': 'Returned by ArcGIS for Server. Code 499 indicates that a token is required but was not submitted.',
      TOKEN_REQUIRED: 499,
      // 509 Bandwidth Limit Exceeded (Apache Web Server/cPanel) - The server has exceeded the bandwidth specified by the server administrator.
      509: 'Bandwidth Limit Exceeded',
      '509_NAME': 'BANDWIDTH_LIMIT_EXCEEDED',
      '509_MESSAGE': 'The server has exceeded the bandwidth specified by the server administrator.',
      BANDWIDTH_LIMIT_EXCEEDED: 509,
      // 530 Site is frozen - Used by the Pantheon web platform to indicate a site that has been frozen due to inactivity.
      530: 'Site is frozen',
      '530_NAME': 'SITE_IS_FROZEN',
      '530_MESSAGE': 'Used by the Pantheon web platform to indicate a site that has been frozen due to inactivity.',
      SITE_IS_FROZEN: 530,
      // 598 (Informal convention) Network read timeout error - Used by some HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy.
      598: 'Network read timeout error',
      '598_NAME': 'NETWORK_READ_TIMEOUT_ERROR',
      '598_MESSAGE': 'Used by some HTTP proxies to signal a network read timeout behind the proxy to a client in front of the proxy.',
      NETWORK_READ_TIMEOUT_ERROR: 598
    },
    // ### Internet Information Services (IIS)

    // Microsoft's Internet Information Services (IIS) web server expands the 4xx error space to signal errors with the client's request.
    iis: {
      // 440 - The client's session has expired and must log in again.
      440: 'Login Time-out',
      '440_NAME': 'LOGIN_TIME_OUT',
      '440_MESSAGE': 'The client\'s session has expired and must log in again.',
      LOGIN_TIME_OUT: 440,
      // 449 - The server cannot honour the request because the user has not provided the required information.
      449: 'Retry With',
      '449_NAME': 'RETRY_WITH',
      '449_MESSAGE': 'The server cannot honour the request because the user has not provided the required information.',
      RETRY_WITH: 449,
      // 451 - Used in Exchange ActiveSync when either a more efficient server is available or the server cannot access the users' mailbox.
      451: 'Redirect',
      '451_NAME': 'REDIRECT',
      '451_MESSAGE': 'Used in Exchange ActiveSync when either a more efficient server is available or the server cannot access the users\' mailbox.',
      REDIRECT: 451
    },
    // ### NGINX

    // The NGINX web server software expands the 4xx error space to signal issues with the client's request.
    nginx: {
      // 444 - Used internally to instruct the server to return no information to the client and close the connection immediately.
      444: 'No Response',
      '444_NAME': 'NO_RESPONSE',
      '444_MESSAGE': 'Used internally to instruct the server to return no information to the client and close the connection immediately.',
      NO_RESPONSE: 444,
      // 494 - Client sent too large request or too long header line.
      494: 'Request header too large',
      '494_NAME': 'REQUEST_HEADER_TOO_LARGE',
      '494_MESSAGE': 'Client sent too large request or too long header line.',
      REQUEST_HEADER_TOO_LARGE: 494,
      // 495 - An expansion of the 400 Bad Request response code, used when the client has provided an invalid client certificate.
      495: 'SSL Certificate Error',
      '495_NAME': 'SSL_CERTIFICATE_ERROR',
      '495_MESSAGE': 'An expansion of the 400 Bad Request response code, used when the client has provided an invalid client certificate.',
      SSL_CERTIFICATE_ERROR: 495,
      // 496 - An expansion of the 400 Bad Request response code, used when a client certificate is required but not provided.
      496: 'SSL Certificate Required',
      '496_NAME': 'SSL_CERTIFICATE_REQUIRED',
      '496_MESSAGE': 'An expansion of the 400 Bad Request response code, used when a client certificate is required but not provided.',
      SSL_CERTIFICATE_REQUIRED: 496,
      // 497 - An expansion of the 400 Bad Request response code, used when the client has made a HTTP request to a port listening for HTTPS requests.
      497: 'HTTP Request Sent to HTTPS Port',
      '497_NAME': 'HTTP_REQUEST_SENT_TO_HTTPS_PORT',
      '497_MESSAGE': 'An expansion of the 400 Bad Request response code, used when the client has made a HTTP request to a port listening for HTTPS requests.',
      HTTP_REQUEST_SENT_TO_HTTPS_PORT: 497,
      // 499 - Used when the client has closed the request before the server could send a response.
      499: 'Client Closed Request',
      '499_NAME': 'CLIENT_CLOSED_REQUEST',
      '499_MESSAGE': 'Used when the client has closed the request before the server could send a response.',
      CLIENT_CLOSED_REQUEST: 499
    },
    // ### Cloudflare

    // Cloudflare's reverse proxy service expands the 5xx series of errors space to signal issues with the origin server.
    cloudflare: {
      // 520 - The 520 error is used as a "catch-all response for when the origin server returns something unexpected", listing connection resets, large headers, and empty or invalid responses as common triggers.
      520: 'Unknown Error',
      '520_NAME': 'UNKNOWN_ERROR',
      '520_MESSAGE': 'The 520 error is used as a "catch-all response for when the origin server returns something unexpected", listing connection resets, large headers, and empty or invalid responses as common triggers.',
      UNKNOWN_ERROR: 520,
      // 521 - The origin server has refused the connection from Cloudflare.
      521: 'Web Server Is Down',
      '521_NAME': 'WEB_SERVER_IS_DOWN',
      '521_MESSAGE': 'The origin server has refused the connection from Cloudflare.',
      WEB_SERVER_IS_DOWN: 521,
      // 522 - Cloudflare could not negotiate a TCP handshake with the origin server.
      522: 'Connection Timed Out',
      '522_NAME': 'CONNECTION_TIMED_OUT',
      '522_MESSAGE': 'Cloudflare could not negotiate a TCP handshake with the origin server.',
      CONNECTION_TIMED_OUT: 522,
      // 523 - Cloudflare could not reach the origin server.
      523: 'Origin Is Unreachable',
      '523_NAME': 'ORIGIN_IS_UNREACHABLE',
      '523_MESSAGE': 'Cloudflare could not reach the origin server.',
      ORIGIN_IS_UNREACHABLE: 523,
      // 524 - Cloudflare was able to complete a TCP connection to the origin server, but did not receive a timely HTTP response.
      524: 'A Timeout Occurred',
      '524_NAME': 'A_TIMEOUT_OCCURRED',
      '524_MESSAGE': 'Cloudflare was able to complete a TCP connection to the origin server, but did not receive a timely HTTP response.',
      A_TIMEOUT_OCCURRED: 524,
      // 525 - Cloudflare could not negotiate a SSL/TLS handshake with the origin server.
      525: 'SSL Handshake Failed',
      '525_NAME': 'SSL_HANDSHAKE_FAILED',
      '525_MESSAGE': 'Cloudflare could not negotiate a SSL/TLS handshake with the origin server.',
      SSL_HANDSHAKE_FAILED: 525,
      // 526 - Cloudflare could not validate the SSL/TLS certificate that the origin server presented.
      526: 'Invalid SSL Certificate',
      '526_NAME': 'INVALID_SSL_CERTIFICATE',
      '526_MESSAGE': 'Cloudflare could not validate the SSL/TLS certificate that the origin server presented.',
      INVALID_SSL_CERTIFICATE: 526,
      // 527 - Error 527 indicates that the request timed out or failed after the WAN connection had been established.
      527: 'Railgun Error',
      '527_NAME': 'RAILGUN_ERROR',
      '527_MESSAGE': 'Error 527 indicates that the request timed out or failed after the WAN connection had been established.',
      RAILGUN_ERROR: 527
    }
  }
};

},{}],452:[function(require,module,exports){
(function (name, context, definition) {
  if (typeof module !== 'undefined' && module.exports) module.exports = definition();
  else if (typeof define === 'function' && define.amd) define(definition);
  else context[name] = definition();
})('urljoin', this, function () {

  function normalize (str, options) {

    // make sure protocol is followed by two slashes
    str = str.replace(/:\//g, '://');

    // remove consecutive slashes
    str = str.replace(/([^:\s])\/+/g, '$1/');

    // remove trailing slash before parameters or hash
    str = str.replace(/\/(\?|&|#[^!])/g, '$1');

    // replace ? in parameters with &
    str = str.replace(/(\?.+)\?/g, '$1&');

    return str;
  }

  return function () {
    var input = arguments;
    var options = {};

    if (typeof arguments[0] === 'object') {
      // new syntax with array and options
      input = arguments[0];
      options = arguments[1] || {};
    }

    var joined = [].slice.call(input, 0).join('/');
    return normalize(joined, options);
  };

});

},{}],453:[function(require,module,exports){
var base64 = require('base64-js');

function padding(str) {
  var mod = (str.length % 4);
  var pad = 4 - mod;

  if (mod === 0) {
    return str;
  }

  return str + (new Array(1 + pad)).join('=');
}

function byteArrayToString(array) {
  var result = "";
  for (var i = 0; i < array.length; i++) {
    result += String.fromCharCode(array[i]);
  }
  return result;
}

function stringToByteArray(str) {
  var arr = new Array(str.length);
  for (var a = 0; a < str.length; a++) {
    arr[a] = str.charCodeAt(a);
  }
  return arr;
}

function byteArrayToHex(raw) {
  var HEX = '';

  for (var i = 0; i < raw.length; i++) {
    var _hex = raw[i].toString(16);
    HEX += (_hex.length === 2 ? _hex : '0' + _hex);
  }

  return HEX;
}

function encodeString(str) {
  return base64.fromByteArray(stringToByteArray(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode('0x' + p1);
  })))
  .replace(/\+/g, '-') // Convert '+' to '-'
  .replace(/\//g, '_'); // Convert '/' to '_';
}

function decodeToString(str) {
  str = padding(str)
    .replace(/\-/g, '+') // Convert '-' to '+'
    .replace(/_/g, '/'); // Convert '_' to '/'

  return decodeURIComponent(byteArrayToString(base64.toByteArray(str)).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function decodeToHEX(str) {
  return byteArrayToHex(base64.toByteArray(padding(str)));
}

function base64ToBase64Url(base64String) {
  var SAFE_URL_ENCODING_MAPPING = {
    "+": "-",
    "/": "_",
    "=": ""
  };

  return base64String.replace(/[+/=]/g, function(m) {
    return SAFE_URL_ENCODING_MAPPING[m];
  });
}

module.exports = {
  encodeString: encodeString,
  decodeToString: decodeToString,
  byteArrayToString: byteArrayToString,
  stringToByteArray: stringToByteArray,
  padding: padding,
  byteArrayToHex: byteArrayToHex,
  decodeToHEX: decodeToHEX,
  base64ToBase64Url: base64ToBase64Url
};

},{"base64-js":442}],454:[function(require,module,exports){
function DummyCache() {}

DummyCache.prototype.get = function () {
  return null;
};

DummyCache.prototype.has = function () {
  return false;
};

DummyCache.prototype.set = function () {
};

module.exports = DummyCache;

},{}],455:[function(require,module,exports){
function ConfigurationError(message) {
  this.name = 'ConfigurationError';
  this.message = (message || '');
}
ConfigurationError.prototype = Error.prototype;

function TokenValidationError(message) {
  this.name = 'TokenValidationError';
  this.message = (message || '');
}
TokenValidationError.prototype = Error.prototype;

module.exports = {
  ConfigurationError: ConfigurationError,
  TokenValidationError: TokenValidationError
};

},{}],456:[function(require,module,exports){
var urljoin = require('url-join');
var base64 = require('./base64');
var request = require('superagent');

function process(jwks) {
  var modulus = base64.decodeToHEX(jwks.n);
  var exp = base64.decodeToHEX(jwks.e);

  return {
    modulus: modulus,
    exp: exp
  };
}

function getJWKS(options, cb) {
  var url = options.jwksURI || urljoin(options.iss, '.well-known', 'jwks.json');

  return request
    .get(url)
    .end(function (err, data) {
      var matchingKey = null;
      var a;
      var key;

      if (err) {
        return cb(err);
      }

      // eslint-disable-next-line no-plusplus
      for (a = 0; a < data.body.keys.length && matchingKey === null; a++) {
        key = data.body.keys[a];
        if (key.kid === options.kid) {
          matchingKey = key;
        }
      }

      return cb(null, process(matchingKey));
    });
}

module.exports = {
  process: process,
  getJWKS: getJWKS
};

},{"./base64":453,"superagent":469,"url-join":452}],457:[function(require,module,exports){
/*
Based on the work of Tom Wu
http://www-cs-students.stanford.edu/~tjw/jsbn/
http://www-cs-students.stanford.edu/~tjw/jsbn/LICENSE
*/

var BigInteger = require('jsbn').BigInteger;
var SHA256 = require('crypto-js/sha256');

var DigestInfoHead = {
  sha1: '3021300906052b0e03021a05000414',
  sha224: '302d300d06096086480165030402040500041c',
  sha256: '3031300d060960864801650304020105000420',
  sha384: '3041300d060960864801650304020205000430',
  sha512: '3051300d060960864801650304020305000440',
  md2: '3020300c06082a864886f70d020205000410',
  md5: '3020300c06082a864886f70d020505000410',
  ripemd160: '3021300906052b2403020105000414'
};

var DigestAlgs = {
  sha256: SHA256
};

function RSAVerifier(modulus, exp) {
  this.n = null;
  this.e = 0;

  if (modulus != null && exp != null && modulus.length > 0 && exp.length > 0) {
    this.n = new BigInteger(modulus, 16);
    this.e = parseInt(exp, 16);
  } else {
    throw new Error('Invalid key data');
  }
}

function getAlgorithmFromDigest(hDigestInfo) {
  for (var algName in DigestInfoHead) {
    var head = DigestInfoHead[algName];
    var len = head.length;

    if (hDigestInfo.substring(0, len) === head) {
      return {
        alg: algName,
        hash: hDigestInfo.substring(len)
      };
    }
  }
  return [];
}


RSAVerifier.prototype.verify = function (msg, encsig) {
  encsig = encsig.replace(/[^0-9a-f]|[\s\n]]/ig, '');

  var sig = new BigInteger(encsig, 16);
  if (sig.bitLength() > this.n.bitLength()) {
    throw new Error('Signature does not match with the key modulus.');
  }

  var decryptedSig = sig.modPowInt(this.e, this.n);
  var digest = decryptedSig.toString(16).replace(/^1f+00/, '');

  var digestInfo = getAlgorithmFromDigest(digest);
  if (digestInfo.length === 0) {
    return false;
  }

  if (!DigestAlgs.hasOwnProperty(digestInfo.alg)) {
    throw new Error('Hashing algorithm is not supported.');
  }

  var msgHash = DigestAlgs[digestInfo.alg](msg).toString();
  return (digestInfo.hash === msgHash);
};

module.exports = RSAVerifier;

},{"crypto-js/sha256":447,"jsbn":460}],458:[function(require,module,exports){
var sha256 = require('crypto-js/sha256');
var cryptoBase64 = require('crypto-js/enc-base64');
var cryptoHex = require('crypto-js/enc-hex');

var RSAVerifier = require('./helpers/rsa-verifier');
var base64 = require('./helpers/base64');
var jwks = require('./helpers/jwks');
var error = require('./helpers/error');
var DummyCache = require('./helpers/dummy-cache');
var supportedAlgs = ['RS256'];

/**
 * Creates a new id_token verifier
 * @constructor
 * @param {Object} parameters
 * @param {String} parameters.issuer name of the issuer of the token
 * that should match the `iss` claim in the id_token
 * @param {String} parameters.audience identifies the recipients that the JWT is intended for
 * and should match the `aud` claim
 * @param {Object} [parameters.jwksCache] cache for JSON Web Token Keys. By default it has no cache
 * @param {String} [parameters.jwksURI] A valid, direct URI to fetch the JSON Web Key Set (JWKS).
 * @param {String} [parameters.expectedAlg='RS256'] algorithm in which the id_token was signed
 * and will be used to validate
 * @param {number} [parameters.leeway=0] number of seconds that the clock can be out of sync
 * while validating expiration of the id_token
 */
function IdTokenVerifier(parameters) {
  var options = parameters || {};

  this.jwksCache = options.jwksCache || new DummyCache();
  this.expectedAlg = options.expectedAlg || 'RS256';
  this.issuer = options.issuer;
  this.audience = options.audience;
  this.leeway = options.leeway || 0;
  this.__disableExpirationCheck = options.__disableExpirationCheck || false;
  this.jwksURI = options.jwksURI;

  if (this.leeway < 0 || this.leeway > 60) {
    throw new error.ConfigurationError('The leeway should be positive and lower than a minute.');
  }

  if (supportedAlgs.indexOf(this.expectedAlg) === -1) {
    throw new error.ConfigurationError('Algorithm ' + this.expectedAlg +
      ' is not supported. (Expected algs: [' + supportedAlgs.join(',') + '])');
  }
}

/**
 * @callback verifyCallback
 * @param {Error} [err] error returned if the verify cannot be performed
 * @param {boolean} [status] if the token is valid or not
 */

/**
 * Verifies an id_token
 *
 * It will validate:
 * - signature according to the algorithm configured in the verifier.
 * - if nonce is present and matches the one provided
 * - if `iss` and `aud` claims matches the configured issuer and audience
 * - if token is not expired and valid (if the `nbf` claim is in the past)
 *
 * @method verify
 * @param {String} token id_token to verify
 * @param {String} [nonce] nonce value that should match the one in the id_token claims
 * @param {verifyCallback} cb callback used to notify the results of the validation
 */
IdTokenVerifier.prototype.verify = function (token, nonce, cb) {
  var jwt = this.decode(token);

  if (jwt instanceof Error) {
    return cb(jwt, false);
  }

  /* eslint-disable vars-on-top */
  var headAndPayload = jwt.encoded.header + '.' + jwt.encoded.payload;
  var signature = base64.decodeToHEX(jwt.encoded.signature);

  var alg = jwt.header.alg;
  var kid = jwt.header.kid;

  var aud = jwt.payload.aud;
  var iss = jwt.payload.iss;
  var exp = jwt.payload.exp;
  var nbf = jwt.payload.nbf;
  var tnonce = jwt.payload.nonce || null;
  /* eslint-enable vars-on-top */

  if (this.issuer !== iss) {
    return cb(new error.TokenValidationError('Issuer ' + iss + ' is not valid.'), false);
  }

  if (this.audience !== aud) {
    return cb(new error.TokenValidationError('Audience ' + aud + ' is not valid.'), false);
  }

  if (this.expectedAlg !== alg) {
    return cb(new error.TokenValidationError('Algorithm ' + alg +
      ' is not supported. (Expected algs: [' + supportedAlgs.join(',') + '])'), false);
  }

  if (tnonce !== nonce) {
    return cb(new error.TokenValidationError('Nonce does not match.'), false);
  }

  var expirationError = this.verifyExpAndNbf(exp, nbf); // eslint-disable-line vars-on-top

  if (expirationError) {
    return cb(expirationError, false);
  }

  return this.getRsaVerifier(iss, kid, function (err, rsaVerifier) {
    if (err) {
      return cb(err);
    }
    if (rsaVerifier.verify(headAndPayload, signature)) {
      return cb(null, jwt.payload);
    }
    return cb(new error.TokenValidationError('Invalid signature.'));
  });
};

/**
 * Verifies that the `exp` and `nbf` claims are valid in the current moment.
 *
 * @method verifyExpAndNbf
 * @param {String} exp value of `exp` claim
 * @param {String} nbf value of `nbf` claim
 * @return {boolean} if token is valid according to `exp` and `nbf`
 */
IdTokenVerifier.prototype.verifyExpAndNbf = function (exp, nbf) {
  var now = new Date();
  var expDate = new Date(0);
  var nbfDate = new Date(0);

  if (this.__disableExpirationCheck) {
    return null;
  }

  expDate.setUTCSeconds(exp + this.leeway);

  if (now > expDate) {
    return new error.TokenValidationError('Expired token.');
  }

  if (typeof nbf === 'undefined') {
    return null;
  }
  nbfDate.setUTCSeconds(nbf - this.leeway);
  if (now < nbfDate) {
    return new error.TokenValidationError('The token is not valid until later in the future. ' +
      'Please check your computed clock.');
  }

  return null;
};

/**
 * Verifies that the `exp` and `iat` claims are valid in the current moment.
 *
 * @method verifyExpAndIat
 * @param {String} exp value of `exp` claim
 * @param {String} iat value of `iat` claim
 * @return {boolean} if token is valid according to `exp` and `iat`
 */
IdTokenVerifier.prototype.verifyExpAndIat = function (exp, iat) {
  var now = new Date();
  var expDate = new Date(0);
  var iatDate = new Date(0);

  if (this.__disableExpirationCheck) {
    return null;
  }

  expDate.setUTCSeconds(exp + this.leeway);

  if (now > expDate) {
    return new error.TokenValidationError('Expired token.');
  }

  iatDate.setUTCSeconds(iat - this.leeway);

  if (now < iatDate) {
    return new error.TokenValidationError('The token was issued in the future. ' +
      'Please check your computed clock.');
  }
  return null;
};

IdTokenVerifier.prototype.getRsaVerifier = function (iss, kid, cb) {
  var _this = this;
  var cachekey = iss + kid;

  if (!this.jwksCache.has(cachekey)) {
    jwks.getJWKS({
      jwksURI: this.jwksURI,
      iss: iss,
      kid: kid
    }, function (err, keyInfo) {
      if (err) {
        return cb(err);
      }
      _this.jwksCache.set(cachekey, keyInfo);
      return cb(null, new RSAVerifier(keyInfo.modulus, keyInfo.exp));
    });
  } else {
    var keyInfo = this.jwksCache.get(cachekey); // eslint-disable-line vars-on-top
    cb(null, new RSAVerifier(keyInfo.modulus, keyInfo.exp));
  }
};


/**
 * @typedef DecodedToken
 * @type {Object}
 * @property {Object} header - content of the JWT header.
 * @property {Object} payload - token claims.
 * @property {Object} encoded - encoded parts of the token.
 */

/**
 * Decodes a well formed JWT without any verification
 *
 * @method decode
 * @param {String} token decodes the token
 * @return {DecodedToken} if token is valid according to `exp` and `nbf`
 */
IdTokenVerifier.prototype.decode = function (token) {
  var parts = token.split('.');
  var header;
  var payload;

  if (parts.length !== 3) {
    return new error.TokenValidationError('Cannot decode a malformed JWT');
  }

  try {
    header = JSON.parse(base64.decodeToString(parts[0]));
    payload = JSON.parse(base64.decodeToString(parts[1]));
  } catch (e) {
    return new error.TokenValidationError('Token header or payload is not valid JSON');
  }

  return {
    header: header,
    payload: payload,
    encoded: {
      header: parts[0],
      payload: parts[1],
      signature: parts[2]
    }
  };
};

/**
 * @callback validateAccessTokenCallback
 * @param {Error} [err] error returned if the validation cannot be performed
 * or the token is invalid. If there is no error, then the access_token is valid.
 */

/**
 * Validates an access_token based on {@link http://openid.net/specs/openid-connect-core-1_0.html#ImplicitTokenValidation}.
 * The id_token from where the alg and atHash parameters are taken,
 * should be decoded and verified before using thisfunction
 *
 * @method validateAccessToken
 * @param {String} access_token the access_token
 * @param {String} alg The algorithm defined in the header of the
 * previously verified id_token under the "alg" claim.
 * @param {String} atHash The "at_hash" value included in the payload
 * of the previously verified id_token.
 * @param {validateAccessTokenCallback} cb callback used to notify the results of the validation.
 */
IdTokenVerifier.prototype.validateAccessToken = function (accessToken, alg, atHash, cb) {
  if (this.expectedAlg !== alg) {
    return cb(new error.TokenValidationError('Algorithm ' + alg +
      ' is not supported. (Expected alg: ' + this.expectedAlg + ')'));
  }
  var sha256AccessToken = sha256(accessToken);
  var hashToHex = cryptoHex.stringify(sha256AccessToken);
  var hashToHexFirstHalf = hashToHex.substring(0, hashToHex.length / 2);
  var hashFirstHalfWordArray = cryptoHex.parse(hashToHexFirstHalf);
  var hashFirstHalfBase64 = cryptoBase64.stringify(hashFirstHalfWordArray);
  var hashFirstHalfBase64SafeUrl = base64.base64ToBase64Url(hashFirstHalfBase64);
  if (hashFirstHalfBase64SafeUrl !== atHash) {
    return cb(new error.TokenValidationError('Invalid access_token'));
  }
  return cb(null);
};

module.exports = IdTokenVerifier;

},{"./helpers/base64":453,"./helpers/dummy-cache":454,"./helpers/error":455,"./helpers/jwks":456,"./helpers/rsa-verifier":457,"crypto-js/enc-base64":445,"crypto-js/enc-hex":446,"crypto-js/sha256":447}],459:[function(require,module,exports){
// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
require('whatwg-fetch');
module.exports = self.fetch.bind(self);

},{"whatwg-fetch":474}],460:[function(require,module,exports){
(function(){

    // Copyright (c) 2005  Tom Wu
    // All Rights Reserved.
    // See "LICENSE" for details.

    // Basic JavaScript BN library - subset useful for RSA encryption.

    // Bits per digit
    var dbits;

    // JavaScript engine analysis
    var canary = 0xdeadbeefcafe;
    var j_lm = ((canary&0xffffff)==0xefcafe);

    // (public) Constructor
    function BigInteger(a,b,c) {
      if(a != null)
        if("number" == typeof a) this.fromNumber(a,b,c);
        else if(b == null && "string" != typeof a) this.fromString(a,256);
        else this.fromString(a,b);
    }

    // return new, unset BigInteger
    function nbi() { return new BigInteger(null); }

    // am: Compute w_j += (x*this_i), propagate carries,
    // c is initial carry, returns final carry.
    // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
    // We need to select the fastest one that works in this environment.

    // am1: use a single mult and divide to get the high bits,
    // max digit bits should be 26 because
    // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
    function am1(i,x,w,j,c,n) {
      while(--n >= 0) {
        var v = x*this[i++]+w[j]+c;
        c = Math.floor(v/0x4000000);
        w[j++] = v&0x3ffffff;
      }
      return c;
    }
    // am2 avoids a big mult-and-extract completely.
    // Max digit bits should be <= 30 because we do bitwise ops
    // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
    function am2(i,x,w,j,c,n) {
      var xl = x&0x7fff, xh = x>>15;
      while(--n >= 0) {
        var l = this[i]&0x7fff;
        var h = this[i++]>>15;
        var m = xh*l+h*xl;
        l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
        c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
        w[j++] = l&0x3fffffff;
      }
      return c;
    }
    // Alternately, set max digit bits to 28 since some
    // browsers slow down when dealing with 32-bit numbers.
    function am3(i,x,w,j,c,n) {
      var xl = x&0x3fff, xh = x>>14;
      while(--n >= 0) {
        var l = this[i]&0x3fff;
        var h = this[i++]>>14;
        var m = xh*l+h*xl;
        l = xl*l+((m&0x3fff)<<14)+w[j]+c;
        c = (l>>28)+(m>>14)+xh*h;
        w[j++] = l&0xfffffff;
      }
      return c;
    }
    var inBrowser = typeof navigator !== "undefined";
    if(inBrowser && j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
      BigInteger.prototype.am = am2;
      dbits = 30;
    }
    else if(inBrowser && j_lm && (navigator.appName != "Netscape")) {
      BigInteger.prototype.am = am1;
      dbits = 26;
    }
    else { // Mozilla/Netscape seems to prefer am3
      BigInteger.prototype.am = am3;
      dbits = 28;
    }

    BigInteger.prototype.DB = dbits;
    BigInteger.prototype.DM = ((1<<dbits)-1);
    BigInteger.prototype.DV = (1<<dbits);

    var BI_FP = 52;
    BigInteger.prototype.FV = Math.pow(2,BI_FP);
    BigInteger.prototype.F1 = BI_FP-dbits;
    BigInteger.prototype.F2 = 2*dbits-BI_FP;

    // Digit conversions
    var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
    var BI_RC = new Array();
    var rr,vv;
    rr = "0".charCodeAt(0);
    for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
    rr = "a".charCodeAt(0);
    for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
    rr = "A".charCodeAt(0);
    for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

    function int2char(n) { return BI_RM.charAt(n); }
    function intAt(s,i) {
      var c = BI_RC[s.charCodeAt(i)];
      return (c==null)?-1:c;
    }

    // (protected) copy this to r
    function bnpCopyTo(r) {
      for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
      r.t = this.t;
      r.s = this.s;
    }

    // (protected) set from integer value x, -DV <= x < DV
    function bnpFromInt(x) {
      this.t = 1;
      this.s = (x<0)?-1:0;
      if(x > 0) this[0] = x;
      else if(x < -1) this[0] = x+this.DV;
      else this.t = 0;
    }

    // return bigint initialized to value
    function nbv(i) { var r = nbi(); r.fromInt(i); return r; }

    // (protected) set from string and radix
    function bnpFromString(s,b) {
      var k;
      if(b == 16) k = 4;
      else if(b == 8) k = 3;
      else if(b == 256) k = 8; // byte array
      else if(b == 2) k = 1;
      else if(b == 32) k = 5;
      else if(b == 4) k = 2;
      else { this.fromRadix(s,b); return; }
      this.t = 0;
      this.s = 0;
      var i = s.length, mi = false, sh = 0;
      while(--i >= 0) {
        var x = (k==8)?s[i]&0xff:intAt(s,i);
        if(x < 0) {
          if(s.charAt(i) == "-") mi = true;
          continue;
        }
        mi = false;
        if(sh == 0)
          this[this.t++] = x;
        else if(sh+k > this.DB) {
          this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
          this[this.t++] = (x>>(this.DB-sh));
        }
        else
          this[this.t-1] |= x<<sh;
        sh += k;
        if(sh >= this.DB) sh -= this.DB;
      }
      if(k == 8 && (s[0]&0x80) != 0) {
        this.s = -1;
        if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
      }
      this.clamp();
      if(mi) BigInteger.ZERO.subTo(this,this);
    }

    // (protected) clamp off excess high words
    function bnpClamp() {
      var c = this.s&this.DM;
      while(this.t > 0 && this[this.t-1] == c) --this.t;
    }

    // (public) return string representation in given radix
    function bnToString(b) {
      if(this.s < 0) return "-"+this.negate().toString(b);
      var k;
      if(b == 16) k = 4;
      else if(b == 8) k = 3;
      else if(b == 2) k = 1;
      else if(b == 32) k = 5;
      else if(b == 4) k = 2;
      else return this.toRadix(b);
      var km = (1<<k)-1, d, m = false, r = "", i = this.t;
      var p = this.DB-(i*this.DB)%k;
      if(i-- > 0) {
        if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
        while(i >= 0) {
          if(p < k) {
            d = (this[i]&((1<<p)-1))<<(k-p);
            d |= this[--i]>>(p+=this.DB-k);
          }
          else {
            d = (this[i]>>(p-=k))&km;
            if(p <= 0) { p += this.DB; --i; }
          }
          if(d > 0) m = true;
          if(m) r += int2char(d);
        }
      }
      return m?r:"0";
    }

    // (public) -this
    function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }

    // (public) |this|
    function bnAbs() { return (this.s<0)?this.negate():this; }

    // (public) return + if this > a, - if this < a, 0 if equal
    function bnCompareTo(a) {
      var r = this.s-a.s;
      if(r != 0) return r;
      var i = this.t;
      r = i-a.t;
      if(r != 0) return (this.s<0)?-r:r;
      while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
      return 0;
    }

    // returns bit length of the integer x
    function nbits(x) {
      var r = 1, t;
      if((t=x>>>16) != 0) { x = t; r += 16; }
      if((t=x>>8) != 0) { x = t; r += 8; }
      if((t=x>>4) != 0) { x = t; r += 4; }
      if((t=x>>2) != 0) { x = t; r += 2; }
      if((t=x>>1) != 0) { x = t; r += 1; }
      return r;
    }

    // (public) return the number of bits in "this"
    function bnBitLength() {
      if(this.t <= 0) return 0;
      return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
    }

    // (protected) r = this << n*DB
    function bnpDLShiftTo(n,r) {
      var i;
      for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
      for(i = n-1; i >= 0; --i) r[i] = 0;
      r.t = this.t+n;
      r.s = this.s;
    }

    // (protected) r = this >> n*DB
    function bnpDRShiftTo(n,r) {
      for(var i = n; i < this.t; ++i) r[i-n] = this[i];
      r.t = Math.max(this.t-n,0);
      r.s = this.s;
    }

    // (protected) r = this << n
    function bnpLShiftTo(n,r) {
      var bs = n%this.DB;
      var cbs = this.DB-bs;
      var bm = (1<<cbs)-1;
      var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
      for(i = this.t-1; i >= 0; --i) {
        r[i+ds+1] = (this[i]>>cbs)|c;
        c = (this[i]&bm)<<bs;
      }
      for(i = ds-1; i >= 0; --i) r[i] = 0;
      r[ds] = c;
      r.t = this.t+ds+1;
      r.s = this.s;
      r.clamp();
    }

    // (protected) r = this >> n
    function bnpRShiftTo(n,r) {
      r.s = this.s;
      var ds = Math.floor(n/this.DB);
      if(ds >= this.t) { r.t = 0; return; }
      var bs = n%this.DB;
      var cbs = this.DB-bs;
      var bm = (1<<bs)-1;
      r[0] = this[ds]>>bs;
      for(var i = ds+1; i < this.t; ++i) {
        r[i-ds-1] |= (this[i]&bm)<<cbs;
        r[i-ds] = this[i]>>bs;
      }
      if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
      r.t = this.t-ds;
      r.clamp();
    }

    // (protected) r = this - a
    function bnpSubTo(a,r) {
      var i = 0, c = 0, m = Math.min(a.t,this.t);
      while(i < m) {
        c += this[i]-a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      if(a.t < this.t) {
        c -= a.s;
        while(i < this.t) {
          c += this[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += this.s;
      }
      else {
        c += this.s;
        while(i < a.t) {
          c -= a[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c -= a.s;
      }
      r.s = (c<0)?-1:0;
      if(c < -1) r[i++] = this.DV+c;
      else if(c > 0) r[i++] = c;
      r.t = i;
      r.clamp();
    }

    // (protected) r = this * a, r != this,a (HAC 14.12)
    // "this" should be the larger one if appropriate.
    function bnpMultiplyTo(a,r) {
      var x = this.abs(), y = a.abs();
      var i = x.t;
      r.t = i+y.t;
      while(--i >= 0) r[i] = 0;
      for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
      r.s = 0;
      r.clamp();
      if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
    }

    // (protected) r = this^2, r != this (HAC 14.16)
    function bnpSquareTo(r) {
      var x = this.abs();
      var i = r.t = 2*x.t;
      while(--i >= 0) r[i] = 0;
      for(i = 0; i < x.t-1; ++i) {
        var c = x.am(i,x[i],r,2*i,0,1);
        if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
          r[i+x.t] -= x.DV;
          r[i+x.t+1] = 1;
        }
      }
      if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
      r.s = 0;
      r.clamp();
    }

    // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
    // r != q, this != m.  q or r may be null.
    function bnpDivRemTo(m,q,r) {
      var pm = m.abs();
      if(pm.t <= 0) return;
      var pt = this.abs();
      if(pt.t < pm.t) {
        if(q != null) q.fromInt(0);
        if(r != null) this.copyTo(r);
        return;
      }
      if(r == null) r = nbi();
      var y = nbi(), ts = this.s, ms = m.s;
      var nsh = this.DB-nbits(pm[pm.t-1]);   // normalize modulus
      if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
      else { pm.copyTo(y); pt.copyTo(r); }
      var ys = y.t;
      var y0 = y[ys-1];
      if(y0 == 0) return;
      var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
      var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
      var i = r.t, j = i-ys, t = (q==null)?nbi():q;
      y.dlShiftTo(j,t);
      if(r.compareTo(t) >= 0) {
        r[r.t++] = 1;
        r.subTo(t,r);
      }
      BigInteger.ONE.dlShiftTo(ys,t);
      t.subTo(y,y);  // "negative" y so we can replace sub with am later
      while(y.t < ys) y[y.t++] = 0;
      while(--j >= 0) {
        // Estimate quotient digit
        var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
        if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {   // Try it out
          y.dlShiftTo(j,t);
          r.subTo(t,r);
          while(r[i] < --qd) r.subTo(t,r);
        }
      }
      if(q != null) {
        r.drShiftTo(ys,q);
        if(ts != ms) BigInteger.ZERO.subTo(q,q);
      }
      r.t = ys;
      r.clamp();
      if(nsh > 0) r.rShiftTo(nsh,r); // Denormalize remainder
      if(ts < 0) BigInteger.ZERO.subTo(r,r);
    }

    // (public) this mod a
    function bnMod(a) {
      var r = nbi();
      this.abs().divRemTo(a,null,r);
      if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
      return r;
    }

    // Modular reduction using "classic" algorithm
    function Classic(m) { this.m = m; }
    function cConvert(x) {
      if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
      else return x;
    }
    function cRevert(x) { return x; }
    function cReduce(x) { x.divRemTo(this.m,null,x); }
    function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
    function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    Classic.prototype.convert = cConvert;
    Classic.prototype.revert = cRevert;
    Classic.prototype.reduce = cReduce;
    Classic.prototype.mulTo = cMulTo;
    Classic.prototype.sqrTo = cSqrTo;

    // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
    // justification:
    //         xy == 1 (mod m)
    //         xy =  1+km
    //   xy(2-xy) = (1+km)(1-km)
    // x[y(2-xy)] = 1-k^2m^2
    // x[y(2-xy)] == 1 (mod m^2)
    // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
    // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
    // JS multiply "overflows" differently from C/C++, so care is needed here.
    function bnpInvDigit() {
      if(this.t < 1) return 0;
      var x = this[0];
      if((x&1) == 0) return 0;
      var y = x&3;       // y == 1/x mod 2^2
      y = (y*(2-(x&0xf)*y))&0xf; // y == 1/x mod 2^4
      y = (y*(2-(x&0xff)*y))&0xff;   // y == 1/x mod 2^8
      y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;    // y == 1/x mod 2^16
      // last step - calculate inverse mod DV directly;
      // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
      y = (y*(2-x*y%this.DV))%this.DV;       // y == 1/x mod 2^dbits
      // we really want the negative inverse, and -DV < y < DV
      return (y>0)?this.DV-y:-y;
    }

    // Montgomery reduction
    function Montgomery(m) {
      this.m = m;
      this.mp = m.invDigit();
      this.mpl = this.mp&0x7fff;
      this.mph = this.mp>>15;
      this.um = (1<<(m.DB-15))-1;
      this.mt2 = 2*m.t;
    }

    // xR mod m
    function montConvert(x) {
      var r = nbi();
      x.abs().dlShiftTo(this.m.t,r);
      r.divRemTo(this.m,null,r);
      if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
      return r;
    }

    // x/R mod m
    function montRevert(x) {
      var r = nbi();
      x.copyTo(r);
      this.reduce(r);
      return r;
    }

    // x = x/R mod m (HAC 14.32)
    function montReduce(x) {
      while(x.t <= this.mt2) // pad x so am has enough room later
        x[x.t++] = 0;
      for(var i = 0; i < this.m.t; ++i) {
        // faster way of calculating u0 = x[i]*mp mod DV
        var j = x[i]&0x7fff;
        var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
        // use am to combine the multiply-shift-add into one call
        j = i+this.m.t;
        x[j] += this.m.am(0,u0,x,i,0,this.m.t);
        // propagate carry
        while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
      }
      x.clamp();
      x.drShiftTo(this.m.t,x);
      if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
    }

    // r = "x^2/R mod m"; x != r
    function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    // r = "xy/R mod m"; x,y != r
    function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

    Montgomery.prototype.convert = montConvert;
    Montgomery.prototype.revert = montRevert;
    Montgomery.prototype.reduce = montReduce;
    Montgomery.prototype.mulTo = montMulTo;
    Montgomery.prototype.sqrTo = montSqrTo;

    // (protected) true iff this is even
    function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }

    // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
    function bnpExp(e,z) {
      if(e > 0xffffffff || e < 1) return BigInteger.ONE;
      var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
      g.copyTo(r);
      while(--i >= 0) {
        z.sqrTo(r,r2);
        if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
        else { var t = r; r = r2; r2 = t; }
      }
      return z.revert(r);
    }

    // (public) this^e % m, 0 <= e < 2^32
    function bnModPowInt(e,m) {
      var z;
      if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
      return this.exp(e,z);
    }

    // protected
    BigInteger.prototype.copyTo = bnpCopyTo;
    BigInteger.prototype.fromInt = bnpFromInt;
    BigInteger.prototype.fromString = bnpFromString;
    BigInteger.prototype.clamp = bnpClamp;
    BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
    BigInteger.prototype.drShiftTo = bnpDRShiftTo;
    BigInteger.prototype.lShiftTo = bnpLShiftTo;
    BigInteger.prototype.rShiftTo = bnpRShiftTo;
    BigInteger.prototype.subTo = bnpSubTo;
    BigInteger.prototype.multiplyTo = bnpMultiplyTo;
    BigInteger.prototype.squareTo = bnpSquareTo;
    BigInteger.prototype.divRemTo = bnpDivRemTo;
    BigInteger.prototype.invDigit = bnpInvDigit;
    BigInteger.prototype.isEven = bnpIsEven;
    BigInteger.prototype.exp = bnpExp;

    // public
    BigInteger.prototype.toString = bnToString;
    BigInteger.prototype.negate = bnNegate;
    BigInteger.prototype.abs = bnAbs;
    BigInteger.prototype.compareTo = bnCompareTo;
    BigInteger.prototype.bitLength = bnBitLength;
    BigInteger.prototype.mod = bnMod;
    BigInteger.prototype.modPowInt = bnModPowInt;

    // "constants"
    BigInteger.ZERO = nbv(0);
    BigInteger.ONE = nbv(1);

    // Copyright (c) 2005-2009  Tom Wu
    // All Rights Reserved.
    // See "LICENSE" for details.

    // Extended JavaScript BN functions, required for RSA private ops.

    // Version 1.1: new BigInteger("0", 10) returns "proper" zero
    // Version 1.2: square() API, isProbablePrime fix

    // (public)
    function bnClone() { var r = nbi(); this.copyTo(r); return r; }

    // (public) return value as integer
    function bnIntValue() {
      if(this.s < 0) {
        if(this.t == 1) return this[0]-this.DV;
        else if(this.t == 0) return -1;
      }
      else if(this.t == 1) return this[0];
      else if(this.t == 0) return 0;
      // assumes 16 < DB < 32
      return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
    }

    // (public) return value as byte
    function bnByteValue() { return (this.t==0)?this.s:(this[0]<<24)>>24; }

    // (public) return value as short (assumes DB>=16)
    function bnShortValue() { return (this.t==0)?this.s:(this[0]<<16)>>16; }

    // (protected) return x s.t. r^x < DV
    function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }

    // (public) 0 if this == 0, 1 if this > 0
    function bnSigNum() {
      if(this.s < 0) return -1;
      else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
      else return 1;
    }

    // (protected) convert to radix string
    function bnpToRadix(b) {
      if(b == null) b = 10;
      if(this.signum() == 0 || b < 2 || b > 36) return "0";
      var cs = this.chunkSize(b);
      var a = Math.pow(b,cs);
      var d = nbv(a), y = nbi(), z = nbi(), r = "";
      this.divRemTo(d,y,z);
      while(y.signum() > 0) {
        r = (a+z.intValue()).toString(b).substr(1) + r;
        y.divRemTo(d,y,z);
      }
      return z.intValue().toString(b) + r;
    }

    // (protected) convert from radix string
    function bnpFromRadix(s,b) {
      this.fromInt(0);
      if(b == null) b = 10;
      var cs = this.chunkSize(b);
      var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
      for(var i = 0; i < s.length; ++i) {
        var x = intAt(s,i);
        if(x < 0) {
          if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
          continue;
        }
        w = b*w+x;
        if(++j >= cs) {
          this.dMultiply(d);
          this.dAddOffset(w,0);
          j = 0;
          w = 0;
        }
      }
      if(j > 0) {
        this.dMultiply(Math.pow(b,j));
        this.dAddOffset(w,0);
      }
      if(mi) BigInteger.ZERO.subTo(this,this);
    }

    // (protected) alternate constructor
    function bnpFromNumber(a,b,c) {
      if("number" == typeof b) {
        // new BigInteger(int,int,RNG)
        if(a < 2) this.fromInt(1);
        else {
          this.fromNumber(a,c);
          if(!this.testBit(a-1))	// force MSB set
            this.bitwiseTo(BigInteger.ONE.shiftLeft(a-1),op_or,this);
          if(this.isEven()) this.dAddOffset(1,0); // force odd
          while(!this.isProbablePrime(b)) {
            this.dAddOffset(2,0);
            if(this.bitLength() > a) this.subTo(BigInteger.ONE.shiftLeft(a-1),this);
          }
        }
      }
      else {
        // new BigInteger(int,RNG)
        var x = new Array(), t = a&7;
        x.length = (a>>3)+1;
        b.nextBytes(x);
        if(t > 0) x[0] &= ((1<<t)-1); else x[0] = 0;
        this.fromString(x,256);
      }
    }

    // (public) convert to bigendian byte array
    function bnToByteArray() {
      var i = this.t, r = new Array();
      r[0] = this.s;
      var p = this.DB-(i*this.DB)%8, d, k = 0;
      if(i-- > 0) {
        if(p < this.DB && (d = this[i]>>p) != (this.s&this.DM)>>p)
          r[k++] = d|(this.s<<(this.DB-p));
        while(i >= 0) {
          if(p < 8) {
            d = (this[i]&((1<<p)-1))<<(8-p);
            d |= this[--i]>>(p+=this.DB-8);
          }
          else {
            d = (this[i]>>(p-=8))&0xff;
            if(p <= 0) { p += this.DB; --i; }
          }
          if((d&0x80) != 0) d |= -256;
          if(k == 0 && (this.s&0x80) != (d&0x80)) ++k;
          if(k > 0 || d != this.s) r[k++] = d;
        }
      }
      return r;
    }

    function bnEquals(a) { return(this.compareTo(a)==0); }
    function bnMin(a) { return(this.compareTo(a)<0)?this:a; }
    function bnMax(a) { return(this.compareTo(a)>0)?this:a; }

    // (protected) r = this op a (bitwise)
    function bnpBitwiseTo(a,op,r) {
      var i, f, m = Math.min(a.t,this.t);
      for(i = 0; i < m; ++i) r[i] = op(this[i],a[i]);
      if(a.t < this.t) {
        f = a.s&this.DM;
        for(i = m; i < this.t; ++i) r[i] = op(this[i],f);
        r.t = this.t;
      }
      else {
        f = this.s&this.DM;
        for(i = m; i < a.t; ++i) r[i] = op(f,a[i]);
        r.t = a.t;
      }
      r.s = op(this.s,a.s);
      r.clamp();
    }

    // (public) this & a
    function op_and(x,y) { return x&y; }
    function bnAnd(a) { var r = nbi(); this.bitwiseTo(a,op_and,r); return r; }

    // (public) this | a
    function op_or(x,y) { return x|y; }
    function bnOr(a) { var r = nbi(); this.bitwiseTo(a,op_or,r); return r; }

    // (public) this ^ a
    function op_xor(x,y) { return x^y; }
    function bnXor(a) { var r = nbi(); this.bitwiseTo(a,op_xor,r); return r; }

    // (public) this & ~a
    function op_andnot(x,y) { return x&~y; }
    function bnAndNot(a) { var r = nbi(); this.bitwiseTo(a,op_andnot,r); return r; }

    // (public) ~this
    function bnNot() {
      var r = nbi();
      for(var i = 0; i < this.t; ++i) r[i] = this.DM&~this[i];
      r.t = this.t;
      r.s = ~this.s;
      return r;
    }

    // (public) this << n
    function bnShiftLeft(n) {
      var r = nbi();
      if(n < 0) this.rShiftTo(-n,r); else this.lShiftTo(n,r);
      return r;
    }

    // (public) this >> n
    function bnShiftRight(n) {
      var r = nbi();
      if(n < 0) this.lShiftTo(-n,r); else this.rShiftTo(n,r);
      return r;
    }

    // return index of lowest 1-bit in x, x < 2^31
    function lbit(x) {
      if(x == 0) return -1;
      var r = 0;
      if((x&0xffff) == 0) { x >>= 16; r += 16; }
      if((x&0xff) == 0) { x >>= 8; r += 8; }
      if((x&0xf) == 0) { x >>= 4; r += 4; }
      if((x&3) == 0) { x >>= 2; r += 2; }
      if((x&1) == 0) ++r;
      return r;
    }

    // (public) returns index of lowest 1-bit (or -1 if none)
    function bnGetLowestSetBit() {
      for(var i = 0; i < this.t; ++i)
        if(this[i] != 0) return i*this.DB+lbit(this[i]);
      if(this.s < 0) return this.t*this.DB;
      return -1;
    }

    // return number of 1 bits in x
    function cbit(x) {
      var r = 0;
      while(x != 0) { x &= x-1; ++r; }
      return r;
    }

    // (public) return number of set bits
    function bnBitCount() {
      var r = 0, x = this.s&this.DM;
      for(var i = 0; i < this.t; ++i) r += cbit(this[i]^x);
      return r;
    }

    // (public) true iff nth bit is set
    function bnTestBit(n) {
      var j = Math.floor(n/this.DB);
      if(j >= this.t) return(this.s!=0);
      return((this[j]&(1<<(n%this.DB)))!=0);
    }

    // (protected) this op (1<<n)
    function bnpChangeBit(n,op) {
      var r = BigInteger.ONE.shiftLeft(n);
      this.bitwiseTo(r,op,r);
      return r;
    }

    // (public) this | (1<<n)
    function bnSetBit(n) { return this.changeBit(n,op_or); }

    // (public) this & ~(1<<n)
    function bnClearBit(n) { return this.changeBit(n,op_andnot); }

    // (public) this ^ (1<<n)
    function bnFlipBit(n) { return this.changeBit(n,op_xor); }

    // (protected) r = this + a
    function bnpAddTo(a,r) {
      var i = 0, c = 0, m = Math.min(a.t,this.t);
      while(i < m) {
        c += this[i]+a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      if(a.t < this.t) {
        c += a.s;
        while(i < this.t) {
          c += this[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += this.s;
      }
      else {
        c += this.s;
        while(i < a.t) {
          c += a[i];
          r[i++] = c&this.DM;
          c >>= this.DB;
        }
        c += a.s;
      }
      r.s = (c<0)?-1:0;
      if(c > 0) r[i++] = c;
      else if(c < -1) r[i++] = this.DV+c;
      r.t = i;
      r.clamp();
    }

    // (public) this + a
    function bnAdd(a) { var r = nbi(); this.addTo(a,r); return r; }

    // (public) this - a
    function bnSubtract(a) { var r = nbi(); this.subTo(a,r); return r; }

    // (public) this * a
    function bnMultiply(a) { var r = nbi(); this.multiplyTo(a,r); return r; }

    // (public) this^2
    function bnSquare() { var r = nbi(); this.squareTo(r); return r; }

    // (public) this / a
    function bnDivide(a) { var r = nbi(); this.divRemTo(a,r,null); return r; }

    // (public) this % a
    function bnRemainder(a) { var r = nbi(); this.divRemTo(a,null,r); return r; }

    // (public) [this/a,this%a]
    function bnDivideAndRemainder(a) {
      var q = nbi(), r = nbi();
      this.divRemTo(a,q,r);
      return new Array(q,r);
    }

    // (protected) this *= n, this >= 0, 1 < n < DV
    function bnpDMultiply(n) {
      this[this.t] = this.am(0,n-1,this,0,0,this.t);
      ++this.t;
      this.clamp();
    }

    // (protected) this += n << w words, this >= 0
    function bnpDAddOffset(n,w) {
      if(n == 0) return;
      while(this.t <= w) this[this.t++] = 0;
      this[w] += n;
      while(this[w] >= this.DV) {
        this[w] -= this.DV;
        if(++w >= this.t) this[this.t++] = 0;
        ++this[w];
      }
    }

    // A "null" reducer
    function NullExp() {}
    function nNop(x) { return x; }
    function nMulTo(x,y,r) { x.multiplyTo(y,r); }
    function nSqrTo(x,r) { x.squareTo(r); }

    NullExp.prototype.convert = nNop;
    NullExp.prototype.revert = nNop;
    NullExp.prototype.mulTo = nMulTo;
    NullExp.prototype.sqrTo = nSqrTo;

    // (public) this^e
    function bnPow(e) { return this.exp(e,new NullExp()); }

    // (protected) r = lower n words of "this * a", a.t <= n
    // "this" should be the larger one if appropriate.
    function bnpMultiplyLowerTo(a,n,r) {
      var i = Math.min(this.t+a.t,n);
      r.s = 0; // assumes a,this >= 0
      r.t = i;
      while(i > 0) r[--i] = 0;
      var j;
      for(j = r.t-this.t; i < j; ++i) r[i+this.t] = this.am(0,a[i],r,i,0,this.t);
      for(j = Math.min(a.t,n); i < j; ++i) this.am(0,a[i],r,i,0,n-i);
      r.clamp();
    }

    // (protected) r = "this * a" without lower n words, n > 0
    // "this" should be the larger one if appropriate.
    function bnpMultiplyUpperTo(a,n,r) {
      --n;
      var i = r.t = this.t+a.t-n;
      r.s = 0; // assumes a,this >= 0
      while(--i >= 0) r[i] = 0;
      for(i = Math.max(n-this.t,0); i < a.t; ++i)
        r[this.t+i-n] = this.am(n-i,a[i],r,0,0,this.t+i-n);
      r.clamp();
      r.drShiftTo(1,r);
    }

    // Barrett modular reduction
    function Barrett(m) {
      // setup Barrett
      this.r2 = nbi();
      this.q3 = nbi();
      BigInteger.ONE.dlShiftTo(2*m.t,this.r2);
      this.mu = this.r2.divide(m);
      this.m = m;
    }

    function barrettConvert(x) {
      if(x.s < 0 || x.t > 2*this.m.t) return x.mod(this.m);
      else if(x.compareTo(this.m) < 0) return x;
      else { var r = nbi(); x.copyTo(r); this.reduce(r); return r; }
    }

    function barrettRevert(x) { return x; }

    // x = x mod m (HAC 14.42)
    function barrettReduce(x) {
      x.drShiftTo(this.m.t-1,this.r2);
      if(x.t > this.m.t+1) { x.t = this.m.t+1; x.clamp(); }
      this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3);
      this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);
      while(x.compareTo(this.r2) < 0) x.dAddOffset(1,this.m.t+1);
      x.subTo(this.r2,x);
      while(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
    }

    // r = x^2 mod m; x != r
    function barrettSqrTo(x,r) { x.squareTo(r); this.reduce(r); }

    // r = x*y mod m; x,y != r
    function barrettMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }

    Barrett.prototype.convert = barrettConvert;
    Barrett.prototype.revert = barrettRevert;
    Barrett.prototype.reduce = barrettReduce;
    Barrett.prototype.mulTo = barrettMulTo;
    Barrett.prototype.sqrTo = barrettSqrTo;

    // (public) this^e % m (HAC 14.85)
    function bnModPow(e,m) {
      var i = e.bitLength(), k, r = nbv(1), z;
      if(i <= 0) return r;
      else if(i < 18) k = 1;
      else if(i < 48) k = 3;
      else if(i < 144) k = 4;
      else if(i < 768) k = 5;
      else k = 6;
      if(i < 8)
        z = new Classic(m);
      else if(m.isEven())
        z = new Barrett(m);
      else
        z = new Montgomery(m);

      // precomputation
      var g = new Array(), n = 3, k1 = k-1, km = (1<<k)-1;
      g[1] = z.convert(this);
      if(k > 1) {
        var g2 = nbi();
        z.sqrTo(g[1],g2);
        while(n <= km) {
          g[n] = nbi();
          z.mulTo(g2,g[n-2],g[n]);
          n += 2;
        }
      }

      var j = e.t-1, w, is1 = true, r2 = nbi(), t;
      i = nbits(e[j])-1;
      while(j >= 0) {
        if(i >= k1) w = (e[j]>>(i-k1))&km;
        else {
          w = (e[j]&((1<<(i+1))-1))<<(k1-i);
          if(j > 0) w |= e[j-1]>>(this.DB+i-k1);
        }

        n = k;
        while((w&1) == 0) { w >>= 1; --n; }
        if((i -= n) < 0) { i += this.DB; --j; }
        if(is1) {	// ret == 1, don't bother squaring or multiplying it
          g[w].copyTo(r);
          is1 = false;
        }
        else {
          while(n > 1) { z.sqrTo(r,r2); z.sqrTo(r2,r); n -= 2; }
          if(n > 0) z.sqrTo(r,r2); else { t = r; r = r2; r2 = t; }
          z.mulTo(r2,g[w],r);
        }

        while(j >= 0 && (e[j]&(1<<i)) == 0) {
          z.sqrTo(r,r2); t = r; r = r2; r2 = t;
          if(--i < 0) { i = this.DB-1; --j; }
        }
      }
      return z.revert(r);
    }

    // (public) gcd(this,a) (HAC 14.54)
    function bnGCD(a) {
      var x = (this.s<0)?this.negate():this.clone();
      var y = (a.s<0)?a.negate():a.clone();
      if(x.compareTo(y) < 0) { var t = x; x = y; y = t; }
      var i = x.getLowestSetBit(), g = y.getLowestSetBit();
      if(g < 0) return x;
      if(i < g) g = i;
      if(g > 0) {
        x.rShiftTo(g,x);
        y.rShiftTo(g,y);
      }
      while(x.signum() > 0) {
        if((i = x.getLowestSetBit()) > 0) x.rShiftTo(i,x);
        if((i = y.getLowestSetBit()) > 0) y.rShiftTo(i,y);
        if(x.compareTo(y) >= 0) {
          x.subTo(y,x);
          x.rShiftTo(1,x);
        }
        else {
          y.subTo(x,y);
          y.rShiftTo(1,y);
        }
      }
      if(g > 0) y.lShiftTo(g,y);
      return y;
    }

    // (protected) this % n, n < 2^26
    function bnpModInt(n) {
      if(n <= 0) return 0;
      var d = this.DV%n, r = (this.s<0)?n-1:0;
      if(this.t > 0)
        if(d == 0) r = this[0]%n;
        else for(var i = this.t-1; i >= 0; --i) r = (d*r+this[i])%n;
      return r;
    }

    // (public) 1/this % m (HAC 14.61)
    function bnModInverse(m) {
      var ac = m.isEven();
      if((this.isEven() && ac) || m.signum() == 0) return BigInteger.ZERO;
      var u = m.clone(), v = this.clone();
      var a = nbv(1), b = nbv(0), c = nbv(0), d = nbv(1);
      while(u.signum() != 0) {
        while(u.isEven()) {
          u.rShiftTo(1,u);
          if(ac) {
            if(!a.isEven() || !b.isEven()) { a.addTo(this,a); b.subTo(m,b); }
            a.rShiftTo(1,a);
          }
          else if(!b.isEven()) b.subTo(m,b);
          b.rShiftTo(1,b);
        }
        while(v.isEven()) {
          v.rShiftTo(1,v);
          if(ac) {
            if(!c.isEven() || !d.isEven()) { c.addTo(this,c); d.subTo(m,d); }
            c.rShiftTo(1,c);
          }
          else if(!d.isEven()) d.subTo(m,d);
          d.rShiftTo(1,d);
        }
        if(u.compareTo(v) >= 0) {
          u.subTo(v,u);
          if(ac) a.subTo(c,a);
          b.subTo(d,b);
        }
        else {
          v.subTo(u,v);
          if(ac) c.subTo(a,c);
          d.subTo(b,d);
        }
      }
      if(v.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
      if(d.compareTo(m) >= 0) return d.subtract(m);
      if(d.signum() < 0) d.addTo(m,d); else return d;
      if(d.signum() < 0) return d.add(m); else return d;
    }

    var lowprimes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997];
    var lplim = (1<<26)/lowprimes[lowprimes.length-1];

    // (public) test primality with certainty >= 1-.5^t
    function bnIsProbablePrime(t) {
      var i, x = this.abs();
      if(x.t == 1 && x[0] <= lowprimes[lowprimes.length-1]) {
        for(i = 0; i < lowprimes.length; ++i)
          if(x[0] == lowprimes[i]) return true;
        return false;
      }
      if(x.isEven()) return false;
      i = 1;
      while(i < lowprimes.length) {
        var m = lowprimes[i], j = i+1;
        while(j < lowprimes.length && m < lplim) m *= lowprimes[j++];
        m = x.modInt(m);
        while(i < j) if(m%lowprimes[i++] == 0) return false;
      }
      return x.millerRabin(t);
    }

    // (protected) true if probably prime (HAC 4.24, Miller-Rabin)
    function bnpMillerRabin(t) {
      var n1 = this.subtract(BigInteger.ONE);
      var k = n1.getLowestSetBit();
      if(k <= 0) return false;
      var r = n1.shiftRight(k);
      t = (t+1)>>1;
      if(t > lowprimes.length) t = lowprimes.length;
      var a = nbi();
      for(var i = 0; i < t; ++i) {
        //Pick bases at random, instead of starting at 2
        a.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);
        var y = a.modPow(r,this);
        if(y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
          var j = 1;
          while(j++ < k && y.compareTo(n1) != 0) {
            y = y.modPowInt(2,this);
            if(y.compareTo(BigInteger.ONE) == 0) return false;
          }
          if(y.compareTo(n1) != 0) return false;
        }
      }
      return true;
    }

    // protected
    BigInteger.prototype.chunkSize = bnpChunkSize;
    BigInteger.prototype.toRadix = bnpToRadix;
    BigInteger.prototype.fromRadix = bnpFromRadix;
    BigInteger.prototype.fromNumber = bnpFromNumber;
    BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
    BigInteger.prototype.changeBit = bnpChangeBit;
    BigInteger.prototype.addTo = bnpAddTo;
    BigInteger.prototype.dMultiply = bnpDMultiply;
    BigInteger.prototype.dAddOffset = bnpDAddOffset;
    BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
    BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
    BigInteger.prototype.modInt = bnpModInt;
    BigInteger.prototype.millerRabin = bnpMillerRabin;

    // public
    BigInteger.prototype.clone = bnClone;
    BigInteger.prototype.intValue = bnIntValue;
    BigInteger.prototype.byteValue = bnByteValue;
    BigInteger.prototype.shortValue = bnShortValue;
    BigInteger.prototype.signum = bnSigNum;
    BigInteger.prototype.toByteArray = bnToByteArray;
    BigInteger.prototype.equals = bnEquals;
    BigInteger.prototype.min = bnMin;
    BigInteger.prototype.max = bnMax;
    BigInteger.prototype.and = bnAnd;
    BigInteger.prototype.or = bnOr;
    BigInteger.prototype.xor = bnXor;
    BigInteger.prototype.andNot = bnAndNot;
    BigInteger.prototype.not = bnNot;
    BigInteger.prototype.shiftLeft = bnShiftLeft;
    BigInteger.prototype.shiftRight = bnShiftRight;
    BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
    BigInteger.prototype.bitCount = bnBitCount;
    BigInteger.prototype.testBit = bnTestBit;
    BigInteger.prototype.setBit = bnSetBit;
    BigInteger.prototype.clearBit = bnClearBit;
    BigInteger.prototype.flipBit = bnFlipBit;
    BigInteger.prototype.add = bnAdd;
    BigInteger.prototype.subtract = bnSubtract;
    BigInteger.prototype.multiply = bnMultiply;
    BigInteger.prototype.divide = bnDivide;
    BigInteger.prototype.remainder = bnRemainder;
    BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
    BigInteger.prototype.modPow = bnModPow;
    BigInteger.prototype.modInverse = bnModInverse;
    BigInteger.prototype.pow = bnPow;
    BigInteger.prototype.gcd = bnGCD;
    BigInteger.prototype.isProbablePrime = bnIsProbablePrime;

    // JSBN-specific extension
    BigInteger.prototype.square = bnSquare;

    // Expose the Barrett function
    BigInteger.prototype.Barrett = Barrett

    // BigInteger interfaces not implemented in jsbn:

    // BigInteger(int signum, byte[] magnitude)
    // double doubleValue()
    // float floatValue()
    // int hashCode()
    // long longValue()
    // static BigInteger valueOf(long val)

	// Random number generator - requires a PRNG backend, e.g. prng4.js

	// For best results, put code like
	// <body onClick='rng_seed_time();' onKeyPress='rng_seed_time();'>
	// in your main HTML document.

	var rng_state;
	var rng_pool;
	var rng_pptr;

	// Mix in a 32-bit integer into the pool
	function rng_seed_int(x) {
	  rng_pool[rng_pptr++] ^= x & 255;
	  rng_pool[rng_pptr++] ^= (x >> 8) & 255;
	  rng_pool[rng_pptr++] ^= (x >> 16) & 255;
	  rng_pool[rng_pptr++] ^= (x >> 24) & 255;
	  if(rng_pptr >= rng_psize) rng_pptr -= rng_psize;
	}

	// Mix in the current time (w/milliseconds) into the pool
	function rng_seed_time() {
	  rng_seed_int(new Date().getTime());
	}

	// Initialize the pool with junk if needed.
	if(rng_pool == null) {
	  rng_pool = new Array();
	  rng_pptr = 0;
	  var t;
	  if(typeof window !== "undefined" && window.crypto) {
		if (window.crypto.getRandomValues) {
		  // Use webcrypto if available
		  var ua = new Uint8Array(32);
		  window.crypto.getRandomValues(ua);
		  for(t = 0; t < 32; ++t)
			rng_pool[rng_pptr++] = ua[t];
		}
		else if(navigator.appName == "Netscape" && navigator.appVersion < "5") {
		  // Extract entropy (256 bits) from NS4 RNG if available
		  var z = window.crypto.random(32);
		  for(t = 0; t < z.length; ++t)
			rng_pool[rng_pptr++] = z.charCodeAt(t) & 255;
		}
	  }
	  while(rng_pptr < rng_psize) {  // extract some randomness from Math.random()
		t = Math.floor(65536 * Math.random());
		rng_pool[rng_pptr++] = t >>> 8;
		rng_pool[rng_pptr++] = t & 255;
	  }
	  rng_pptr = 0;
	  rng_seed_time();
	  //rng_seed_int(window.screenX);
	  //rng_seed_int(window.screenY);
	}

	function rng_get_byte() {
	  if(rng_state == null) {
		rng_seed_time();
		rng_state = prng_newstate();
		rng_state.init(rng_pool);
		for(rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr)
		  rng_pool[rng_pptr] = 0;
		rng_pptr = 0;
		//rng_pool = null;
	  }
	  // TODO: allow reseeding after first request
	  return rng_state.next();
	}

	function rng_get_bytes(ba) {
	  var i;
	  for(i = 0; i < ba.length; ++i) ba[i] = rng_get_byte();
	}

	function SecureRandom() {}

	SecureRandom.prototype.nextBytes = rng_get_bytes;

	// prng4.js - uses Arcfour as a PRNG

	function Arcfour() {
	  this.i = 0;
	  this.j = 0;
	  this.S = new Array();
	}

	// Initialize arcfour context from key, an array of ints, each from [0..255]
	function ARC4init(key) {
	  var i, j, t;
	  for(i = 0; i < 256; ++i)
		this.S[i] = i;
	  j = 0;
	  for(i = 0; i < 256; ++i) {
		j = (j + this.S[i] + key[i % key.length]) & 255;
		t = this.S[i];
		this.S[i] = this.S[j];
		this.S[j] = t;
	  }
	  this.i = 0;
	  this.j = 0;
	}

	function ARC4next() {
	  var t;
	  this.i = (this.i + 1) & 255;
	  this.j = (this.j + this.S[this.i]) & 255;
	  t = this.S[this.i];
	  this.S[this.i] = this.S[this.j];
	  this.S[this.j] = t;
	  return this.S[(t + this.S[this.i]) & 255];
	}

	Arcfour.prototype.init = ARC4init;
	Arcfour.prototype.next = ARC4next;

	// Plug in your RNG constructor here
	function prng_newstate() {
	  return new Arcfour();
	}

	// Pool size must be a multiple of 4 and greater than 32.
	// An array of bytes the size of the pool will be passed to init()
	var rng_psize = 256;

  BigInteger.SecureRandom = SecureRandom;
  BigInteger.BigInteger = BigInteger;
  if (typeof exports !== 'undefined') {
    exports = module.exports = BigInteger;
  } else {
    this.BigInteger = BigInteger;
    this.SecureRandom = SecureRandom;
  }

}).call(this);

},{}],461:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],462:[function(require,module,exports){
'use strict';

var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

},{}],463:[function(require,module,exports){
'use strict';

var stringify = require('./stringify');
var parse = require('./parse');
var formats = require('./formats');

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};

},{"./formats":462,"./parse":464,"./stringify":465}],464:[function(require,module,exports){
'use strict';

var utils = require('./utils');

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset);
            val = options.decoder(part.slice(pos + 1), defaults.decoder, charset);
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }
        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'undefined' ? defaults.allowDots : !!options.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (typeof options.charset !== 'undefined' && options.charset !== 'utf-8' && options.charset !== 'iso-8859-1') {
        throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    if (typeof options.charset === 'undefined') {
        options.charset = defaults.charset;
    }

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};

},{"./utils":466}],465:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var formats = require('./formats');

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly,
    charset
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            pushToArray(values, stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        } else {
            pushToArray(values, stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly,
                charset
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? defaults.allowDots : !!options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    var charset = options.charset || defaults.charset;
    if (typeof options.charset !== 'undefined' && options.charset !== 'utf-8' && options.charset !== 'iso-8859-1') {
        throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly,
            charset
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};

},{"./formats":462,"./utils":466}],466:[function(require,module,exports){
'use strict';

var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    merge: merge
};

},{}],467:[function(require,module,exports){
module.exports = Object.setPrototypeOf || ({__proto__:[]} instanceof Array ? setProtoOf : mixinProperties);

function setProtoOf(obj, proto) {
	obj.__proto__ = proto;
	return obj;
}

function mixinProperties(obj, proto) {
	for (var prop in proto) {
		if (!obj.hasOwnProperty(prop)) {
			obj[prop] = proto[prop];
		}
	}
	return obj;
}

},{}],468:[function(require,module,exports){
function Agent() {
  this._defaults = [];
}

["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects",
 "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function(fn) {
  /** Default setting for all requests from this agent */
  Agent.prototype[fn] = function(/*varargs*/) {
    this._defaults.push({fn:fn, arguments:arguments});
    return this;
  }
});

Agent.prototype._setDefaults = function(req) {
    this._defaults.forEach(function(def) {
      req[def.fn].apply(req, def.arguments);
    });
};

module.exports = Agent;

},{}],469:[function(require,module,exports){
/**
 * Root reference for iframes.
 */

var root;
if (typeof window !== 'undefined') { // Browser window
  root = window;
} else if (typeof self !== 'undefined') { // Web Worker
  root = self;
} else { // Other environments
  console.warn("Using browser-only version of superagent in non-browser environment");
  root = this;
}

var Emitter = require('component-emitter');
var RequestBase = require('./request-base');
var isObject = require('./is-object');
var ResponseBase = require('./response-base');
var Agent = require('./agent-base');

/**
 * Noop.
 */

function noop(){};

/**
 * Expose `request`.
 */

var request = exports = module.exports = function(method, url) {
  // callback
  if ('function' == typeof url) {
    return new exports.Request('GET', method).end(url);
  }

  // url first
  if (1 == arguments.length) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
}

exports.Request = Request;

/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest
      && (!root.location || 'file:' != root.location.protocol
          || !root.ActiveXObject)) {
    return new XMLHttpRequest;
  } else {
    try { return new ActiveXObject('Microsoft.XMLHTTP'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.6.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP.3.0'); } catch(e) {}
    try { return new ActiveXObject('Msxml2.XMLHTTP'); } catch(e) {}
  }
  throw Error("Browser-only version of superagent could not find XHR");
};

/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */

var trim = ''.trim
  ? function(s) { return s.trim(); }
  : function(s) { return s.replace(/(^\s*|\s*$)/g, ''); };

/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];
  for (var key in obj) {
    pushEncodedKeyValuePair(pairs, key, obj[key]);
  }
  return pairs.join('&');
}

/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */

function pushEncodedKeyValuePair(pairs, key, val) {
  if (val != null) {
    if (Array.isArray(val)) {
      val.forEach(function(v) {
        pushEncodedKeyValuePair(pairs, key, v);
      });
    } else if (isObject(val)) {
      for(var subkey in val) {
        pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
      }
    } else {
      pairs.push(encodeURIComponent(key)
        + '=' + encodeURIComponent(val));
    }
  } else if (val === null) {
    pairs.push(encodeURIComponent(key));
  }
}

/**
 * Expose serialization method.
 */

request.serializeObject = serialize;

/**
  * Parse the given x-www-form-urlencoded `str`.
  *
  * @param {String} str
  * @return {Object}
  * @api private
  */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');
    if (pos == -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] =
        decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}

/**
 * Expose parser.
 */

request.parseString = parseString;

/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'text/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  'form': 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};

/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

request.serialize = {
  'application/x-www-form-urlencoded': serialize,
  'application/json': JSON.stringify
};

/**
  * Default parsers.
  *
  *     superagent.parse['application/xml'] = function(str){
  *       return { object parsed from str };
  *     };
  *
  */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');
    if (index === -1) { // could be empty line, just skip it
      continue;
    }
    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}

/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */

function isJSON(mime) {
  // should match /json or +json
  // but not /json-seq
  return /[\/+]json($|[^-\w])/.test(mime);
}

/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */

function Response(req) {
  this.req = req;
  this.xhr = this.req.xhr;
  // responseText is accessible only if responseType is '' or 'text' and on older browsers
  this.text = ((this.req.method !='HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text')) || typeof this.xhr.responseType === 'undefined')
     ? this.xhr.responseText
     : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status;
  // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
  if (status === 1223) {
    status = 204;
  }
  this._setStatusProperties(status);
  this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.
  this.header['content-type'] = this.xhr.getResponseHeader('content-type');
  this._setHeaderProperties(this.header);

  if (null === this.text && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method != 'HEAD'
      ? this._parseBody(this.text ? this.text : this.xhr.response)
      : null;
  }
}

ResponseBase(Response.prototype);

/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody = function(str) {
  var parse = request.parse[this.type];
  if (this.req._parser) {
    return this.req._parser(this, str);
  }
  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }
  return parse && str && (str.length || str instanceof Object)
    ? parse(str)
    : null;
};

/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */

Response.prototype.toError = function(){
  var req = this.req;
  var method = req.method;
  var url = req.url;

  var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;

  return err;
};

/**
 * Expose `Response`.
 */

request.Response = Response;

/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case
  this._header = {}; // coerces header names to lowercase
  this.on('end', function(){
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch(e) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = e;
      // issue #675: return the raw response if the response parsing fails
      if (self.xhr) {
        // ie9 doesn't have 'response' property
        err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response;
        // issue #876: return the http status code if the response parsing fails
        err.status = self.xhr.status ? self.xhr.status : null;
        err.statusCode = err.status; // backwards-compat only
      } else {
        err.rawResponse = null;
        err.status = null;
      }

      return self.callback(err);
    }

    self.emit('response', res);

    var new_err;
    try {
      if (!self._isResponseOK(res)) {
        new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
      }
    } catch(custom_err) {
      new_err = custom_err; // ok() callback can throw
    }

    // #1000 don't catch errors from the callback to avoid double calling it
    if (new_err) {
      new_err.original = err;
      new_err.response = res;
      new_err.status = res.status;
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}

/**
 * Mixin `Emitter` and `RequestBase`.
 */

Emitter(Request.prototype);
RequestBase(Request.prototype);

/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function(type){
  this.set('Content-Type', request.types[type] || type);
  return this;
};

/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.accept = function(type){
  this.set('Accept', request.types[type] || type);
  return this;
};

/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.auth = function(user, pass, options){
  if (1 === arguments.length) pass = '';
  if (typeof pass === 'object' && pass !== null) { // pass is optional and can be replaced with options
    options = pass;
    pass = '';
  }
  if (!options) {
    options = {
      type: 'function' === typeof btoa ? 'basic' : 'auto',
    };
  }

  var encoder = function(string) {
    if ('function' === typeof btoa) {
      return btoa(string);
    }
    throw new Error('Cannot use basic auth, btoa is not a function');
  };

  return this._auth(user, pass, options, encoder);
};

/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.query = function(val){
  if ('string' != typeof val) val = serialize(val);
  if (val) this._query.push(val);
  return this;
};

/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.attach = function(field, file, options){
  if (file) {
    if (this._data) {
      throw Error("superagent can't mix .send() and .attach()");
    }

    this._getFormData().append(field, file, options || file.name);
  }
  return this;
};

Request.prototype._getFormData = function(){
  if (!this._formData) {
    this._formData = new root.FormData();
  }
  return this._formData;
};

/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */

Request.prototype.callback = function(err, res){
  if (this._shouldRetry(err, res)) {
    return this._retry();
  }

  var fn = this._callback;
  this.clearTimeout();

  if (err) {
    if (this._maxRetries) err.retries = this._retries - 1;
    this.emit('error', err);
  }

  fn(err, res);
};

/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */

Request.prototype.crossDomainError = function(){
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;

  err.status = this.status;
  err.method = this.method;
  err.url = this.url;

  this.callback(err);
};

// This only warns, because the request is still likely to work
Request.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function(){
  console.warn("This is not supported in browser version of superagent");
  return this;
};

// This throws, because it can't send/receive data as expected
Request.prototype.pipe = Request.prototype.write = function(){
  throw Error("Streaming is not supported in browser version of superagent");
};

/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */
Request.prototype._isHost = function _isHost(obj) {
  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
  return obj && 'object' === typeof obj && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
}

/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.end = function(fn){
  if (this._endCalled) {
    console.warn("Warning: .end() was called twice. This is not supported in superagent");
  }
  this._endCalled = true;

  // store callback
  this._callback = fn || noop;

  // querystring
  this._finalizeQueryString();

  return this._end();
};

Request.prototype._end = function() {
  var self = this;
  var xhr = (this.xhr = request.getXHR());
  var data = this._formData || this._data;

  this._setTimeouts();

  // state change
  xhr.onreadystatechange = function(){
    var readyState = xhr.readyState;
    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }
    if (4 != readyState) {
      return;
    }

    // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"
    var status;
    try { status = xhr.status } catch(e) { status = 0; }

    if (!status) {
      if (self.timedout || self._aborted) return;
      return self.crossDomainError();
    }
    self.emit('end');
  };

  // progress
  var handleProgress = function(direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;
    }
    e.direction = direction;
    self.emit('progress', e);
  };
  if (this.hasListeners('progress')) {
    try {
      xhr.onprogress = handleProgress.bind(null, 'download');
      if (xhr.upload) {
        xhr.upload.onprogress = handleProgress.bind(null, 'upload');
      }
    } catch(e) {
      // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  }

  // initiate request
  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    // see #1149
    return this.callback(err);
  }

  // CORS
  if (this._withCredentials) xhr.withCredentials = true;

  // body
  if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];
    var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
    if (!serialize && isJSON(contentType)) {
      serialize = request.serialize['application/json'];
    }
    if (serialize) data = serialize(data);
  }

  // set header fields
  for (var field in this.header) {
    if (null == this.header[field]) continue;

    if (this.header.hasOwnProperty(field))
      xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  }

  // send stuff
  this.emit('request', this);

  // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined
  xhr.send(typeof data !== 'undefined' ? data : null);
  return this;
};

request.agent = function() {
  return new Agent();
};

["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function(method) {
  Agent.prototype[method.toLowerCase()] = function(url, fn) {
    var req = new request.Request(method, url);
    this._setDefaults(req);
    if (fn) {
      req.end(fn);
    }
    return req;
  };
});

Agent.prototype.del = Agent.prototype['delete'];

/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get = function(url, data, fn) {
  var req = request('GET', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.head = function(url, data, fn) {
  var req = request('HEAD', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.options = function(url, data, fn) {
  var req = request('OPTIONS', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

function del(url, data, fn) {
  var req = request('DELETE', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
}

request['del'] = del;
request['delete'] = del;

/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch = function(url, data, fn) {
  var req = request('PATCH', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.post = function(url, data, fn) {
  var req = request('POST', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.put = function(url, data, fn) {
  var req = request('PUT', url);
  if ('function' == typeof data) (fn = data), (data = null);
  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

},{"./agent-base":468,"./is-object":470,"./request-base":471,"./response-base":472,"component-emitter":443}],470:[function(require,module,exports){
'use strict';

/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isObject(obj) {
  return null !== obj && 'object' === typeof obj;
}

module.exports = isObject;

},{}],471:[function(require,module,exports){
'use strict';

/**
 * Module of mixed-in functions shared between node and client code
 */
var isObject = require('./is-object');

/**
 * Expose `RequestBase`.
 */

module.exports = RequestBase;

/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in RequestBase.prototype) {
    obj[key] = RequestBase.prototype[key];
  }
  return obj;
}

/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.clearTimeout = function _clearTimeout(){
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  return this;
};

/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.parse = function parse(fn){
  this._parser = fn;
  return this;
};

/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.responseType = function(val){
  this._responseType = val;
  return this;
};

/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */

RequestBase.prototype.serialize = function serialize(fn){
  this._serializer = fn;
  return this;
};

/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.timeout = function timeout(options){
  if (!options || 'object' !== typeof options) {
    this._timeout = options;
    this._responseTimeout = 0;
    return this;
  }

  for(var option in options) {
    switch(option) {
      case 'deadline':
        this._timeout = options.deadline;
        break;
      case 'response':
        this._responseTimeout = options.response;
        break;
      default:
        console.warn("Unknown timeout option", option);
    }
  }
  return this;
};

/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @param {Function} [fn]
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.retry = function retry(count, fn){
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  this._retryCallback = fn;
  return this;
};

var ERROR_CODES = [
  'ECONNRESET',
  'ETIMEDOUT',
  'EADDRINFO',
  'ESOCKETTIMEDOUT'
];

/**
 * Determine if a request should be retried.
 * (Borrowed from segmentio/superagent-retry)
 *
 * @param {Error} err
 * @param {Response} [res]
 * @returns {Boolean}
 */
RequestBase.prototype._shouldRetry = function(err, res) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) {
    return false;
  }
  if (this._retryCallback) {
    try {
      var override = this._retryCallback(err, res);
      if (override === true) return true;
      if (override === false) return false;
      // undefined falls back to defaults
    } catch(e) {
      console.error(e);
    }
  }
  if (res && res.status && res.status >= 500 && res.status != 501) return true;
  if (err) {
    if (err.code && ~ERROR_CODES.indexOf(err.code)) return true;
    // Superagent timeout
    if (err.timeout && err.code == 'ECONNABORTED') return true;
    if (err.crossDomain) return true;
  }
  return false;
};

/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */

RequestBase.prototype._retry = function() {

  this.clearTimeout();

  // node
  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;

  return this._end();
};

/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */

RequestBase.prototype.then = function then(resolve, reject) {
  if (!this._fullfilledPromise) {
    var self = this;
    if (this._endCalled) {
      console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
    }
    this._fullfilledPromise = new Promise(function(innerResolve, innerReject) {
      self.end(function(err, res) {
        if (err) innerReject(err);
        else innerResolve(res);
      });
    });
  }
  return this._fullfilledPromise.then(resolve, reject);
};

RequestBase.prototype['catch'] = function(cb) {
  return this.then(undefined, cb);
};

/**
 * Allow for extension
 */

RequestBase.prototype.use = function use(fn) {
  fn(this);
  return this;
};

RequestBase.prototype.ok = function(cb) {
  if ('function' !== typeof cb) throw Error("Callback required");
  this._okCallback = cb;
  return this;
};

RequestBase.prototype._isResponseOK = function(res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};

/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

RequestBase.prototype.get = function(field){
  return this._header[field.toLowerCase()];
};

/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */

RequestBase.prototype.getHeader = RequestBase.prototype.get;

/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set = function(field, val){
  if (isObject(field)) {
    for (var key in field) {
      this.set(key, field[key]);
    }
    return this;
  }
  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};

/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field
 */
RequestBase.prototype.unset = function(field){
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};

/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name
 * @param {String|Blob|File|Buffer|fs.ReadStream} val
 * @return {Request} for chaining
 * @api public
 */
RequestBase.prototype.field = function(name, val) {
  // name should be either a string or an object.
  if (null === name || undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject(name)) {
    for (var key in name) {
      this.field(key, name[key]);
    }
    return this;
  }

  if (Array.isArray(val)) {
    for (var i in val) {
      this.field(name, val[i]);
    }
    return this;
  }

  // val should be defined now
  if (null === val || undefined === val) {
    throw new Error('.field(name, val) val can not be empty');
  }
  if ('boolean' === typeof val) {
    val = '' + val;
  }
  this._getFormData().append(name, val);
  return this;
};

/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request}
 * @api public
 */
RequestBase.prototype.abort = function(){
  if (this._aborted) {
    return this;
  }
  this._aborted = true;
  this.xhr && this.xhr.abort(); // browser
  this.req && this.req.abort(); // node
  this.clearTimeout();
  this.emit('abort');
  return this;
};

RequestBase.prototype._auth = function(user, pass, options, base64Encoder) {
  switch (options.type) {
    case 'basic':
      this.set('Authorization', 'Basic ' + base64Encoder(user + ':' + pass));
      break;

    case 'auto':
      this.username = user;
      this.password = pass;
      break;

    case 'bearer': // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', 'Bearer ' + user);
      break;
  }
  return this;
};

/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */

RequestBase.prototype.withCredentials = function(on) {
  // This is browser-only functionality. Node side is no-op.
  if (on == undefined) on = true;
  this._withCredentials = on;
  return this;
};

/**
 * Set the max redirects to `n`. Does noting in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.redirects = function(n){
  this._maxRedirects = n;
  return this;
};

/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n
 * @return {Request} for chaining
 */
RequestBase.prototype.maxResponseSize = function(n){
  if ('number' !== typeof n) {
    throw TypeError("Invalid argument");
  }
  this._maxResponseSize = n;
  return this;
};

/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */

RequestBase.prototype.toJSON = function() {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header,
  };
};

/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.send = function(data){
  var isObj = isObject(data);
  var type = this._header['content-type'];

  if (this._formData) {
    console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObj && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw Error("Can't merge these send calls");
  }

  // merge
  if (isObj && isObject(this._data)) {
    for (var key in data) {
      this._data[key] = data[key];
    }
  } else if ('string' == typeof data) {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];
    if ('application/x-www-form-urlencoded' == type) {
      this._data = this._data
        ? this._data + '&' + data
        : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObj || this._isHost(data)) {
    return this;
  }

  // default to json
  if (!type) this.type('json');
  return this;
};

/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.sortQuery = function(sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};

/**
 * Compose querystring to append to req.url
 *
 * @api private
 */
RequestBase.prototype._finalizeQueryString = function(){
  var query = this._query.join('&');
  if (query) {
    this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;
  }
  this._query.length = 0; // Makes the call idempotent

  if (this._sort) {
    var index = this.url.indexOf('?');
    if (index >= 0) {
      var queryArr = this.url.substring(index + 1).split('&');
      if ('function' === typeof this._sort) {
        queryArr.sort(this._sort);
      } else {
        queryArr.sort();
      }
      this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
    }
  }
};

// For backwards compat only
RequestBase.prototype._appendQueryString = function() {console.trace("Unsupported");}

/**
 * Invoke callback with timeout error.
 *
 * @api private
 */

RequestBase.prototype._timeoutError = function(reason, timeout, errno){
  if (this._aborted) {
    return;
  }
  var err = new Error(reason + timeout + 'ms exceeded');
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.abort();
  this.callback(err);
};

RequestBase.prototype._setTimeouts = function() {
  var self = this;

  // deadline
  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function(){
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  }
  // response timeout
  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function(){
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
};

},{"./is-object":470}],472:[function(require,module,exports){
'use strict';

/**
 * Module dependencies.
 */

var utils = require('./utils');

/**
 * Expose `ResponseBase`.
 */

module.exports = ResponseBase;

/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase(obj) {
  if (obj) return mixin(obj);
}

/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in ResponseBase.prototype) {
    obj[key] = ResponseBase.prototype[key];
  }
  return obj;
}

/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */

ResponseBase.prototype.get = function(field) {
  return this.header[field.toLowerCase()];
};

/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */

ResponseBase.prototype._setHeaderProperties = function(header){
    // TODO: moar!
    // TODO: make this a util

    // content-type
    var ct = header['content-type'] || '';
    this.type = utils.type(ct);

    // params
    var params = utils.params(ct);
    for (var key in params) this[key] = params[key];

    this.links = {};

    // links
    try {
        if (header.link) {
            this.links = utils.parseLinks(header.link);
        }
    } catch (err) {
        // ignore
    }
};

/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */

ResponseBase.prototype._setStatusProperties = function(status){
    var type = status / 100 | 0;

    // status / class
    this.status = this.statusCode = status;
    this.statusType = type;

    // basics
    this.info = 1 == type;
    this.ok = 2 == type;
    this.redirect = 3 == type;
    this.clientError = 4 == type;
    this.serverError = 5 == type;
    this.error = (4 == type || 5 == type)
        ? this.toError()
        : false;

    // sugar
    this.created = 201 == status;
    this.accepted = 202 == status;
    this.noContent = 204 == status;
    this.badRequest = 400 == status;
    this.unauthorized = 401 == status;
    this.notAcceptable = 406 == status;
    this.forbidden = 403 == status;
    this.notFound = 404 == status;
    this.unprocessableEntity = 422 == status;
};

},{"./utils":473}],473:[function(require,module,exports){
'use strict';

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

exports.type = function(str){
  return str.split(/ *; */).shift();
};

/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.params = function(str){
  return str.split(/ *; */).reduce(function(obj, str){
    var parts = str.split(/ *= */);
    var key = parts.shift();
    var val = parts.shift();

    if (key && val) obj[key] = val;
    return obj;
  }, {});
};

/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

exports.parseLinks = function(str){
  return str.split(/ *, */).reduce(function(obj, str){
    var parts = str.split(/ *; */);
    var url = parts[0].slice(1, -1);
    var rel = parts[1].split(/ *= */)[1].slice(1, -1);
    obj[rel] = url;
    return obj;
  }, {});
};

/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */

exports.cleanHeader = function(header, changesOrigin){
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header['host'];
  // secuirty
  if (changesOrigin) {
    delete header['authorization'];
    delete header['cookie'];
  }
  return header;
};

},{}],474:[function(require,module,exports){
(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);

},{}]},{},[1]);
