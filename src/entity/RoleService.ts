import {
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  CreateDateColumn,
  JoinColumn,
  Relation,
  ManyToMany,
} from "typeorm";
import { RoleModel, ServiceModel } from ".";

@Entity({
  name: "roles_service",
})
export class RoleService {
  @PrimaryGeneratedColumn("uuid", {
    name: "id",
  })
  id: string | undefined;

  @ManyToMany(type => RoleModel, (role) => role.id)
  @JoinColumn({
    name: "id_role",
  })
  role: Relation<RoleModel>;

  @ManyToMany(type => ServiceModel, (service) => service.id)
  @JoinColumn({
    name: "id_service",
  })
  service: Relation<RoleModel>;

  @CreateDateColumn({
    type: "timestamp with time zone",
  })
  created_at: string;

  @DeleteDateColumn({
    type: "timestamp with time zone",
    default: null,
  })
  deleted_at: string | undefined;

  @UpdateDateColumn({
    type: "timestamp with time zone",
  })
  updated_at: string;
  constructor(role: RoleModel, service: ServiceModel) {
    this.role = role;
    this.service = service;
  }
}
