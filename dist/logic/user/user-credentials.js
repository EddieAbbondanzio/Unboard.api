"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Credentials for a user to log in with.
 */
class UserCredentials {
    /**
     * Create a new set of login credentials.
     * @param email Email of the account.
     * @param password Password to authenticate with.
     */
    constructor(email, password) {
        this.email = email || '';
        this.password = password || '';
    }
}
exports.UserCredentials = UserCredentials;
//# sourceMappingURL=user-credentials.js.map