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
Object.defineProperty(exports, "__esModule", { value: true });
var UserLogin_1;
"use strict";
const typeorm_1 = require("typeorm");
const user_1 = require("./user");
const randomutils_1 = require("../../utils/randomutils");
/**
 * A login for a user to give them access to the
 * restricted portions of the API.
 */
let UserLogin = UserLogin_1 = class UserLogin {
    /**
     * Create a new login.
     * @param user The user who owns the login.
     */
    constructor(user) {
        if (user != null) {
            this.user = user;
            this.code = randomutils_1.RandomUtils.generateString(UserLogin_1.CODE_LENGTH);
        }
    }
};
/**
 * The length of each randomly generated string
 * used to 'sign' each login.
 */
UserLogin.CODE_LENGTH = 24;
__decorate([
    typeorm_1.JoinColumn(),
    typeorm_1.OneToOne(type => user_1.User, { primary: true }),
    __metadata("design:type", user_1.User)
], UserLogin.prototype, "user", void 0);
__decorate([
    typeorm_1.Column('char', { length: UserLogin_1.CODE_LENGTH, nullable: false }),
    __metadata("design:type", String)
], UserLogin.prototype, "code", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], UserLogin.prototype, "loginDate", void 0);
UserLogin = UserLogin_1 = __decorate([
    typeorm_1.Entity({ name: 'UserLogin' }),
    __metadata("design:paramtypes", [user_1.User])
], UserLogin);
exports.UserLogin = UserLogin;
//# sourceMappingURL=user-login.js.map