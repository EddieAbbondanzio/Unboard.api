import { ArgumentError } from "ts-dotnet-errors";

/**
 * Helper methods for generating random values.
 */
export module RandomUtils {
    /**
     * Generate a random string of fixed length.
     * @param length The length of the string.
     */
    export function generateString(length: number): string {
        if (length < 1) {
            throw new ArgumentError('length must be greater than 1');
        }

        let text = '';
        let possibleChars = 'ABCDEFGHIJKLMNPQRSTUVWXYZ0123456789'

        for (let i = 0; i < length; i++) {
            text += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
        }

        return text;
    }
}