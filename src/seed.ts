import "reflect-metadata";
import { createConnection } from "typeorm";
import insertRole from "./seeder/insert_roles";
import insertRoleService from "./seeder/insert_role_service";
import insertService from "./seeder/insert_service";
import insertUser from "./seeder/insert_user";

createConnection()
  .then(async (connection) => {
    //await insertRole(connection);
    //await insertUser(connection);
    //await insertService(connection);
    await insertRoleService(connection);
  })
  .catch((error) => console.log(error));
