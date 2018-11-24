import { inherits } from "util";
import { DatabaseConfig } from "../database/database-config";

/**
 * The data persistance container. Enables for CRUD operations
 * for various models.
 */
export interface IDatabase {
    /**
     * If a transaction is currently active or not.
     */
    isInTransaction: boolean;

    /**
     * Initialize the database for use.
     * @param config The config to use with the database.
     */
    init(config: DatabaseConfig): Promise<void>;

    /**
     * Start a new transaction with the database.
     */
    startTransaction(): Promise<void>;

    /**
     * Commit a transaction to the database.
     */
    commitTransaction(): Promise<void>;

    /**
     * Rollback the active transaction so it doesn't
     * get commited.
     */
    rollbackTransaction(): Promise<void>;
}