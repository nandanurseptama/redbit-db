import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import { RoleModel, RoleServiceModel, UserModel, ServiceModel } from "./entity";
import repository from "./repository";
import seeder from "./seeder";

async function seedingData(
  config: DatabaseConfig,
  callback: (connection: Connection) => void
) {
  connectToDatabase(config)
    .then(async (connection) => {
      return callback(connection);
    })
    .catch((error) => console.log(error));
}
interface DatabaseConfig {
  database_name: string;
  database_port: number;
  database_host: string;
  database_username: string;
  database_password: string;
  database_dialect: "postgres" | "mysql" | "mongodb";
}
async function connectToDatabase(config: DatabaseConfig): Promise<Connection> {
  return await createConnection({
    host: config.database_host,
    username: config.database_username,
    port: config.database_port,
    password: config.database_password,
    database: config.database_name,
    type: config.database_dialect,
  });
}
export {
  RoleModel,
  RoleServiceModel,
  UserModel,
  ServiceModel,
  seeder,
  repository,
  DatabaseConfig,
  seedingData,
  connectToDatabase,
};
