import config from "./src/config";

export default  {
   ...config.db,
   entities: [
      "./src/database/entities/*.entity.{ts,js}"
   ],
   migrations: [
      "./src/database/migrations/*.{ts,js}"
   ],
   subscribers: [
      "./src/database/subscribers/*.subscribe.{ts,js}"
   ],
   cli: {
      entitiesDir: "./src/database/entities",
      migrationsDir: "./src/database/migrations",
      subscribersDir: "./src/database/subscribers"
   }
}