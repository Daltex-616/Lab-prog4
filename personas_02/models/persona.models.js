import { db } from "../db.js"; //agregar el .js
import { DataTypes } from "sequelize";


//definir modelo de tarea

export const Persona = db.define(
    "Persona",
    {
        id:{
            field:"id",
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement:true,
            primaryKey: true,
        },
        apellido:{field:"apellido", type: DataTypes.STRING(100)},
        nombre:{field:"nombre",type: DataTypes.STRING(100)},
        descripcion:{field:"descripcion",type: DataTypes.STRING(100)}
    },
    {tableName:"personas", timestamps:false}
)