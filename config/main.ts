import { IConfiguration } from "./dtos/main.dto";
import dotenv from 'dotenv';

dotenv.config();

class MainConfiguration {
    public getConfig() {
        const config: IConfiguration = {
            server: {
                host: process.env.HOST ?? "localhost",
                port: parseInt(process.env.PORT ?? "5000")
            },
            database: {
                client: process.env.DATA_BASE_CLIENT ?? "",
                name: process.env.DATA_BASE_NAME ?? "",
                host: process.env.DATA_BASE_HOST ?? "",
                port: parseInt(process.env.DATA_BASE_PORT ?? "3306"),
                user: process.env.DATA_BASE_USER ?? "",
                password: process.env.DATA_BASE_PASSWORD ?? "",
                acquireConnectionTimeout: parseInt(process.env.DATA_BASE_ACQUIRE_CONNECTION_TIMEOUT ?? "60000"),
                poolMax: parseInt(process.env.DATA_BASE_POOL_MAX ?? "7"),
                poolMin: parseInt(process.env.DATA_BASE_POOL_MIN ?? "2")
            }
        }
        return config;
    }
}

export const mainConfiguration = new MainConfiguration();