import { Connection } from "typeorm";
import { RoleModel, UserModel } from "../entity";

export default async function insertUser(
  connection: Connection
): Promise<void> {
  try {
    var result = await connection.manager.find(RoleModel, {
      where: {
        name: "root",
      },
    });
    if (result.length > 0) {
      let user = new UserModel(result[0], "root", "root");
      await connection.manager.save(user);
    } else {
      console.log("roles not seeded");
      return;
    }
  } catch (e) {
      console.log('cannot_seed_users',e);
    throw Error("cannot_seed_users");
  }
}
