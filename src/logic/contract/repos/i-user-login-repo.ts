import { UserLogin } from "../../user/user-login";
import { User } from "../../user/user";

/**
 * Interface for the storage container of UserLogins.
 */
export interface IUserLoginRepository {
    /**
     * Add a new user login to the database.
     * @param userLogin The userlogin to add to the database.
     */
    add(userLogin: UserLogin): Promise<void>;

    /**
     * Remove an existing login from the database.
     * @param userlogin The userlogin to remove from the database.
     */
    delete(userLogin: UserLogin): Promise<void>;

    /**
     * Delete all logins for a single user.
     * @param user The user or id to delete all logins for.
     */
    deleteForUser(user: User): Promise<void>;
    deleteForUser(id: number): Promise<void>;
}