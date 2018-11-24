/**
 * Identifiers for injectables in the inversion of
 * control container.
 */
export const IOC_TYPES: any = {
    AUTH_SERVICE: Symbol.for('AuthService'),

    AUTH_ROUTER: Symbol.for('AuthRouter'),

    HTTP_SERVER: Symbol.for('HttpServer')
};