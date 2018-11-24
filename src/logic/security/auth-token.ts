
/**
 * Authentication token proving a user is who they
 * claim they are.
 */
export class AuthToken {
    /**
     * The unique user id of the owner.
     */
    public userId: number;

    /**
     * The unique login id of the token.
     */
    public loginCode: string;

    /**
     * The raw JWT that the user must always provide
     * with their requests.
     */
    public bearerToken: string;

    /**
     * Create a new auth token to give back to a user.
     * @param userId The user's id.
     * @param loginCode The user's login code.
     * @param bearerToken The JWT.
     */
    constructor(userId: number, loginCode: string, bearerToken: string) {
        this.userId      = userId;
        this.loginCode   = loginCode;
        this.bearerToken = bearerToken;
    }
}