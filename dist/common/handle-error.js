"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handled_error_1 = require("./handled-error");
/**
 * Handle an error that was caught in a try / catch.
 * @param error The error to handle.
 */
function default_1(error) {
    return new handled_error_1.HandledError(error);
}
exports.default = default_1;
//# sourceMappingURL=handle-error.js.map