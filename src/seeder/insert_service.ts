import { Connection } from "typeorm";
import { ServiceModel } from "../entity";

export default async function insertService(
  connection: Connection,
  services: ServiceModel[]
): Promise<void> {
  try {
    if (services.length < 1) {
      console.log("services was empty");
      return;
    }
    console.log("Inserting a services into the database...");
    await connection.manager.save(services);
  } catch (e) {
    throw Error("cannot_seed_services");
  }
}
