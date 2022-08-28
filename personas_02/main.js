import express from "express"
import {db} from "./db.js" //agreagr capas el .js
import { personasRouter} from "./routers/persona.router.js";

//configurar Express
const app = express()
app.use(express.json())

// Routers
app.use("/user", personasRouter)

// Mensaje de Bienvenida

app.get("/",(req,res)=>{
    res.send("el api esta funcionando en el puerto 4000")
});

// Ejecutar API

app.listen(4000, async()=>{
    try{
        await db.authenticate()
        console.log("la coneccion a base de dato exitosa")
    }catch(err){
        console.error("no se puede conectar a la base de dato",err)
    }
    console.log("api funcionando")

})
