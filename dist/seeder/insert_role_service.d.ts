import { Connection } from "typeorm";
import { RoleModel, ServiceModel } from "../entity";
export default function insertRoleService(connection: Connection, roles: RoleModel[], services: ServiceModel[]): Promise<void>;
