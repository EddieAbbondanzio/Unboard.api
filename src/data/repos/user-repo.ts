import { IUserRepo } from "../../logic/contract/repos/i-user-repo";
import { injectable } from "inversify";
import { AbstractRepository } from "typeorm";
import { User } from "../../logic/user/user";
import { NotImplementedError, ArgumentNullError } from "ts-dotnet-errors";

/**
 * Data persistance container for users. Allows for basic
 * CRUD operations with the database.
 */
@injectable()
export class UserRepo extends AbstractRepository<User> implements IUserRepo {
    /**
     * Search for a user via their automatically generated
     * id that is assigned to them after inserting them into
     * the database.
     * @param id The unique numeric id of the desired user.
     * @param includeDeleted If deleted entries should be included
     * in the search as well.
     * @returns The user found. (if any)
     */
    public async findById(id: number, includeDeleted?: boolean): Promise<User | undefined> {
        if (isNaN(id)) {
            throw new ArgumentNullError('id');
        }

        if (includeDeleted) {
            return this.repository.createQueryBuilder('user')
                .leftJoinAndSelect('user.stats', 'stats')
                .where('user.id = :id', { id: id })
                .getOne();
        }
        else {
            return this.repository.createQueryBuilder('user')
                .leftJoinAndSelect('user.stats', 'stats')
                .where('user.id = :id', { id: id })
                .andWhere('user.isDeleted = false')
                .getOne();
        }
    }

    /**
     * Search for a specific user via their email.
     * @param email The email to look for.
     * @returns User with matching email, or null.
     */
    public async findByEmail(email: string, includeDeleted?: boolean): Promise<User | undefined> {
        if (email == null) {
            throw new ArgumentNullError('email');
        }

        if (includeDeleted) {
            return this.repository.createQueryBuilder('user')
                .leftJoinAndSelect('user.stats', 'stats')
                .where('user.email = :email', { email: email })
                .getOne();
        }
        else {
            return this.repository.createQueryBuilder('user')
                .leftJoinAndSelect('user.stats', 'stats')
                .where('user.email = :email', { email: email })
                .andWhere('user.isDeleted = false')
                .getOne();
        }
    }

    /**
     * Add a new user to the database. This automatically generates
     * a unique id for them after being inserted.
     * @param user The user to add to the database.
     */
    public async add(user: User): Promise<void> {
        if (user == null) {
            throw new ArgumentNullError('user');
        }


        try {
            //DO NOT use Promise.all()! We need to wait for a
            //user id before we can insert the stats.
            await this.repository.insert(user);
        }
        catch (error) {
            //TODO: REVISE THIS
            //Pass it higher up, no clue what it is.
            throw error;
        }
    }

    /**
     * Update an existing user in the database. This will
     * not allow for changing of usernames or id since these
     * are considered primary keys.
     * @param user The user to update.
     */
    public async update(user: User): Promise<void> {
        if (user == null) {
            throw new ArgumentNullError('user');
        }

        await this.repository.createQueryBuilder()
            .update(User)
            .set({
                name: user.name,
                email: user.email,
                isVerified: user.isVerified,
                passwordHash: user.passwordHash
            })
            .where('id = :id', user)
            .execute();
    }

    /**
     * Mark a user as deleted. This will prevent them from being
     * included in any search results when using the find functions.
     * @param user The user to delete.
     */
    public async delete(user: User): Promise<void> {
        if (user == null) {
            throw new ArgumentNullError('user');
        }

        //We just need to mark the user as deleted
        await this.repository.createQueryBuilder()
            .update()
            .set({ isDeleted: true })
            .where('id = :id', user).execute();
    }
}