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
var RotatingSquare = function (_a) {
    var _b = _a.style, style = _b === void 0 ? {} : _b, _c = _a.wrapperClass, wrapperClass = _c === void 0 ? '' : _c, _d = _a.color, color = _d === void 0 ? 'red' : _d, number = _a.strokeWidth, _e = _a.height, height = _e === void 0 ? 100 : _e, _f = _a.width, width = _f === void 0 ? 100 : _f, _g = _a.strokeWidth, strokeWidth = _g === void 0 ? 4 : _g, _h = _a.ariaLabel, ariaLabel = _h === void 0 ? 'rotating-square-loading' : _h, _j = _a.wrapperStyle, wrapperStyle = _j === void 0 ? {} : _j, _k = _a.visible, visible = _k === void 0 ? true : _k;
    return (react_1.default.createElement("div", { style: __assign(__assign({}, getDefaultStyle(visible)), wrapperStyle), className: wrapperClass, "data-testid": "rotating-square-wrapper" },
        react_1.default.createElement("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 100 100", enableBackground: "new 0 0 100 100", height: "".concat(height), width: "".concat(width), "aria-label": ariaLabel, "data-testid": "rotating-square-svg", xmlSpace: "preserve" },
            react_1.default.createElement("rect", { fill: "none", stroke: color, strokeWidth: strokeWidth, x: "25", y: "25", width: "50", height: "50" },
                react_1.default.createElement("animateTransform", { attributeName: "transform", dur: "0.5s", from: "0 50 50", to: "180 50 50", type: "rotate", id: "strokeBox", attributeType: "XML", begin: "rectBox.end" })),
            react_1.default.createElement("rect", { x: "27", y: "27", fill: color, width: "46", height: "50" },
                react_1.default.createElement("animate", { attributeName: "height", dur: "1.3s", attributeType: "XML", from: "50", to: "0", id: "rectBox", fill: "freeze", begin: "0s;strokeBox.end" })))));
};
exports.default = RotatingSquare;
