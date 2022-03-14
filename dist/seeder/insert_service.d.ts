import { Connection } from "typeorm";
import { ServiceModel } from "../entity";
export default function insertService(connection: Connection, services: ServiceModel[]): Promise<void>;
