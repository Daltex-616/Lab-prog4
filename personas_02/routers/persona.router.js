import express from "express";
import { Persona } from "../models/persona.models.js";

export const personasRouter = express.Router();


//get
personasRouter.get("/", async (req,res)=>{
    const personas = await Persona.findAll();
    res.send(personas)
})

//get /:id
 personasRouter.get("/:id", async (req,res) =>{
    const persona = await Persona.findByPk(req.params.id);
    res.send(persona)
 })

 //post 

 personasRouter.post("/", async (req,res)=>{
    const nuevaPersona = await Persona.create({
        apellido: req.body.apellido,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
    })
    res.send(nuevaPersona)
 })

 //put /id

 personasRouter.put("/:id",async (req,res)=>{
    await Persona.update(
        {apellio: req.body.apellido, nombre: req.body.nombre, descripcion: req.body.descripcion},
        {where: {id: req.params.id}}
    )
    res.send("Persona actualizada")
 })

 // delete /:id

 personasRouter.delete("/:id", async (req,res)=>{
    await Persona.destroy({where: {id: req.params.id}})
    res.send("persona eliminada")
 })