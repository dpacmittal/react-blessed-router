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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var DefaultContext = { currentUrl: "/", setCurrentUrl: null };
var RouteContext = react_1.createContext(DefaultContext);
var stylesheet = {
    bordered: {
        border: {
            type: "line"
        },
        style: {
            border: {
                fg: "blue"
            }
        }
    },
    magentaBackground: {
        style: {
            bg: "magenta"
        }
    }
};
exports.Route = function (_a) {
    var children = _a.children, path = _a.path, props = __rest(_a, ["children", "path"]);
    var currentUrl = react_1.useContext(RouteContext).currentUrl;
    //console.log("Current url is ", currentUrl);
    if (currentUrl == path)
        return react_1.default.createElement("blessed-box", __assign({}, props), children);
    return null;
};
exports.Link = function (_a) {
    var to = _a.to, children = _a.children;
    var _b = react_1.useContext(RouteContext), currentUrl = _b.currentUrl, setCurrentUrl = _b.setCurrentUrl;
    function switchRoute() {
        if (to == currentUrl)
            return null;
        //console.log("Setting current url to ", to);
        setCurrentUrl(to);
    }
    return (react_1.default.createElement("blessed-button", { class: stylesheet.bordered, shrink: true, mouse: true, onPress: switchRoute, onClick: switchRoute, clickable: true }, children));
};
var ReactBlessedRouter = function (_a) {
    var defaultUrl = _a.defaultUrl, children = _a.children;
    var _b = react_1.useState(defaultUrl || "/"), currentUrl = _b[0], setCurrentUrl = _b[1];
    return (react_1.default.createElement(RouteContext.Provider, { value: { currentUrl: currentUrl, setCurrentUrl: setCurrentUrl } }, children));
};
exports.default = ReactBlessedRouter;
