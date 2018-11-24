import { ValidatorRuleResult } from "./validator-rule-result";

/**
 * The results of a validator performing a 
 * validation on an object.
 */
export class ValidatorResult<T> {
    /**
     * The value that was validated.
     */
    public value: T;

    /**
     * If the object was valid.
     */
    public isValid: boolean;

    /**
     * The result of each validation rule that
     * was validated.
     */
    public ruleResults: ValidatorRuleResult<T>[];

    /**
     * Create a new validator result.
     * @param value The value that was validated.
     * @param ruleResults The results of the rules applied.
     */
    constructor(value: T, ruleResults: ValidatorRuleResult<T>[]) {
        this.value       = value;
        this.ruleResults = ruleResults;

        //If any rules are invalid, then the results are too.
        this.isValid = ruleResults.map(r => r.isValid).findIndex(r => r == false) == -1;
    }
}