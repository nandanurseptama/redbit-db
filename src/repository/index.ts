import { getRepository, Repository } from "typeorm";
import {
  RoleModel,
  RoleServiceModel,
  ServiceModel,
  UserModel,
} from "../entity";

function userReposotiry(): Repository<UserModel> {
  return getRepository(UserModel);
}
function serviceRepository(): Repository<ServiceModel> {
  return getRepository(ServiceModel);
}
function roleRepository(): Repository<RoleModel> {
  return getRepository(RoleModel);
}
function roleServiceRepository(): Repository<RoleServiceModel> {
  return getRepository(RoleServiceModel);
}
export default {
  userReposotiry,
  serviceRepository,
  roleRepository,
  roleServiceRepository,
};
