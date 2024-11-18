import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const servidor = express();
servidor.use(express.json());
servidor.use(cors());

import adcionarRotas from './routes.js';
adcionarRotas(servidor);

const PORTA = process.env.PORTA
servidor.listen(
    PORTA,
    () => console.log(`--> API subiu na porta: ${PORTA}`)
)