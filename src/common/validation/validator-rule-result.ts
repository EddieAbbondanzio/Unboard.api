import { IValidatorRule } from "./i-validator-rule";

/**
 * The result of a single validation rule.
 * Contains an indicator if the rule was valid,
 * and if invalid, an error message.
 */
export class ValidatorRuleResult<T> {
    /**
     * The rule that created this result.
     */
    public rule: IValidatorRule<T>;

    /**
     * If the rule was met.
     */
    public isValid: boolean;

    /**
     * The error message if any.
     */
    public error?: string;

    /**
     * Create a new validator rule result.
     * @param validationRule The validation rule this result is for.
     * @param isValid If the result is valid or not.
     * @param error The error message (if any).
     */
    constructor(rule: IValidatorRule<T>, isValid: boolean, error?: string) {
        this.rule    = rule;
        this.isValid = isValid;
        this.error   = error;
    }
}