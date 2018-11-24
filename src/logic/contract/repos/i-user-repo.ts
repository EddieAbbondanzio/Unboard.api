import { User } from "../../user/user";

/**
 * Interface for a CRUD based repository for managing users
 * in the database.
 */
export interface IUserRepo {
    /**
     * Search for a user via their automatically generated
     * id that is assigned to them after inserting them into
     * the database.
     * @param id The unique numeric id of the desired user.
     * @param includeDeleted If deleted entries should be included
     * in the search as well.
     * @returns The user found. (if any)
     */
    findById(id: number, includeDeleted?: boolean): Promise<User|undefined>;

    /**
     * Search for a specific user via their email.
     * @param email The email to look for.
     * @returns User with matching email, or null.
     */
    findByEmail(email: string, includeDeleted?: boolean): Promise<User|undefined>;

    /**
     * Add a new user to the database. This automatically generates
     * a unique id for them after being inserted.
     * @param user The user to add to the database.
     */
    add(user: User): Promise<void>;

    /**
     * Update an existing user in the database. This will
     * not allow for changing of usernames or id since these
     * are considered primary keys.
     * @param user The user to update.
     */
    update(user: User): Promise<void>;

    /**
     * Mark a user as deleted. This will prevent them from being
     * included in any search results when using the find functions.
     * @param user The user to delete.
     */
    delete(user: User): Promise<void>;
}