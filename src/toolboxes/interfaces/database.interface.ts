import { IConfiguration } from "@/config/dtos/main.dto";
import { Knex } from "knex";

export interface IDatabaseNecessary {
    // knexPool?: Knex
    configuration: IConfiguration;
    addConfig: () => Knex;
}
