import {
  createCustomer,
  getCustomerById,
  getCustomers,
} from "../controllers/customers";
import express from "express";

const customerRouter = express.Router();

customerRouter.post("/customers/create", createCustomer);
customerRouter.get("/customers", getCustomers);
customerRouter.get("/customers/:id", getCustomerById);

export default customerRouter;
