import * as Express from 'express';
import { inject, injectable } from 'inversify';
import * as BodyParser from 'body-parser';
import { AuthRouter } from './routers/auth-router';
import { IOC_TYPES } from '../common/ioc/ioc-types';
import { AuthService } from '../logic/services/auth-service';

/**
 * The HTTP server that handles incoming requests, and builds
 * responses to send back to clients.
 */
@injectable()
export class HttpServer {
    /**
     * The express application instance powering the server.
     */
    private express: Express.Application;

    /**
     * The authentication router to handle all login / logout
     * requests.
     */
    private authRouter: AuthRouter;

    /**
     * Create a new HTTP Server.
     * @param authRouter The authentication router.
     */
    constructor(@inject(IOC_TYPES.AUTH_ROUTER) authRouter: AuthRouter) {
        this.authRouter = authRouter;

        this.express = Express.default();
        this.initMiddleware();
        this.initRouters();
    }

    /**
     * Initialize all of the middleware for the server.
     */
    private initMiddleware(): void {
        this.express.use(BodyParser.json());

        //Set up the ability to send back errors.
        this.express.use(function(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
            res.sendError = function(httpStatus: number, errorMsg: string) {
                res.status(httpStatus)
                .json({errorMessage: errorMsg});
            };
        });
    }

    /**
     * Initialize all of the routers for the server.
     */
    private initRouters(): void {

    }
}