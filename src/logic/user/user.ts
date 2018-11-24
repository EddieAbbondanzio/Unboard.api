import { Entity, Column, OneToOne, Index, OneToMany, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { UserRegistration } from "./user-registration";
import { PasswordHasher } from '../security/password-hasher';

/**
 * Standard user of the website.
 */
@Entity({ name: 'User' })
export class User {
    /**
     * The minimum number of characters in a username.
     */
    public static MIN_USERNAME_LENGTH: number = 4;

    /**
     * The maximum number of characters in a username.
     */
    public static MAX_USERNAME_LENGTH: number = 24;

    /**
     * The maximum number of characters allowed in their real name.
     */
    public static MAX_NAME_LENGTH = 32;

    /**
     * The maximum number of characters in a user's email.
     */
    public static MAX_EMAIL_LENGTH: number = 64;

    /**
     * The minimum length to allow for passwords.
     */
    public static MIN_PASSWORD_LENGTH: number = 8;

    /**
     * The user's contact email.
     */
    @Index("IX_userEmail")
    @Column("char", { length: User.MAX_EMAIL_LENGTH, unique: true })
    public email!: string;

    /**
     * The user's real name.
     */
    @Column("char", { length: User.MAX_NAME_LENGTH })
    public name!: string;

    /**
     * The date that the user joined on.
     */
    @CreateDateColumn()
    public joinedDate!: Date;

    /**
     * If the user has verified their email yet.
     */
    @Column({ default: false })
    public isVerified!: boolean;

    /**
     * If the user has been deleted.
     */
    @Column({ default: false })
    public isDeleted!: boolean;
    
    /**
     * The hash of the user's password.
     */
    @Column("varchar")
    public passwordHash!: string;

    /**
     * Set a new password for the user by hasing and salting
     * the new one provided.
     * @param password The new password to hash.
     */
    public async setPassword(password: string): Promise<void> {
        this.passwordHash = await PasswordHasher.generateHash(password);
    }

    /**
     * Validate the password provided to see if it matches the
     * password on file.
     * @param password The password to compare.
     */
    public async validatePassword(password: string): Promise<boolean> {
        return PasswordHasher.validateHash(password, this.passwordHash);
    }

    /**
     * Create a new user from their registration form they provided.
     * @param userRegistration The registration to use.
     * @returns The newly generated user.
     */
    public static async fromRegistration(userRegistration: UserRegistration): Promise<User> {
        let user: User = new User();
        user.email = userRegistration.email;
        user.name  = userRegistration.name;

        await user.setPassword(userRegistration.password);
        return user;
    }
}