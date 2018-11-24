/**
 * Registration info for a new user.
 */
export class UserRegistration {
    /**
     * Their contact email.
     */
    public email: string;

    /**
     * Their desired password.
     */
    public password: string;

    /**
     * The user's actual name.
     */
    public name: string;

    constructor(email?: string, password?: string, name?: string) {
        this.email    = email    || '';
        this.password = password || '';
        this.name     = name     || '';
    }
}