import { Connection } from "typeorm";
import { RoleModel } from "../entity";

export default async function insertRole(
  connection: Connection
): Promise<void> {
  try {
    var common = new RoleModel("common");
    var root = new RoleModel("root");
    var admin = new RoleModel("admin");
    console.log("Inserting a roles into the database...");
    await connection.manager.save([common, admin, root]);
  } catch (e) {
    throw Error("cannot_seed_roles");
  }
}
