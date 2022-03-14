import { Repository } from "typeorm";
import { RoleModel, RoleServiceModel, ServiceModel, UserModel } from "../entity";
declare function userReposotiry(): Repository<UserModel>;
declare function serviceRepository(): Repository<ServiceModel>;
declare function roleRepository(): Repository<RoleModel>;
declare function roleServiceRepository(): Repository<RoleServiceModel>;
declare const _default: {
    userReposotiry: typeof userReposotiry;
    serviceRepository: typeof serviceRepository;
    roleRepository: typeof roleRepository;
    roleServiceRepository: typeof roleServiceRepository;
};
export default _default;
