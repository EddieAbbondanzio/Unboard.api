import { UserRegistration } from "./user-registration";
import { NOTIMP } from "dns";

/**
 * Standard user of the website.
 */
export class User {
    /**
     * The user's contact email.
     */
    public email!: string;

    /**
     * The hash of the user's password.
     */
    public passwordHash!: string;

    /**
     * The user's real name.
     */
    public name!: string;

    /**
     * Create a new user from their registration form they provided.
     * @param userRegistration The registration to use.
     * @returns The newly generated user.
     */
    public static async fromRegistration(userRegistration: UserRegistration): Promise<User> {
        throw new Error('');
    }
}