import express, { Request, Response } from "express";

require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/customers", (req: Request, res: Response) => {
  const customers = [
    { name: "John Doe", email: "john.doe@example.com" },
    { name: "Jane Doe", email: "jane.doe@example.com" },
  ];
  return res.status(200).json(customers);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
