"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An error response to send back to a client.
 */
class ErrorResponse {
    /**
     * Create a new error response to send back to a client.
     * @param code The unique code of the error.
     * @param message The actual error message.
     */
    constructor(code, message) {
        this.errorCode = code;
        this.errorMessage = message || 'No error message available.';
    }
}
exports.ErrorResponse = ErrorResponse;
//# sourceMappingURL=error-response.js.map