import { Request, Response, Router } from "express";
import express from "express";
import "dotenv/config";
import { CreateProduct } from "../mongodb/Products/ProductControllers";

const router = Router();
router.use(express.json())


router.post('/', (req: Request, res: Response) => {

    const inputBody = req.body

    try {
        CreateProduct(inputBody).then(res => res)
        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
    }
})

export { router }