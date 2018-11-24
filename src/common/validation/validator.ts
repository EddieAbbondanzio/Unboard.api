import { IValidatorRule } from "./i-validator-rule";
import { ValidatorResult } from "./validator-result";
import { ArgumentNullError } from "ts-dotnet-errors";
import { ValidatorRuleResult } from "./validator-rule-result";

/**
 * Interface for validators to implement. They provide a way
 * to check objects to ensure good data.
 */
export abstract class Validator<T> {
    /**
     * The list of rules that belongs to this validator.
     */
    public abstract rules: IValidatorRule<T>[];
    
    /**
     * Validate the entity against the validator.
     * @param entity The entity to validate.
     * @returns The validation result.
     */
    public validate(entity: T): ValidatorResult<T> {
        if(entity == null){
            throw new ArgumentNullError('entity');
        }

        return new ValidatorResult<T>(entity, this.rules.map(r => r.validate(entity)));
    }
}