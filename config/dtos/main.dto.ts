export interface IConfiguration {
    database: IDatabase;
    server: IServer
}

interface IDatabase {
    client: string;
    name: string;
    host: string;
    port: number;
    user: string;
    password: string;
    acquireConnectionTimeout: number;
    poolMax: number;
    poolMin: number;
}

interface IServer {
    host: string;
    port: number;
}