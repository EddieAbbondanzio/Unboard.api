import { Response } from 'express'

declare global {
    namespace Express {
        interface Response {
            /**
             * Send an error number, and error message back to the client
             * to indicate that their request failed.
             * @param errorResp The error response to send to the client.
             */
            sendError(httpStatus: number, errorMessage: string): void;
        }
    }
}
