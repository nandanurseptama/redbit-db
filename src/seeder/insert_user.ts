import { Connection } from "typeorm";
import { RoleModel, UserModel } from "../entity";

export default async function insertUser(
  connection: Connection,
  users: UserModel[]
): Promise<void> {
  try {
    if (users.length > 0) {
      await connection.manager.save(users);
    } else {
      console.log("users was empty");
      return;
    }
  } catch (e) {
    console.log("cannot_seed_users", e);
    throw Error("cannot_seed_users");
  }
}
