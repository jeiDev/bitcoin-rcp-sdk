import 'dotenv/config';
import path from 'path'
import { ConfigI, DB, ENV, BitcoinConfigI, AppI } from '../interfaces/config/config.interface';

const env: ENV = {
    name: process.env.NODE_ENV || "development",
    isProd: process.env.NODE_ENV === "production",
    isTest: process.env.NODE_ENV === "test",
}

const db: DB = {
    name: `${process.env.TYPEORM_DB_NAME}`,
    type: "postgres",
    url: `${process.env.TYPEORM_DB_URL}`,
    host: `${process.env.TYPEORM_DB_HOST}`,
    port: parseInt(`${process.env.TYPEORM_DB_PORT}`),
    username: `${process.env.TYPEORM_DB_USERNAME}`,
    password: `${process.env.TYPEORM_DB_PASSWORD}`,
    database: `${process.env.TYPEORM_DB_DATABASE}`,
    ssl: process.env.TYPEORM_DB_EXTRA_SSL === "true",
    schema: process.env.TYPEORM_DB_SCHEMA || "public",
    synchronize: process.env.TYPEORM_DB_SYNCHRONIZE === "true",
    logging: process.env.TYPEORM_DB_LOGGING === "true",
    autoReconnect: process.env.TYPEORM_DB_AUTO_RECONNECT === "true",
    reconnectTries: parseInt(`${process.env.TYPEORM_DB_AUTO_RECONNECT_TRIES}`),
    reconnectInterval: parseInt(`${process.env.TYPEORM_DB_AUTO_RECONNECT_INTERVAL}`),
    ...(env.isProd) && {
        extra: {
            ssl: {
                rejectUnauthorized: process.env.TYPEORM_DB_EXTRA_SSL_REJECT_UNAUTHORIZED === "true",
            },
        },
    },
    entities: [
        path.join(__dirname, "/../database/entities/**/*.entity.{ts,js}"),
        path.join(__dirname, "/../database/entities/*.view.{ts,js}"),
    ],
    migrations: [
        path.join(__dirname, "/../database/migrations/*.{ts,js}")
    ],
    seeds: [
        path.join(__dirname, "/../database/seeds/*.seed.{ts,js}")
    ],
    factories: [
        path.join(__dirname, "/../database/factories/*.{ts,js}")
    ],
    subscribers: [
        path.join(__dirname, "/../database/subscribers/*.{ts,js}")
    ],
    cli: {
       entitiesDir: path.join(__dirname, "/../database/migrations"),
       migrationsDir: path.join(__dirname, "/../database/factories"),
       subscribersDir: path.join(__dirname, "/../database/subscribers")
    }
}

const bitcoin: BitcoinConfigI = {
    username: `${process.env.BITCOIN_USERNAME}`,
    password: `${process.env.BITCOIN_PASSWORD}`,
    network: `${process.env.BITCOIN_NETWORK}`,
    url: `${process.env.BITCOIN_URL}`
}

const app: AppI = {
    nodeEnv: `${process.env.NODE_ENV}`,
    port: parseInt( `${process.env.PORT}`)
}


const config: ConfigI = {
    app,
    bitcoin,
    env,
    db
}

export default config;