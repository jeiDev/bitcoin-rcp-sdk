import config from "./src/config";

export default  {
   ...config.db,
   entities: [
      "./src/database/entities/*.entity.ts"
   ],
   migrations: [
      "./src/database/migrations/*.ts"
   ],
   subscribers: [
      "./src/database/subscribers/*.subscribe.ts"
   ],
   cli: {
      entitiesDir: "./src/database/entities",
      migrationsDir: "./src/database/migrations",
      subscribersDir: "./src/database/subscribers"
   }
}