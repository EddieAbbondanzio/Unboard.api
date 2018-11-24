import * as Express from 'express';
import * as HttpStatusCode from 'http-status-codes';
import { IConstructor } from '../../common/i-constructor';

/**
 * Decorator to require a specific format for the body of the
 * incoming request. If the body is incorrectly formatted, then
 * a HTTP status of 400 is returned.
 * @param constructor The constructor of the object expected to
 * be in the body.
 */
export function Body<T>(constructor: IConstructor<T>) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let instance: T = new constructor();
        let method: Function = descriptor.value;

        descriptor.value = function(req: Express.Request, res: Express.Response) {
            let isBodyValid: boolean = true;

            //Is the body structurally identical to our type?
            //NOTE: This doesn't support nested classes, but should suffice for our needs.
            for (var prop in instance) {
                if (!req.body.hasOwnProperty(prop)) {
                    isBodyValid = false;
                    break;
                }
            }

            //Do we need to reject it?
            if(!isBodyValid){
                res.sendStatus(HttpStatusCode.BAD_REQUEST)
                return;
            }

            //Pull the ole switcheroo
            Object.assign(instance, req.body);
            req.body = instance;

            method.call(this, req, res);
        }
    }
}