import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  DeleteDateColumn,
  CreateDateColumn,
  TableForeignKey,
  JoinColumn,
  ManyToOne,
  Relation,
} from "typeorm";
import { RoleModel } from ".";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn("uuid", {
    name: "id",
  })
  id: string | undefined;

  @ManyToOne((type) => RoleModel, (role) => role.id)
  @JoinColumn({
    name: "id_role",
  })
  role: Relation<RoleModel>;

  @CreateDateColumn({
    type: "timestamp with time zone",
  })
  created_at: string;

  @Column({
    name: "username",
    unique: true,
    type: "text",
  })
  username: string;

  @Column({
    name: "password",
    type: "text",
  })
  password: string;

  @DeleteDateColumn({
    type: "timestamp with time zone",
    default: null,
  })
  deleted_at: string | undefined;

  @UpdateDateColumn({
    type: "timestamp with time zone",
  })
  updated_at: string;
  constructor(role: RoleModel, username: string, password: string) {
    this.role = role;
    this.password = password;
    this.username = username;
  }
}
