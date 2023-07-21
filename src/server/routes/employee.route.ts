import { Router } from "express";
import EmployeeController from "@controllers/employee.controller";

class EmployeeRoutes {
    public router: Router;
    private routeName = "/employee";
    private employeeController = new EmployeeController();
    constructor() {
        this.router = Router();
        this.registerRoutes();
    }

    public registerRoutes() {
        this.router.get(this.routeName, this.employeeController.getEmployees)
        this.router.post(this.routeName, this.employeeController.createEmployee)
        this.router.delete(this.routeName + "/:id", this.employeeController.deleteEmployee);
    }
}

export default EmployeeRoutes;
