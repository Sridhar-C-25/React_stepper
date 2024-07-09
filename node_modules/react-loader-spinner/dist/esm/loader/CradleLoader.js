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
import React from 'react';
var getDefaultStyle = function (visible) { return ({
    display: visible ? 'flex' : 'none'
}); };
var CradleLoader = function (_a) {
    var _b = _a.ariaLabel, ariaLabel = _b === void 0 ? 'cradle-loading' : _b, wrapperStyle = _a.wrapperStyle, wrapperClass = _a.wrapperClass, _c = _a.visible, visible = _c === void 0 ? true : _c;
    return (React.createElement("div", { "aria-label": ariaLabel, role: "presentation", style: __assign(__assign({}, getDefaultStyle(visible)), wrapperStyle), className: "container ".concat(wrapperClass), "data-testid": "cradle-loading" },
        React.createElement("div", { className: "react-spinner-loader-swing" },
            React.createElement("div", { className: "react-spinner-loader-swing-l" }),
            React.createElement("div", null),
            React.createElement("div", null),
            React.createElement("div", null),
            React.createElement("div", null),
            React.createElement("div", null),
            React.createElement("div", { className: "react-spinner-loader-swing-r" })),
        React.createElement("div", { className: "react-spinner-loader-shadow" },
            React.createElement("div", { className: "react-spinner-loader-shadow-l" }),
            React.createElement("div", null),
            React.createElement("div", null),
            React.createElement("div", null),
            React.createElement("div", null),
            React.createElement("div", null),
            React.createElement("div", { className: "react-spinner-loader-shadow-r" }))));
};
export default CradleLoader;
