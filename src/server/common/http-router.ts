import * as Express from 'express';
import * as Errors from 'ts-dotnet-errors';

/**
 * Router that processes requests for a specific 
 * sub route of the server.
 */
export abstract class HttpRouter {
    /**
     * The sub route to use to identify requests that
     * should be sent to this router.
     */
    protected readonly abstract route: string;

    /**
     * The express router powering this router.
     */
    private readonly expressRouter: Express.Router;

    /**
     * If the router has been properly initialized.
     */
    private isInitialized: boolean;

    /**
     * Create a new http router.
     */
    constructor(){
        this.expressRouter = Express.Router();
        this.isInitialized = false;
    }

    /**
     * Initialize the router for use.
     * @param express The running express application.
     */
    public init(express: Express.Application): void {
        if(this.isInitialized){
            throw new Errors.InvalidOperationError('Router has already been initialized.');
        }

        this.initRoutes(this.expressRouter);
        express.use(this.route, this.expressRouter);
        this.isInitialized = true;
    }

    /**
     * Initialize all of the routes in the server.
     * @param expressRouter The express application to work with.
     */
    protected abstract initRoutes(expressRouter: Express.Router): void;
}