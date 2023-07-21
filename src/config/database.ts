import knex, { Knex } from "knex";
import { mainConfiguration } from "@mainConfig/main";
import { IConfiguration } from "@mainConfig/dtos/main.dto";
import { IDatabaseNecessary } from "@interfaces/database.interface";

class DatabaseConfig implements IDatabaseNecessary {
    public configuration: IConfiguration
    constructor() {
        this.configuration = mainConfiguration.getConfig();
    }
    public addConfig(): Knex {
        const knexConfig: Knex.Config = {
            client: this.configuration.database.client,
            version: '8.0.27',
            connection: {
                host: this.configuration.database.host,
                port: this.configuration.database.port,
                user: this.configuration.database.user,
                password: this.configuration.database.password,
                database: this.configuration.database.name,
            },
            acquireConnectionTimeout:
                this.configuration.database.acquireConnectionTimeout,
            pool: {
                min: this.configuration.database.poolMin,
                max: this.configuration.database.poolMax,
            },
        };
        const safeKnexConfigToLog = JSON.parse(JSON.stringify(knexConfig));
        safeKnexConfigToLog.connection.password = "***";
        console.info("Knex configuration:\n", safeKnexConfigToLog)
        return knex(knexConfig);
    }
}
export default DatabaseConfig;
