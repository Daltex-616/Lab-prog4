import * as dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";

// configurar base de datos

export const db = new Sequelize(
    process.env.DB_MAIN,
    process.env.DB_USER,
    process.env.DB_PASS,{
        host: process.env.DB_HOST,
        prot: +process.env.DB_PORT,
        dialect: "mysql"
    }
)