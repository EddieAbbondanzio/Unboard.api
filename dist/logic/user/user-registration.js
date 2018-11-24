"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Registration info for a new user.
 */
class UserRegistration {
    constructor(email, password, name) {
        this.email = email || '';
        this.password = password || '';
        this.name = name || '';
    }
}
exports.UserRegistration = UserRegistration;
//# sourceMappingURL=user-registration.js.map