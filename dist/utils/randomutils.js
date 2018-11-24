"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_dotnet_errors_1 = require("ts-dotnet-errors");
/**
 * Helper methods for generating random values.
 */
var RandomUtils;
(function (RandomUtils) {
    /**
     * Generate a random string of fixed length.
     * @param length The length of the string.
     */
    function generateString(length) {
        if (length < 1) {
            throw new ts_dotnet_errors_1.ArgumentError('length must be greater than 1');
        }
        let text = '';
        let possibleChars = 'ABCDEFGHIJKLMNPQRSTUVWXYZ0123456789';
        for (let i = 0; i < length; i++) {
            text += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
        }
        return text;
    }
    RandomUtils.generateString = generateString;
})(RandomUtils = exports.RandomUtils || (exports.RandomUtils = {}));
//# sourceMappingURL=randomutils.js.map