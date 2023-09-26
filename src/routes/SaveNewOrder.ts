import { Request, Response, Router } from "express";
import express from "express";
import "dotenv/config";

const router = Router();
router.use(express.json())

router.post('/', (req: Request, res: Response) => {

    console.log(req.body)

})

export { router }