import { Request, Response } from "express";
import { Knex } from "knex";

class UserController {
    public knexPool: Knex;
    constructor(knexPool: Knex) {
        this.knexPool = knexPool;
    }
    public async getUsers(req: Request, res: Response) {
        const users = await this.knexPool.table('users').select()
        console.log(users);
        res.json({ data: users, code: 2005, message: "OK" })
    }
    public updateUser() {
        console.info("update users...")
    }
}

export default UserController
