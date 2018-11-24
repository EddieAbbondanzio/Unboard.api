
/**
 * Require the user to be authenticated with a bearer token,
 * or else their request will be rejected. 
 */
export function Authenticated() {   
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    }
}