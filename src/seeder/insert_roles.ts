import { Connection } from "typeorm";
import { RoleModel } from "../entity";

export default async function insertRole(
  connection: Connection,
  roles: RoleModel[]
): Promise<void> {
  try {
    if (roles.length < 1) {
      console.log("roles was empty");
      return;
    }
    console.log("Inserting a roles into the database...");
    await connection.manager.save(roles);
  } catch (e) {
    throw Error("cannot_seed_roles");
  }
}
