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
exports.User = void 0;
var typeorm_1 = require("typeorm");
var _1 = require(".");
var User = /** @class */ (function () {
    function User(role, username, password) {
        this.role = role;
        this.password = password;
        this.username = username;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid", {
            name: "id",
        }),
        __metadata("design:type", String)
    ], User.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return _1.RoleModel; }, function (role) { return role.id; }),
        (0, typeorm_1.JoinColumn)({
            name: "id_role",
        }),
        __metadata("design:type", Object)
    ], User.prototype, "role", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            type: "timestamp with time zone",
        }),
        __metadata("design:type", String)
    ], User.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "username",
            unique: true,
            type: "text",
        }),
        __metadata("design:type", String)
    ], User.prototype, "username", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            name: "password",
            type: "text",
        }),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        (0, typeorm_1.DeleteDateColumn)({
            type: "timestamp with time zone",
            default: null,
        }),
        __metadata("design:type", String)
    ], User.prototype, "deleted_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            type: "timestamp with time zone",
        }),
        __metadata("design:type", String)
    ], User.prototype, "updated_at", void 0);
    User = __decorate([
        (0, typeorm_1.Entity)({
            name: "users",
        }),
        __metadata("design:paramtypes", [_1.RoleModel, String, String])
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map