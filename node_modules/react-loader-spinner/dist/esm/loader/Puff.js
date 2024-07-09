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
export var Puff = function (_a) {
    var _b = _a.height, height = _b === void 0 ? 80 : _b, _c = _a.width, width = _c === void 0 ? 80 : _c, _d = _a.radius, radius = _d === void 0 ? 1 : _d, _e = _a.color, color = _e === void 0 ? 'green' : _e, _f = _a.ariaLabel, ariaLabel = _f === void 0 ? 'puff-loading' : _f, wrapperStyle = _a.wrapperStyle, wrapperClass = _a.wrapperClass, _g = _a.visible, visible = _g === void 0 ? true : _g;
    return (React.createElement("div", { style: __assign(__assign({}, getDefaultStyle(visible)), wrapperStyle), className: wrapperClass, "data-testid": "puff-loading" },
        React.createElement("svg", { width: width, height: height, viewBox: "0 0 44 44", xmlns: "http://www.w3.org/2000/svg", stroke: color, "aria-label": ariaLabel, "data-testid": "puff-svg" },
            React.createElement("g", { fill: "none", fillRule: "evenodd", strokeWidth: "2" },
                React.createElement("circle", { cx: "22", cy: "22", r: radius },
                    React.createElement("animate", { attributeName: "r", begin: "0s", dur: "1.8s", values: "1; 20", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.165, 0.84, 0.44, 1", repeatCount: "indefinite" }),
                    React.createElement("animate", { attributeName: "strokeOpacity", begin: "0s", dur: "1.8s", values: "1; 0", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.3, 0.61, 0.355, 1", repeatCount: "indefinite" })),
                React.createElement("circle", { cx: "22", cy: "22", r: radius },
                    React.createElement("animate", { attributeName: "r", begin: "-0.9s", dur: "1.8s", values: "1; 20", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.165, 0.84, 0.44, 1", repeatCount: "indefinite" }),
                    React.createElement("animate", { attributeName: "strokeOpacity", begin: "-0.9s", dur: "1.8s", values: "1; 0", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.3, 0.61, 0.355, 1", repeatCount: "indefinite" }))))));
};
export default Puff;
