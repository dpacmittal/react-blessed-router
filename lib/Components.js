"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var useRouter_1 = __importDefault(require("./useRouter"));
var stylesheet = {
    bordered: {
        border: {
            type: "line",
        },
        style: {
            border: {
                fg: "blue",
            },
        },
    },
    magentaBackground: {
        style: {
            bg: "magenta",
        },
    },
};
exports.Route = function (_a) {
    var children = _a.children, path = _a.path;
    var route = useRouter_1.default().route;
    //console.log("Current url is ", currentUrl);
    if (route == path)
        return react_1.default.createElement(react_1.default.Fragment, null, children);
    return null;
};
exports.Link = function (_a) {
    var to = _a.to, children = _a.children;
    var _b = useRouter_1.default(), route = _b.route, goto = _b.goto;
    function switchRoute() {
        if (to == route)
            return;
        //console.log("Setting current url to ", to);
        if (to && goto)
            goto(to);
    }
    return (
    // @ts-ignore
    react_1.default.createElement("blessed-button", { class: stylesheet.bordered, shrink: true, mouse: true, onPress: switchRoute, onClick: switchRoute, clickable: true }, children));
};
