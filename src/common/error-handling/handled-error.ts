import { IConstructor } from '../i-constructor';

/**
 * A wrapped error that provides some methods for handling
 * it appropriately.
 */
export class HandledError<T extends Error> {
    /**
     * The wrapped exception
     */
    public error: T;

    /**
     * If the error was caught already.
     */
    private wasCaught: boolean;

    /**
     * Create a new wrapped error.
     * @param error The error to wrap.
     */
    constructor(error: T) {
        this.error = error;
        this.wasCaught = false;
    }

    /**
     * Catch the error only if it is a specific type.
     * @param constructor The constructor of the error type to catch.
     * @param catcher The catch method to invoke if the error matches.
     */
    public catch<U extends Error>(constructor: IConstructor<U>, catcher: (err: U) => void): HandledError<T> {
        //Stop the error was already caught.
        if(this.wasCaught){
            return this;
        }
        else if(this.error instanceof constructor) {
            this.wasCaught = true;
            catcher(<U>(this.error as unknown));
        }

        return this;
    };

    /**
     * If the error hasn't been caught yet, then this method will
     * catch it.
     * @param catcher The catch method to invoke if the error 
     * has not been caught yet.
     */
    public otherwise(catcher: (err: Error) => void): void {
        if(!this.wasCaught) {
            catcher(this.error);
        }
    }

    /**
     * If the error hasn't been caught at all, throw it
     * again so another try / catch will have to handle it.
     */
    public raise(): void|never {
        if(!this.wasCaught){
            throw this.error;
        }
    }
}