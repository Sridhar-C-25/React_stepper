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
var MutatingDots = function (_a) {
    var _b = _a.height, height = _b === void 0 ? 90 : _b, _c = _a.width, width = _c === void 0 ? 80 : _c, _d = _a.radius, radius = _d === void 0 ? 12.5 : _d, _e = _a.color, color = _e === void 0 ? 'green' : _e, _f = _a.secondaryColor, secondaryColor = _f === void 0 ? 'blue' : _f, _g = _a.ariaLabel, ariaLabel = _g === void 0 ? 'mutating-dots-loading' : _g, wrapperStyle = _a.wrapperStyle, wrapperClass = _a.wrapperClass, _h = _a.visible, visible = _h === void 0 ? true : _h;
    return (React.createElement("div", { style: __assign(__assign({}, getDefaultStyle(visible)), wrapperStyle), className: wrapperClass, "data-testid": "mutating-dots-loading" },
        React.createElement("svg", { id: "goo-loader", width: width, height: height, "aria-label": ariaLabel, "data-testid": "mutating-dots-svg" },
            React.createElement("filter", { id: "fancy-goo" },
                React.createElement("feGaussianBlur", { in: "SourceGraphic", stdDeviation: "6", result: "blur" }),
                React.createElement("feColorMatrix", { in: "blur", mode: "matrix", values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9", result: "goo" }),
                React.createElement("feComposite", { in: "SourceGraphic", in2: "goo", operator: "atop" })),
            React.createElement("g", { filter: "url(#fancy-goo)" },
                React.createElement("animateTransform", { id: "mainAnim", attributeName: "transform", attributeType: "XML", type: "rotate", from: "0 50 50", to: "359 50 50", dur: "1.2s", repeatCount: "indefinite" }),
                React.createElement("circle", { cx: "50%", cy: "40", r: radius, fill: color },
                    React.createElement("animate", { id: "cAnim1", attributeType: "XML", attributeName: "cy", dur: "0.6s", begin: "0;cAnim1.end+0.2s", calcMode: "spline", values: "40;20;40", keyTimes: "0;0.3;1", keySplines: "0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1" })),
                React.createElement("circle", { cx: "50%", cy: "60", r: radius, fill: secondaryColor },
                    React.createElement("animate", { id: "cAnim2", attributeType: "XML", attributeName: "cy", dur: "0.6s", begin: "0.4s;cAnim2.end+0.2s", calcMode: "spline", values: "60;80;60", keyTimes: "0;0.3;1", keySplines: "0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1" }))))));
};
export default MutatingDots;
