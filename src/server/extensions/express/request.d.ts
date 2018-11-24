import { Request } from 'express'
import { User } from '../../../logic/user/user';

declare global {
    namespace Express {
        interface Request {
            /**
             * The user associated with the request. 
             */
            user?: User;
        }
    }
}
