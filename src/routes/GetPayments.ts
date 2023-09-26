import { Request, Response, Router } from "express";
import express from "express";
import "dotenv/config";
import { GetPayments } from "../mongodb/Payments/PaymentControllers";

const router = Router();
router.use(express.json())


router.get('/', (req: Request, response: Response) => {


    try {
        GetPayments().then(res => {
            response.send({Payments: res})
        })
    } catch (error) {
        response.sendStatus(500)
    }
})

export { router }