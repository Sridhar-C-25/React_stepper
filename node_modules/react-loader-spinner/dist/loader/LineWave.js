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
    display: visible ? 'flex' : 'none',
}); };
var LineWave = function (_a) {
    var _b = _a.wrapperStyle, wrapperStyle = _b === void 0 ? {} : _b, _c = _a.visible, visible = _c === void 0 ? true : _c, _d = _a.wrapperClass, wrapperClass = _d === void 0 ? '' : _d, _e = _a.height, height = _e === void 0 ? 100 : _e, _f = _a.width, width = _f === void 0 ? 100 : _f, _g = _a.color, color = _g === void 0 ? 'red' : _g, _h = _a.ariaLabel, ariaLabel = _h === void 0 ? 'line-wave' : _h, firstLineColor = _a.firstLineColor, middleLineColor = _a.middleLineColor, lastLineColor = _a.lastLineColor;
    return (react_1.default.createElement("div", { style: __assign(__assign({}, getDefaultStyle(visible)), wrapperStyle), className: wrapperClass, "data-testid": "line-wave-wrapper" },
        react_1.default.createElement("svg", { version: "1.1", height: "".concat(height), width: "".concat(width), xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 100 100", enableBackground: "new 0 0 0 0", xmlSpace: "preserve", "aria-label": ariaLabel, "data-testid": "line-wave-svg" },
            react_1.default.createElement("rect", { x: "20", y: "50", width: "4", height: "10", fill: firstLineColor || color, "data-testid": "line-wave-svg-first-line" },
                react_1.default.createElement("animateTransform", { attributeType: "xml", attributeName: "transform", type: "translate", values: "0 0; 0 20; 0 0", begin: "0", dur: "0.6s", repeatCount: "indefinite" })),
            react_1.default.createElement("rect", { x: "30", y: "50", width: "4", height: "10", fill: middleLineColor || color, "data-testid": "line-wave-svg-middle-line" },
                react_1.default.createElement("animateTransform", { attributeType: "xml", attributeName: "transform", type: "translate", values: "0 0; 0 20; 0 0", begin: "0.2s", dur: "0.6s", repeatCount: "indefinite" })),
            react_1.default.createElement("rect", { x: "40", y: "50", width: "4", height: "10", fill: lastLineColor || color, "data-testid": "line-wave-svg-last-line" },
                react_1.default.createElement("animateTransform", { attributeType: "xml", attributeName: "transform", type: "translate", values: "0 0; 0 20; 0 0", begin: "0.4s", dur: "0.6s", repeatCount: "indefinite" })))));
};
exports.default = LineWave;
