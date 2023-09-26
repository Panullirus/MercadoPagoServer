import { Request, Response, Router } from "express";
import express from "express";
import "dotenv/config";
import { GetProductos } from "../mongodb/Products/ProductControllers";

const router = Router();
router.use(express.json())


router.get('/', (req: Request, response: Response) => {


    try {
        GetProductos().then(res => {
            response.send({Products: res})
        })
    } catch (error) {
        response.sendStatus(500)
    }
})

export { router }