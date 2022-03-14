import { Connection } from "typeorm";
import { UserModel } from "../entity";
export default function insertUser(connection: Connection, users: UserModel[]): Promise<void>;
