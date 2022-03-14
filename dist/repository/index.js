"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var entity_1 = require("../entity");
function userReposotiry() {
    return (0, typeorm_1.getRepository)(entity_1.UserModel);
}
function serviceRepository() {
    return (0, typeorm_1.getRepository)(entity_1.ServiceModel);
}
function roleRepository() {
    return (0, typeorm_1.getRepository)(entity_1.RoleModel);
}
function roleServiceRepository() {
    return (0, typeorm_1.getRepository)(entity_1.RoleServiceModel);
}
exports.default = {
    userReposotiry: userReposotiry,
    serviceRepository: serviceRepository,
    roleRepository: roleRepository,
    roleServiceRepository: roleServiceRepository,
};
//# sourceMappingURL=index.js.map