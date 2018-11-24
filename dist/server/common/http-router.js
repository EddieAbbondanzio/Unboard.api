"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Express = __importStar(require("express"));
const Errors = __importStar(require("ts-dotnet-errors"));
/**
 * Router that processes requests for a specific
 * sub route of the server.
 */
class HttpRouter {
    /**
     * Create a new http router.
     */
    constructor() {
        this.expressRouter = Express.Router();
        this.isInitialized = false;
    }
    /**
     * Initialize the router for use.
     * @param express The running express application.
     */
    init(express) {
        if (this.isInitialized) {
            throw new Errors.InvalidOperationError('Router has already been initialized.');
        }
        this.initRoutes(this.expressRouter);
        express.use(this.route, this.expressRouter);
        this.isInitialized = true;
    }
}
exports.HttpRouter = HttpRouter;
//# sourceMappingURL=http-router.js.map