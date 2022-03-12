import { Connection } from "typeorm";
import { ServiceModel } from "../entity";

export default async function insertService(
  connection: Connection
): Promise<void> {
  try {
    var auth = new ServiceModel("auth");
    var chat = new ServiceModel("chat");
    var email = new ServiceModel("email");
    console.log("Inserting a services into the database...");
    await connection.manager.save([auth, email, chat]);
  } catch (e) {
    throw Error("cannot_seed_services");
  }
}
