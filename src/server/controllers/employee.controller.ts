import { NextFunction, Request, Response } from "express";

class EmployeeController {
    public getEmployees(req: Request, res: Response, next: NextFunction) {
        console.log("all employees")
        res.json({ data: "success" })
    }

    public createEmployee(req: Request, res: Response, next: NextFunction) {
        console.log("create employee")
    }

    public deleteEmployee(req: Request, res: Response, next: NextFunction) {
        console.log("delete employee")
    }
}

export default EmployeeController;