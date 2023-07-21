import express, { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import EmployeeRoutes from '@routes/employee.route';
import { Knex } from 'knex';
import DatabaseConfig from './database';
import { UserRoute } from '@routes/user.route';

const errorHandle = (
    err: {
        message: string;
        statusCode?: number;
        errorCode?: number;
        onFunction?: string;
        onLibrary?: string;
        onFile?: string;
        logMessage?: string;
        errorObject?: Record<string, any>;
    },
    _req: Request,
    res: Response,
    _next: NextFunction,
) => {
    const uudid = uuidv4();
    console.error(uudid, '-', err.logMessage ?? err.message, { ...err });
    return res.status(err.statusCode ?? 500).json({
        message: err.message,
        code: err.errorCode ?? 500000,
        errorUUID: uudid,
    });
};

const healthEndpoint = (_req: Request, res: Response) => {
    return res.status(200).send('Ok');
}

const handleAllRoutes = (knexPool: Knex): express.Router[] => {
    const employeeRoutes = new EmployeeRoutes();
    const userRoutes = new UserRoute(knexPool);
    const userRouter = userRoutes.router
    const employeRouter = employeeRoutes.router
    const routes = [employeRouter, userRouter];
    return routes;
}

const initDatabase = (): Knex => {
    const databaseConfigurator = new DatabaseConfig();
    const knexPool = databaseConfigurator.addConfig();
    return knexPool;
}

const createServer = (): express.Application => {
    const app = express();
    const knexPool = initDatabase();
    const routes = handleAllRoutes(knexPool);
    app.use(routes);
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.disable('x-powered-by');
    app.use(errorHandle);
    app.get("/", healthEndpoint);
    return app;
};

export { createServer };
