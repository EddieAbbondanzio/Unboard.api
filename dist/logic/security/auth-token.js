"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Authentication token proving a user is who they
 * claim they are.
 */
class AuthToken {
    /**
     * Create a new auth token to give back to a user.
     * @param userId The user's id.
     * @param loginCode The user's login code.
     * @param bearerToken The JWT.
     */
    constructor(userId, loginCode, bearerToken) {
        this.userId = userId;
        this.loginCode = loginCode;
        this.bearerToken = bearerToken;
    }
}
exports.AuthToken = AuthToken;
//# sourceMappingURL=auth-token.js.map