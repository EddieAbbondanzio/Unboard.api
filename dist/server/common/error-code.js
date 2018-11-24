"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Error codes that are returned back to the client.
 * Numbers are defined to ensure values never change unless
 * explicitly desired.
 */
var ErrorCode;
(function (ErrorCode) {
    /**
     * An unknown error occured. These are bad...
     */
    ErrorCode[ErrorCode["Unknown"] = 1] = "Unknown";
    /**
     * A restricted access point was invoked, but no authentication
     * was provided.
     */
    ErrorCode[ErrorCode["NoAuthentication"] = 2] = "NoAuthentication";
    /**
     * The authentication of the request was either bad, or poorly
     * formatted.
     */
    ErrorCode[ErrorCode["BadAuthentication"] = 3] = "BadAuthentication";
    /**
     * The request recieved by the server was of bad form, or
     * invalid.
     */
    ErrorCode[ErrorCode["BadRequest"] = 4] = "BadRequest";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
//# sourceMappingURL=error-code.js.map