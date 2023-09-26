import { Request, Response, Router } from "express";
import express from "express";
import "dotenv/config";
import { CreateUser } from "../mongodb/Auth/AuthControllers";

const router = Router();
router.use(express.json())

router.post('/', (req: Request, res: Response) => {

    try {
        const x = CreateUser(req.body)
        console.log("asd => ", x)
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }

})

export { router }