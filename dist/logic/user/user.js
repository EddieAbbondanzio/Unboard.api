"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
var User_1;
"use strict";
const typeorm_1 = require("typeorm");
/**
 * Standard user of the website.
 */
let User = User_1 = class User {
    /**
     * Create a new user from their registration form they provided.
     * @param userRegistration The registration to use.
     * @returns The newly generated user.
     */
    static fromRegistration(userRegistration) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('');
        });
    }
};
/**
 * The minimum number of characters in a username.
 */
User.MIN_USERNAME_LENGTH = 4;
/**
 * The maximum number of characters in a username.
 */
User.MAX_USERNAME_LENGTH = 24;
/**
 * The maximum number of characters allowed in their real name.
 */
User.MAX_NAME_LENGTH = 32;
/**
 * The maximum number of characters in a user's email.
 */
User.MAX_EMAIL_LENGTH = 64;
/**
 * The minimum length to allow for passwords.
 */
User.MIN_PASSWORD_LENGTH = 8;
__decorate([
    typeorm_1.Index("IX_userEmail"),
    typeorm_1.Column("char", { length: User_1.MAX_EMAIL_LENGTH, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column("varchar"),
    __metadata("design:type", String)
], User.prototype, "passwordHash", void 0);
__decorate([
    typeorm_1.Column("char", { length: User_1.MAX_NAME_LENGTH }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], User.prototype, "joinedDate", void 0);
__decorate([
    typeorm_1.Column({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isVerified", void 0);
__decorate([
    typeorm_1.Column({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isDeleted", void 0);
User = User_1 = __decorate([
    typeorm_1.Entity({ name: 'User' })
], User);
exports.User = User;
//# sourceMappingURL=user.js.map