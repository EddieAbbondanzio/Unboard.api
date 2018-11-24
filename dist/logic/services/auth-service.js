"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const ts_dotnet_errors_1 = require("ts-dotnet-errors");
/**
 * Authentication service to handle logging in, and out, and registering
 * user's with the site.
 */
let AuthService = class AuthService {
    /**
     * Log in a user using the credentials they supplied.
     * @param userCreds The user's email, and password.
     * @returns An issued auth token if successful.
     */
    loginUser(userCreds) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new ts_dotnet_errors_1.NotImplementedError();
        });
    }
    /**
     * Log out a user that is currently logged in.
     * @param authToken The bearer token to invalidate.
     */
    logoutUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new ts_dotnet_errors_1.NotImplementedError();
        });
    }
    /**
     * Register a new user with the site.
     * @param userRegistration The user's registration form.
     * @returns An issued auth token if successful.
     */
    registerUser(userRegistration) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new ts_dotnet_errors_1.NotImplementedError();
        });
    }
};
AuthService = __decorate([
    inversify_1.injectable()
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth-service.js.map