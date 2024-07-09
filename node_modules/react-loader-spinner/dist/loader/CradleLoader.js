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
var CradleLoader = function (_a) {
    var _b = _a.ariaLabel, ariaLabel = _b === void 0 ? 'cradle-loading' : _b, wrapperStyle = _a.wrapperStyle, wrapperClass = _a.wrapperClass, _c = _a.visible, visible = _c === void 0 ? true : _c;
    return (react_1.default.createElement("div", { "aria-label": ariaLabel, role: "presentation", style: __assign(__assign({}, getDefaultStyle(visible)), wrapperStyle), className: "container ".concat(wrapperClass), "data-testid": "cradle-loading" },
        react_1.default.createElement("div", { className: "react-spinner-loader-swing" },
            react_1.default.createElement("div", { className: "react-spinner-loader-swing-l" }),
            react_1.default.createElement("div", null),
            react_1.default.createElement("div", null),
            react_1.default.createElement("div", null),
            react_1.default.createElement("div", null),
            react_1.default.createElement("div", null),
            react_1.default.createElement("div", { className: "react-spinner-loader-swing-r" })),
        react_1.default.createElement("div", { className: "react-spinner-loader-shadow" },
            react_1.default.createElement("div", { className: "react-spinner-loader-shadow-l" }),
            react_1.default.createElement("div", null),
            react_1.default.createElement("div", null),
            react_1.default.createElement("div", null),
            react_1.default.createElement("div", null),
            react_1.default.createElement("div", null),
            react_1.default.createElement("div", { className: "react-spinner-loader-shadow-r" }))));
};
exports.default = CradleLoader;
