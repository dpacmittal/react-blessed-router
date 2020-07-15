"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var RouteContext_1 = require("./RouteContext");
function useRouter() {
    var Ctx = react_1.useContext(RouteContext_1.RouteContext);
    return {
        route: Ctx.currentUrl,
        goto: Ctx.setCurrentUrl,
    };
}
exports.default = useRouter;
