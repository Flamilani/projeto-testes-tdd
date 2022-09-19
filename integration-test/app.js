const express = require("express");
const app = express();

// Converter em JSON
app.use(express.json());

// Persistir dados
const persons = require("./data/persons.json");

// GET test
app.get('/test', (req, res) => {
    res.json({message: 'test pass!'});
  });

// GET persons 
app.get("/get", (req, res) => {
   return res.status(200).json(persons);
});

// POST persons
app.post("/post", (req, res) => {
    persons.push(
        {
            id: Math.floor(Math.random() * 100),
            name: "Flavio Gava",
            age: 25,
            city: "Rio de Janeiro"
        }
    );
    return res.status(201).json(persons);
});

// PUT (UPDATE) persons
app.put("/update/:id", (req, res) => {
    const obj = persons.find((el) => el.id === Number(req.params.id));

    obj.name = "Flavio Milani";
    obj.age = 45;
    obj.city = "Porto Alegre";
    return res.status(200).json(persons);
  });
  
  // DELETE persons
  app.delete("/delete/:id", (req, res) => {
    const obj = persons.findIndex((el) => el.id === Number(req.params.id));
    persons.splice(obj, 1);

    return res.status(200).json(persons);
  });

module.exports = app;