/**
 * Credentials for a user to log in with.
 */
export class UserCredentials {
    /**
     * The accounts email.
     */
    public email: string;

    /**
     * The accounts password.
     */
    public password: string;

    /**
     * Create a new set of login credentials.
     * @param email Email of the account.
     * @param password Password to authenticate with.
     */
    constructor(email?: string, password?: string) {
        this.email    = email || '';
        this.password = password || '';
    }
}