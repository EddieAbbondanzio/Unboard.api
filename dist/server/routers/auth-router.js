"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_router_1 = require("../common/http-router");
const Express = __importStar(require("express"));
const HttpStatusCodes = __importStar(require("http-status-codes"));
const body_1 = require("../decorators/body");
const user_credentials_1 = require("../../logic/user/user-credentials");
const user_registration_1 = require("../../logic/user/user-registration");
const inversify_1 = require("inversify");
const ioc_types_1 = require("../../common/ioc/ioc-types");
const auth_service_1 = require("../../logic/services/auth-service");
const authenticate_1 = require("../decorators/authenticate");
/**
 * Authentication router to handle login, and registration
 * requests from clients.
 */
let AuthRouter = class AuthRouter extends http_router_1.HttpRouter {
    /**
     * Create a new authentication router to process all requests
     * related to logging in, or out, or registering new users.
     * @param authService The user authentication service
     */
    constructor(authService) {
        super();
        /**
         * The subroute that this router runs under.
         */
        this.route = 'auth';
        this.authService = authService;
    }
    /**
     * Initialize all of the routes for this router.
     * @param expressRouter The express router this router works with.
     */
    initRoutes(expressRouter) {
        expressRouter.put('/login/', (req, res) => __awaiter(this, void 0, void 0, function* () { return this.loginUser(req, res); }));
        expressRouter.delete('/login/', (req, res) => __awaiter(this, void 0, void 0, function* () { return this.logoutUser(req, res); }));
        expressRouter.put('/register/', (req, res) => __awaiter(this, void 0, void 0, function* () { return this.registerUser(req, res); }));
    }
    /**
     * Log in a client via their credentials.
     * @param request The incoming client request.
     * @param response The server response being built.
     */
    loginUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let authToken = yield this.authService.loginUser(request.body);
                if (authToken == null) {
                    response.sendError(HttpStatusCodes.UNAUTHORIZED, 'Invalid username, and or password.');
                }
                else {
                    response.send(authToken.bearerToken);
                }
            }
            catch (error) {
                response.sendError(HttpStatusCodes.INTERNAL_SERVER_ERROR, 'An unknown error occured.');
                console.error('AuthRouter.loginUser: ', error);
            }
        });
    }
    /**
     * Log out a client by invalidating their access token.
     * @param request The incoming client request.
     * @param response The server response being built.
     */
    logoutUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.authService.logoutUser(request.user);
                response.sendStatus(HttpStatusCodes.OK);
            }
            catch (error) {
                response.sendError(HttpStatusCodes.INTERNAL_SERVER_ERROR, 'An unknown error occured.');
                console.error('AuthRouter.logoutUser: ', error);
            }
        });
    }
    /**
     * Register a new user with the website.
     * @param request The incoming client request.
     * @param response The server response being built.
     */
    registerUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //Need to handle validation...
            }
            catch (error) {
                response.sendError(HttpStatusCodes.INTERNAL_SERVER_ERROR, 'An unknown error occured.');
                console.error('AuthRouter.registerUser: ', error);
            }
        });
    }
};
__decorate([
    body_1.Body(user_credentials_1.UserCredentials),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthRouter.prototype, "loginUser", null);
__decorate([
    authenticate_1.Authenticated(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthRouter.prototype, "logoutUser", null);
__decorate([
    body_1.Body(user_registration_1.UserRegistration),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthRouter.prototype, "registerUser", null);
AuthRouter = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ioc_types_1.IOC_TYPES.AUTH_SERVICE)),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthRouter);
exports.AuthRouter = AuthRouter;
//# sourceMappingURL=auth-router.js.map