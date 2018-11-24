"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The results of a validator performing a
 * validation on an object.
 */
class ValidatorResult {
    /**
     * Create a new validator result.
     * @param value The value that was validated.
     * @param ruleResults The results of the rules applied.
     */
    constructor(value, ruleResults) {
        this.value = value;
        this.ruleResults = ruleResults;
        //If any rules are invalid, then the results are too.
        this.isValid = ruleResults.map(r => r.isValid).findIndex(r => r == false) == -1;
    }
}
exports.ValidatorResult = ValidatorResult;
//# sourceMappingURL=validator-result.js.map