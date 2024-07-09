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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var getDefaultStyle = function (visible) { return ({
    display: visible ? 'flex' : 'none'
}); };
var RevolvingDot = function (_a) {
    var _b = _a.height, height = _b === void 0 ? 80 : _b, _c = _a.width, width = _c === void 0 ? 80 : _c, _d = _a.radius, radius = _d === void 0 ? 6 : _d, _e = _a.color, color = _e === void 0 ? 'green' : _e, _f = _a.ariaLabel, ariaLabel = _f === void 0 ? 'revolving-dot-loading' : _f, wrapperStyle = _a.wrapperStyle, wrapperClass = _a.wrapperClass, _g = _a.visible, visible = _g === void 0 ? true : _g;
    return (react_1.default.createElement("div", { style: __assign(__assign({}, getDefaultStyle(visible)), wrapperStyle), className: wrapperClass, "data-testid": "revolving-dot-loading" },
        react_1.default.createElement("svg", { version: "1.1", width: width, height: height, xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", "aria-label": ariaLabel, "data-testid": "revolving-dot-svg" },
            react_1.default.createElement("circle", { fill: "none", stroke: color, strokeWidth: "4", cx: "50", cy: "50", r: Number("".concat(radius)) + 38, style: { opacity: 0.5 } }),
            react_1.default.createElement("circle", { fill: color, stroke: color, strokeWidth: "3", cx: "8", cy: "54", r: radius },
                react_1.default.createElement("animateTransform", { attributeName: "transform", dur: "2s", type: "rotate", from: "0 50 48", to: "360 50 52", repeatCount: "indefinite" })))));
};
exports.default = RevolvingDot;
