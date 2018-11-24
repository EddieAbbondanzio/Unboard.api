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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Express = __importStar(require("express"));
const inversify_1 = require("inversify");
const BodyParser = __importStar(require("body-parser"));
const auth_router_1 = require("./routers/auth-router");
const ioc_types_1 = require("../common/ioc/ioc-types");
/**
 * The HTTP server that handles incoming requests, and builds
 * responses to send back to clients.
 */
let HttpServer = class HttpServer {
    /**
     * Create a new HTTP Server.
     * @param authRouter The authentication router.
     */
    constructor(authRouter) {
        this.authRouter = authRouter;
        this.express = Express.default();
        this.initMiddleware();
        this.initRouters();
    }
    /**
     * Initialize all of the middleware for the server.
     */
    initMiddleware() {
        this.express.use(BodyParser.json());
        //Set up the ability to send back errors.
        this.express.use(function (req, res, next) {
            res.sendError = function (httpStatus, errorMsg) {
                res.status(httpStatus)
                    .json({ errorMessage: errorMsg });
            };
        });
    }
    /**
     * Initialize all of the routers for the server.
     */
    initRouters() {
    }
};
HttpServer = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(ioc_types_1.IOC_TYPES.AUTH_ROUTER)),
    __metadata("design:paramtypes", [auth_router_1.AuthRouter])
], HttpServer);
exports.HttpServer = HttpServer;
//# sourceMappingURL=http-server.js.map