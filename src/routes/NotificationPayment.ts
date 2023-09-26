import { Request, Response, Router } from "express";
import express from "express";
import "dotenv/config";
import { MercadoPago } from "../controllers/MercadoPago.controllers";

const router = Router();
router.use(express.json())

const MercadoPagoService = new MercadoPago(process.env.MP_ACCESS_TOKEN as string);

router.post('/', (req: Request, res: Response) => {

    if(req.body.type == "payment"){
        MercadoPagoService.VeryfyPaymentStatusAndSave(req.body, MercadoPagoService)
        return res.sendStatus(201)

    }

    console.log(req.body)

})

export { router }