import express from "express";
import morgan from 'morgan';
const app = express();

//setting
app.set("appNombre","Federico Zamora");
app.set("port",3333);

//middlewares
app.use(express.json())


//rutas
let personas = [
        { id: 1, nombre: "Facundo", apellido:"Arnaudo" },
        { id: 2, nombre: "Gaston", apellido:"Davila" },
        { id: 3, nombre: "Mauro", apellido:"Molina" },
        { id: 4, nombre: "Federico", apellido:"Zamora" },
      ];

app.get("/",(req,res)=>{
        res.send(`Api de Personas creada por ${app.get("appNombre")}`)
})

app.get("/user",(req,res)=>{
        res.send(personas)
})
app.get("/user/:id",(req,res)=>{
        const person = personas.find((person)=>person.id == req.params.id)
        res.send(person ?? {})
})



// POST
app.post("/user", (req, res) => {
        const maxId = personas.reduce(
          (prev, actual) => (actual.id > prev.id ? actual : prev),
          personas[0]
        ).id;
      
        const nuevaPersona = {
          id: maxId + 1,
          nombre: req.body.nombre,
          apellido: req.body.apellido,
        };
      
        personas.push(nuevaPersona);
      
        res.send(`la persona ${nuevaPersona.nombre} ${nuevaPersona.apellido} con ID: "${nuevaPersona.id}" se agrrego con exito`);
      });


// PUT /tareas/:id
app.put("/user/:id", (req, res) => {
        personas.map((person) => {
          if (person.id == req.params.id) {
            person.nombre = req.body.nombre;
            person.apellido = req.body.apellido;
          }
        });
        res.send(`El ID: ${req.params.id} se actualizo = nombre:"${req.body.nombre}" apellido: "${req.body.apellido}" con exito`);
      });

// DELETE /tareas/:id
app.delete("/user/:id", (req, res) => {
        personas = personas.filter((person) => person.id != req.params.id);
        res.send(`el ID: "${req.params.id}" fue borrado con exito`);
      });


//app lisen
app.listen(app.get("port"),()=>{
        console.log(app.get("appNombre"))
        console.log(`API funcionando en puerto ${app.get("port")}`)
})

    