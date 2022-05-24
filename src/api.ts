import { Router } from "express";

const baseRouter = Router();
baseRouter.get("/", (req, res)=> res.send("que pasa"));

export default baseRouter;