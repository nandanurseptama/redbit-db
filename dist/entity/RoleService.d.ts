import { Relation } from "typeorm";
import { RoleModel, ServiceModel } from ".";
export declare class RoleService {
    id: string | undefined;
    role: Relation<RoleModel>;
    service: Relation<RoleModel>;
    created_at: string;
    deleted_at: string | undefined;
    updated_at: string;
    constructor(role: RoleModel, service: ServiceModel);
}
