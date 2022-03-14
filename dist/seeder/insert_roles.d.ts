import { Connection } from "typeorm";
import { RoleModel } from "../entity";
export default function insertRole(connection: Connection, roles: RoleModel[]): Promise<void>;
