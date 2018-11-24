"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_dotnet_errors_1 = require("ts-dotnet-errors");
/**
 * Require the user to be authenticated with a bearer token,
 * or else their request will be rejected.
 */
function Authenticated() {
    return function (target, propertyKey, descriptor) {
        throw new ts_dotnet_errors_1.NotImplementedError();
    };
}
exports.Authenticated = Authenticated;
//# sourceMappingURL=authenticate.js.map