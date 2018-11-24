"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The result of a single validation rule.
 * Contains an indicator if the rule was valid,
 * and if invalid, an error message.
 */
class ValidatorRuleResult {
    /**
     * Create a new validator rule result.
     * @param validationRule The validation rule this result is for.
     * @param isValid If the result is valid or not.
     * @param error The error message (if any).
     */
    constructor(rule, isValid, error) {
        this.rule = rule;
        this.isValid = isValid;
        this.error = error;
    }
}
exports.ValidatorRuleResult = ValidatorRuleResult;
//# sourceMappingURL=validator-rule-result.js.map