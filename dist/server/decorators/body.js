"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatusCode = __importStar(require("http-status-codes"));
/**
 * Decorator to require a specific format for the body of the
 * incoming request. If the body is incorrectly formatted, then
 * a HTTP status of 400 is returned.
 * @param constructor The constructor of the object expected to
 * be in the body.
 */
function Body(constructor) {
    return function (target, propertyKey, descriptor) {
        let instance = new constructor();
        let method = descriptor.value;
        descriptor.value = function (req, res) {
            let isBodyValid = true;
            //Is the body structurally identical to our type?
            //NOTE: This doesn't support nested classes, but should suffice for our needs.
            for (var prop in instance) {
                if (!req.body.hasOwnProperty(prop)) {
                    isBodyValid = false;
                    break;
                }
            }
            //Do we need to reject it?
            if (!isBodyValid) {
                res.sendStatus(HttpStatusCode.BAD_REQUEST);
                return;
            }
            //Pull the ole switcheroo
            Object.assign(instance, req.body);
            req.body = instance;
            method.call(this, req, res);
        };
    };
}
exports.Body = Body;
//# sourceMappingURL=body.js.map