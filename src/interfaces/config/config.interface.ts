export interface ConfigI {
    bitcoin: BitcoinConfigI
    db: DB
    env: ENV
    app: AppI
}

export interface BitcoinConfigI {
    username: string
    password: string
    network: string
    url: string
}

export interface DB {
    name: string;
    type: string;
    url: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    ssl: boolean;
    schema: string;
    synchronize: boolean;
    logging: boolean;
    autoReconnect: boolean;
    reconnectTries: number;
    reconnectInterval: number;
    extra?: ExtraSSL;
    entities: Array<string>;
    migrations: Array<string>;
    seeds: Array<string>;
    factories: Array<string>;
    subscribers: Array<string>;
    cli: { [key: string]: string };
}

export interface ExtraSSL {
    ssl: {
        rejectUnauthorized: boolean;
    }
}

export interface ENV {
    name: string;
    isProd: boolean;
    isTest: boolean;
}

export interface AppI {
    nodeEnv: string
    port: number
}

