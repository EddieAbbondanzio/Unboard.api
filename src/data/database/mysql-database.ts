import { injectable } from "inversify";
import { IDatabase } from "../contract/i-database";
import { Connection, QueryRunner, createConnection, EntityManager, ConnectionOptions } from "typeorm";
import { DatabaseConfig } from "./database-config";
import { InvalidOperationError } from "ts-dotnet-errors";

/**
 * Database implementation of the data access layer. This implementation
 * uses TypeORM to manage the mysql database.
 */
@injectable()
export class MySqlDatabase implements IDatabase {
    /**
     * The database connection.
     */
    private connection!: Connection;

    /**
     * The query runner that manages interactive
     * with the database.
     */
    private queryRunner!: QueryRunner;

    /**
     * Flag to track if a transaction is in progress
     * or not.
     */
    public isInTransaction!: boolean;

    /**
     * Initialize the data layer for use.
     * @param config The config to use for the database.
     */
    public async init(config: DatabaseConfig): Promise<void> {

        this.connection = await createConnection({
            type: 'mysql',
            host: config.host,
            port: config.port,
            username: config.username,
            password: config.password,
            database: config.database,
            entities: [config.entities],
            migrations: [config.migrations!],
            subscribers: [config.subscribers!],
            synchronize: config.autoSchemaSync,
        });

        //Set up the query runner with a entity manager.
        this.queryRunner = this.connection.driver.createQueryRunner('master');
        new EntityManager(this.connection, this.queryRunner);

        this.isInTransaction = false;
    }

    /**
     * Start a transaction with the database. If a transaction
     * is already in progress, an error will be thrown.
     */
    public async startTransaction(): Promise<void> {
        if (this.isInTransaction) {
            throw new InvalidOperationError('A transaction is already in progress');
        }

        this.isInTransaction = true;
        return this.queryRunner.startTransaction();
    }

    /**
     * Commit the current transaction. If no transaction is taking
     * place, then an error will be thrown.
     */
    public async commitTransaction(): Promise<void> {
        if (!this.isInTransaction) {
            throw new InvalidOperationError('A transaction was not started');
        }

        this.isInTransaction = false;
        return this.queryRunner.commitTransaction();
    }

    /**
     * Rollback the current transaction. This reverts any work
     * committed to the database during the transcation. If no
     * transaction is in progress, then an error will be thrown.
     */
    public async rollbackTransaction(): Promise<void> {
        if (!this.isInTransaction) {
            throw new InvalidOperationError('A transaction was not started');
        }

        this.isInTransaction = false;
        return this.queryRunner.rollbackTransaction();
    }
}