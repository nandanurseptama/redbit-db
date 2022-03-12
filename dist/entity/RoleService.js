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
exports.RoleService = void 0;
var typeorm_1 = require("typeorm");
var _1 = require(".");
var RoleService = /** @class */ (function () {
    function RoleService(role, service) {
        this.role = role;
        this.service = service;
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)("uuid", {
            name: "id",
        }),
        __metadata("design:type", String)
    ], RoleService.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function (type) { return _1.RoleModel; }, function (role) { return role.id; }),
        (0, typeorm_1.JoinColumn)({
            name: "id_role",
        }),
        __metadata("design:type", Object)
    ], RoleService.prototype, "role", void 0);
    __decorate([
        (0, typeorm_1.ManyToMany)(function (type) { return _1.ServiceModel; }, function (service) { return service.id; }),
        (0, typeorm_1.JoinColumn)({
            name: "id_service",
        }),
        __metadata("design:type", Object)
    ], RoleService.prototype, "service", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            type: "timestamp with time zone",
        }),
        __metadata("design:type", String)
    ], RoleService.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.DeleteDateColumn)({
            type: "timestamp with time zone",
            default: null,
        }),
        __metadata("design:type", String)
    ], RoleService.prototype, "deleted_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            type: "timestamp with time zone",
        }),
        __metadata("design:type", String)
    ], RoleService.prototype, "updated_at", void 0);
    RoleService = __decorate([
        (0, typeorm_1.Entity)({
            name: "roles_service",
        }),
        __metadata("design:paramtypes", [_1.RoleModel, _1.ServiceModel])
    ], RoleService);
    return RoleService;
}());
exports.RoleService = RoleService;
//# sourceMappingURL=RoleService.js.map