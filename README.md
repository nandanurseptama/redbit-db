# Redbit Database

Redbit database is package that connecting another service into database

## Installation
Add this package manually into package.json
```json
{
   "redbit-db" : "git://nandanurseptama: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@github.com/nandanurseptama/redbit-db.git"
}
```

## Usage
### Connect into database
```typescript
import { connectToDatabase } from "redbit-db";
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
```

### Seeding Database
```typescript
import { connectToDatabase } from "redbit-db";
const dbConfig: DatabaseConfig = {
  database_dialect: "postgres",
  database_host: "localhost",
  database_name: "postgres",
  database_password: "postgres",
  database_port: 5432,
  database_username: "postgres",
};
seedingData(dbConfig, async (connection) => {
  var roleModel = new RoleModel("admin");
  await connection.manager.save(roleModel);
});
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)

edit