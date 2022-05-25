import axios from "axios";
import { Request, Response, Router } from "express";
import { makeAPingInRedis } from "./redisConnector";
//import { UserModel } from "./user";

const baseRouter = Router();

baseRouter.get("/", (req, res)=> res.status(200).send("que pasa"));

baseRouter.get("/testRedisConnection", async (req, res) => {

    try{
        const text = await makeAPingInRedis();
        res.status(200).send(text);
    }
    catch(err){
        res.status(500).json({
            success: false,
            errMsg: err.message
        });
    }

});

/*
baseRouter.post("/user", async (req: Request, res: Response) => {

    const user = req.body;

    const userEntity = new UserModel(user);

    userEntity.save();

    res.status(200).send();
});

baseRouter.get("/user",  async (req: Request, res: Response) => {

    const users = await UserModel.find({});

    res.json(users);
})

baseRouter.get("/user/:name", async (req: Request, res: Response) => {
    const name = req.params.name;

    const user = await UserModel.findOne({firstName: name});

    res.json(user);
});
*/

baseRouter.get('/testHttpConnection', async (req: Request, res: Response) => {

    const httpUrl = "https://cat-fact.herokuapp.com/facts/";
    try{
        const data = await axios.get(httpUrl);
        res.json(data.data);
    }
    catch(err){
        res.send("Unable to connect to " + httpUrl);
    }
});


export default baseRouter;