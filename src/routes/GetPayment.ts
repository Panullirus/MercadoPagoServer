import { Request, Response, Router } from "express";
import express from "express";
import "dotenv/config";
import { MercadoPago } from "../controllers/MercadoPago.controllers";

const router = Router();
router.use(express.json())

const MercadoPagoService = new MercadoPago(process.env.MP_ACCESS_TOKEN as string);

router.post('/', (req: Request, response: Response) => {

    console.log(req.body)

    try {
        MercadoPagoService.VeryfyPaymentStatus(req.body.id, MercadoPagoService).then(data => {
            response.send({Payment: data})
        })
    } catch (error) {
        response.sendStatus(500)
    }
})

export { router }