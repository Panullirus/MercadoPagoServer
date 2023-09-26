import { Request, Response, Router } from "express";
import express from "express";
import { MercadoPago } from "../controllers/MercadoPago.controllers";
import "dotenv/config";

const router = Router();
router.use(express.json())

const MercadoPagoService = new MercadoPago(process.env.MP_ACCESS_TOKEN as string);

router.post('/', (req: Request, res: Response) => {

    try {
        const mercadoResponse = MercadoPagoService.CreatePreference(req.body);

        mercadoResponse?.then((response) => {
            res.send({ status: 200, body: response.body.init_point }).sendStatus(200)
        })

    } catch (error) {
        res.sendStatus(500)
    }
})

export { router }