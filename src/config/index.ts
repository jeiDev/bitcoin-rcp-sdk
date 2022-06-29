import 'dotenv/config';
import path from 'path'
import { ConfigI, DB, ENV, BitcoinConfigI, AppI } from '../interfaces/config/config.interface';

const env: ENV = {
    name: process.env.NODE_ENV || "development",
    isProd: process.env.NODE_ENV === "production"
}

const db: DB = {
    name: `${process.env.DB_NAME}`,
    type: `${process.env.DB_DRIVER}`,
    url: `${process.env.DB_URL}`,
    host: `${process.env.DB_HOST}`,
    port: parseInt(`${process.env.DB_PORT}`),
    username: `${process.env.DB_USERNAME}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `${process.env.DB_DATABASE}`,
    ssl: process.env.DB_EXTRA_SSL === "true",
    schema: process.env.DB_SCHEMA || "public",
    synchronize: process.env.DB_SYNCHRONIZE === "true",
    logging: process.env.DB_LOGGING === "true",
    autoReconnect: process.env.DB_AUTO_RECONNECT === "true",
    reconnectTries: parseInt(`${process.env.DB_AUTO_RECONNECT_TRIES}`),
    reconnectInterval: parseInt(`${process.env.DB_AUTO_RECONNECT_INTERVAL}`),
    ...(env.isProd) && {
        extra: {
            ssl: {
                rejectUnauthorized: process.env.DB_EXTRA_SSL_REJECT_UNAUTHORIZED === "true",
            },
        },
    },
    entities: [
        path.join(__dirname, "/../database/**/**/*.entity.{ts,js}"),
        path.join(__dirname, "/../database/**/**/*.view.{ts,js}"),
    ],
    migrations: [
        path.join(__dirname, "/../database/migrations/**/**/*.{ts,js}")
    ],
    seeds: [
        path.join(__dirname, "/../database/seeds/*.seed.{ts,js}")
    ],
    factories: [
        path.join(__dirname, "/../database/factories/**/**/*.{ts,js}")
    ],
    subscribers: [
        path.join(__dirname, "/../database/subscribers/**/**/*.{ts,js}")
    ],
    cli: {
        "entitiesDir": "src/database/entities",
        "migrationsDir": "src/database/migrations",
        "seedsDir": "src/database/seeds",
        "factoriesDir": "src/database/factories"
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