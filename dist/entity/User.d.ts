import { Relation } from "typeorm";
import { RoleModel } from ".";
export declare class User {
    id: string | undefined;
    role: Relation<RoleModel>;
    created_at: string;
    username: string;
    password: string;
    deleted_at: string | undefined;
    updated_at: string;
    constructor(role: RoleModel, username: string, password: string);
}
