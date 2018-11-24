"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator_result_1 = require("./validator-result");
const ts_dotnet_errors_1 = require("ts-dotnet-errors");
/**
 * Interface for validators to implement. They provide a way
 * to check objects to ensure good data.
 */
class Validator {
    /**
     * Validate the entity against the validator.
     * @param entity The entity to validate.
     * @returns The validation result.
     */
    validate(entity) {
        if (entity == null) {
            throw new ts_dotnet_errors_1.ArgumentNullError('entity');
        }
        return new validator_result_1.ValidatorResult(entity, this.rules.map(r => r.validate(entity)));
    }
}
exports.Validator = Validator;
//# sourceMappingURL=validator.js.map