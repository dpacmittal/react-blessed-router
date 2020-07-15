"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var DefaultContext = { currentUrl: "/", setCurrentUrl: null };
exports.RouteContext = react_1.createContext(DefaultContext);
