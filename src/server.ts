import express from 'express'
import { Router, Request, Response } from 'express';
import dotenv from 'dotenv';
import { readArchive } from './utils/loadArchive';
import { convertFileOne } from './services/convertMipsToBinary';

dotenv.config();

const app = express();
const route = Router()

app.use(express.json())

route.get('/', async (req: Request, res: Response) => {
  res.json({ message: await convertFileOne() })
})

app.use(route)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server is running at ", PORT)
})