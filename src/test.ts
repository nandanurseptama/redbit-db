import { connectToDatabase, DatabaseConfig, seedingData } from ".";
import { RoleModel } from "./entity";
const dbConfig: DatabaseConfig = {
  database_dialect: "postgres",
  database_host: "localhost",
  database_name: "postgres",
  database_password: "postgres",
  database_port: 5432,
  database_username: "postgres",
};
connectToDatabase(dbConfig)
  .then((connection) => {
    /// your callback here
    /// pass connection variable into your function
    /// ex : callback(connection);
  })
  .catch((e) => {
    console.log("error connecting into database");
  });
seedingData(dbConfig, async (connection) => {
  var roleModel = new RoleModel("admin");
  await connection.manager.save(roleModel);
});
