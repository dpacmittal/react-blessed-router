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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var useRouter_1 = __importDefault(require("./useRouter"));
exports.Route = function (_a) {
    var children = _a.children, path = _a.path;
    var route = useRouter_1.default().route;
    if (route == path)
        return react_1.default.createElement(react_1.default.Fragment, null, children);
    return null;
};
exports.Link = function (_a) {
    var to = _a.to, children = _a.children, props = __rest(_a, ["to", "children"]);
    var _b = useRouter_1.default(), route = _b.route, goto = _b.goto;
    function switchRoute() {
        if (to == route)
            return;
        if (to && goto)
            goto(to);
    }
    return (
    // @ts-ignore
    react_1.default.createElement("blessed-button", __assign({ shrink: true, mouse: true, onPress: switchRoute, onClick: switchRoute, width: "100%", style: {
            border: {
                fg: "blue",
            },
        }, clickable: true, border: { type: "line" } }, props), children));
};
