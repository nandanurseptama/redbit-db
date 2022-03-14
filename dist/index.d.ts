import "reflect-metadata";
import { Connection } from "typeorm";
import { RoleModel, RoleServiceModel, UserModel, ServiceModel } from "./entity";
import repository from "./repository";
import seeder from "./seeder";
declare function seedingData(config: DatabaseConfig, callback: (connection: Connection) => void): Promise<void>;
interface DatabaseConfig {
    database_name: string;
    database_port: number;
    database_host: string;
    database_username: string;
    database_password: string;
    database_dialect: "postgres" | "mysql" | "mongodb";
}
declare function connectToDatabase(config: DatabaseConfig): Promise<Connection>;
export { RoleModel, RoleServiceModel, UserModel, ServiceModel, seeder, repository, DatabaseConfig, seedingData, connectToDatabase, };
