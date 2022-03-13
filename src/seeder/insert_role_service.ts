import { Connection } from "typeorm";
import {
  RoleModel,
  RoleServiceModel,
  ServiceModel,
  UserModel,
} from "../entity";

export default async function insertRoleService(
  connection: Connection,
  roles: RoleModel[],
  services: ServiceModel[]
): Promise<void> {
  try {
    console.log("seeding role service");
    if (services.length < 1) {
      console.log("services not seeded");
      return;
    }
    if (roles.length < 1) {
      console.log("roles not seeded");
      return;
    }
    for (var i = 0; i < roles.length; i++) {
      await connection.manager.save(
        services.map((e) => {
          return new RoleServiceModel(roles[i], e);
        })
      );
    }
  } catch (e) {
    console.log("cannot_roles_services", e);
    throw Error("cannot_roles_services");
  }
}
