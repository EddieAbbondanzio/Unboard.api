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
/**
 * The HTTP server that handles incoming requests, and builds
 * responses to send back to clients.
 */
class Server {
    constructor() {
        this.express = Express.default();
        console.log(this.express);
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map