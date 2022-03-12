import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    UpdateDateColumn,
    DeleteDateColumn,
    CreateDateColumn,
  } from "typeorm";
  
  @Entity({
      name:"services"
  })
  export class Service {
    @PrimaryGeneratedColumn("uuid")
    id: string | undefined;
  
    @Column({
      type: "text",
    })
    name: string;
  
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
    constructor(name: string) {
      this.name = name;
    }
  }
  