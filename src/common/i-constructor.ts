/**
 * Interface to represent a constructor method. This is
 * used by the error handler for passing constructors.
 */
export interface IConstructor<T> {
    new (...args: any[]): T;
}