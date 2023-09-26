import { Request, Response, Router } from "express";
import express from "express";
import "dotenv/config";
import { ComparePassword, FindUserByEmail } from "../mongodb/Auth/AuthControllers";
import jwt from 'jsonwebtoken';

const router = Router();
router.use(express.json())

function createJWT(payload: any, tiempoExpiracion: string): string {
    const token = jwt.sign(payload, 'tu_secreto_secreto', { expiresIn: tiempoExpiracion });
    return token;
  }

router.post('/', (req: Request, res: Response) => {

    FindUserByEmail(req.body.email, req.body.password).then(async data => {
        const passwordmatch = await ComparePassword(req.body.password, String(data?.password))

        const input = {
            name: data?.name,
            lastname: data?.lastName,
            cart: data?.cart,
            purchases: data?.purchases
        }

        const token = createJWT(input, "1h")

        if(passwordmatch){
            res.send({code: 201, data: input, token: token})
        }
    })
})

export { router }