import { injectable } from "inversify";
import { UserCredentials } from "../user/user-credentials";
import { User } from "../user/user";
import { NotImplementedError } from "ts-dotnet-errors";
import { AuthToken } from "../security/auth-token";
import { UserRegistration } from "../user/user-registration";

/**
 * Authentication service to handle logging in, and out, and registering
 * user's with the site.
 */
@injectable()
export class AuthService {
    /**
     * Log in a user using the credentials they supplied.
     * @param userCreds The user's email, and password.
     * @returns An issued auth token if successful.
     */
    public async loginUser(userCreds: UserCredentials): Promise<AuthToken> {
        throw new NotImplementedError();
    }

    /**
     * Log out a user that is currently logged in.
     * @param authToken The bearer token to invalidate.
     */
    public async logoutUser(user: User): Promise<void> {
        throw new NotImplementedError();
    }

    /**
     * Register a new user with the site.
     * @param userRegistration The user's registration form.
     * @returns An issued auth token if successful.
     */
    public async registerUser(userRegistration: UserRegistration): Promise<AuthToken> {
        throw new NotImplementedError();
    }
}