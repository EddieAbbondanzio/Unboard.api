"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A wrapped error that provides some methods for handling
 * it appropriately.
 */
class HandledError {
    /**
     * Create a new wrapped error.
     * @param error The error to wrap.
     */
    constructor(error) {
        this.error = error;
        this.wasCaught = false;
    }
    /**
     * Catch the error only if it is a specific type.
     * @param constructor The constructor of the error type to catch.
     * @param catcher The catch method to invoke if the error matches.
     */
    catch(constructor, catcher) {
        //Stop the error was already caught.
        if (this.wasCaught) {
            return this;
        }
        else if (this.error instanceof constructor) {
            this.wasCaught = true;
            catcher(this.error);
        }
        return this;
    }
    ;
    /**
     * If the error hasn't been caught yet, then this method will
     * catch it.
     * @param catcher The catch method to invoke if the error
     * has not been caught yet.
     */
    otherwise(catcher) {
        if (!this.wasCaught) {
            catcher(this.error);
        }
    }
    /**
     * If the error hasn't been caught at all, throw it
     * again so another try / catch will have to handle it.
     */
    raise() {
        if (!this.wasCaught) {
            throw this.error;
        }
    }
}
exports.HandledError = HandledError;
//# sourceMappingURL=handled-error.js.map