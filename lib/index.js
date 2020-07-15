"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var RouteContext_1 = require("./RouteContext");
var useRouter_1 = __importDefault(require("./useRouter"));
exports.useRouter = useRouter_1.default;
var Components_1 = require("./Components");
exports.Link = Components_1.Link;
exports.Route = Components_1.Route;
var ReactBlessedRouter = function (_a) {
    var defaultUrl = _a.defaultUrl, children = _a.children;
    var _b = react_1.useState(defaultUrl || "/"), currentUrl = _b[0], setCurrentUrl = _b[1];
    return (react_1.default.createElement(RouteContext_1.RouteContext.Provider, { value: { currentUrl: currentUrl, setCurrentUrl: setCurrentUrl } }, children));
};
exports.default = ReactBlessedRouter;
