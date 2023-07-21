import { Router } from "express";
import { Knex } from "knex";
import UserController from "@controllers/user.controller";
import { IRoutes } from "@interfaces/routes.interface";

export class UserRoute implements IRoutes {
    public path = '/user';
    public router = Router();
    public user: UserController;
    public knexPool: Knex;
    constructor(knexPool: Knex) {
        this.knexPool = knexPool;
        this.user = new UserController(knexPool);
        this.registerRoutes();
    }
    public registerRoutes() {
        // this.router.get(this.path, (req, res) => this.user.getUsers(req, res));
        this.router.get(this.path, this.user.getUsers.bind(this.user));
        this.router.patch(this.path + "/:id", this.user.updateUser)
    }
}
