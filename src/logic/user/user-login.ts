import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { User } from "./user";
import { RandomUtils } from "../../utils/randomutils";

/**
 * A login for a user to give them access to the
 * restricted portions of the API.
 */
@Entity({ name: 'UserLogin' })
export class UserLogin {
    /**
     * The length of each randomly generated string
     * used to 'sign' each login.
     */
    public static CODE_LENGTH: number = 24;

    /**
     * The user that this login belongs to.
     */
    @JoinColumn()
    @OneToOne(type => User, { primary: true })
    public user!: User;

    /**
     * The unique code for the login.
     */
    @Column('char', { length: UserLogin.CODE_LENGTH, nullable: false })
    public code!: string;

    /**
     * When the login occured.
     */
    @CreateDateColumn()
    public loginDate!: Date;

    /**
     * Create a new login.
     * @param user The user who owns the login.
     */
    constructor(user?: User) {
        if(user != null){
            this.user = user;
            this.code = RandomUtils.generateString(UserLogin.CODE_LENGTH);
        }
    }
}