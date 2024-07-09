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
var Triangle = function (_a) {
    var _b = _a.height, height = _b === void 0 ? 80 : _b, _c = _a.width, width = _c === void 0 ? 80 : _c, _d = _a.color, color = _d === void 0 ? 'green' : _d, _e = _a.ariaLabel, ariaLabel = _e === void 0 ? 'triangle-loading' : _e, wrapperStyle = _a.wrapperStyle, wrapperClass = _a.wrapperClass, _f = _a.visible, visible = _f === void 0 ? true : _f;
    return (React.createElement("div", { role: "presentation", style: __assign(__assign({}, getDefaultStyle(visible)), wrapperStyle), className: "react-spinner-loader-svg ".concat(wrapperClass), "data-testid": "triangle-loading" },
        React.createElement("svg", { id: "triangle", width: width, height: height, viewBox: "-3 -4 39 39", "aria-label": ariaLabel, "data-testid": "triangle-svg" },
            React.createElement("polygon", { fill: "transparent", stroke: color, strokeWidth: "1", points: "16,0 32,32 0,32" }))));
};
export default Triangle;
