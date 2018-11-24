import { HttpRouter } from "../common/http-router";
import * as Express from 'express';
import * as HttpStatusCodes from 'http-status-codes';
import { NotImplementedError } from "ts-dotnet-errors";
import { Body } from "../decorators/body";
import { UserCredentials } from "../../logic/user/user-credentials";
import { UserRegistration } from "../../logic/user/user-registration";
import { inject, injectable } from "inversify";
import { IOC_TYPES } from "../../common/ioc/ioc-types";
import { AuthService } from "../../logic/services/auth-service";
import { AuthToken } from "../../logic/security/auth-token";
import { Authenticated } from "../decorators/authenticate";

/**
 * Authentication router to handle login, and registration
 * requests from clients.
 */
@injectable()
export class AuthRouter extends HttpRouter {
    /**
     * The subroute that this router runs under.
     */
    public route: string = 'auth';

    /**
     * The BLL authentication service.
     */
    protected authService: AuthService;

    /**
     * Create a new authentication router to process all requests
     * related to logging in, or out, or registering new users.
     * @param authService The user authentication service
     */
    constructor(@inject(IOC_TYPES.AUTH_SERVICE) authService: AuthService) {
        super();
        this.authService = authService;
    }

    /**
     * Initialize all of the routes for this router.
     * @param expressRouter The express router this router works with.
     */
    protected initRoutes(expressRouter: Express.Router): void {
        expressRouter.put('/login/',    async (req, res) => { return this.loginUser(req, res);    });
        expressRouter.delete('/login/', async (req, res) => { return this.logoutUser(req, res);   });
        expressRouter.put('/register/', async (req, res) => { return this.registerUser(req, res); });
    }

    /**
     * Log in a client via their credentials.
     * @param request The incoming client request.
     * @param response The server response being built.
     */
    @Body(UserCredentials)
    public async loginUser(request: Express.Request, response: Express.Response): Promise<void> {
        try {
            let authToken: AuthToken = await this.authService.loginUser(request.body as UserCredentials);

            if(authToken == null){
                response.sendError(HttpStatusCodes.UNAUTHORIZED, 'Invalid username, and or password.');
            }
            else {
                response.send(authToken.bearerToken);
            }
        }
        catch(error) {
            response.sendError(HttpStatusCodes.INTERNAL_SERVER_ERROR, 'An unknown error occured.');
            console.error('AuthRouter.loginUser: ', error);
        }
    }

    /**
     * Log out a client by invalidating their access token.
     * @param request The incoming client request.
     * @param response The server response being built.
     */
    @Authenticated()
    public async logoutUser(request: Express.Request, response: Express.Response): Promise<void> {
        try {
            await this.authService.logoutUser(request.user!);
            response.sendStatus(HttpStatusCodes.OK);
        }
        catch(error) {
            response.sendError(HttpStatusCodes.INTERNAL_SERVER_ERROR, 'An unknown error occured.');
            console.error('AuthRouter.logoutUser: ', error);
        }
    }

    /**
     * Register a new user with the website.
     * @param request The incoming client request.
     * @param response The server response being built.
     */
    @Body(UserRegistration)
    public async registerUser(request: Express.Request, response: Express.Response): Promise<void> {
        try {
            //Need to handle validation...
        }
        catch(error) {
            response.sendError(HttpStatusCodes.INTERNAL_SERVER_ERROR, 'An unknown error occured.');
            console.error('AuthRouter.registerUser: ', error);
        }
    }
}