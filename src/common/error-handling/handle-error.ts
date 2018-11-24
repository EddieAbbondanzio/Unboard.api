import { HandledError } from "./handled-error";

/**
 * Handle an error that was caught in a try / catch.
 * @param error The error to handle.
 */
export default function<T extends Error>(error: T) {
    return new HandledError<T>(error);
}