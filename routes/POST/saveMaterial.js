const saveMaterial = require("express").Router();
const modelMaterial = require("../../models/material");

saveMaterial.post("/save-material", (req, res) => {
    const {name} = req.body;
    const surovina = new modelMaterial({
        name: name,
    })
    surovina.save((err, document) => {
        if(err){
            return res.json({
                msg: "bohužel nedošlo k uložení suroviny",
            })
        } else {
            return res.json({
                msg: `Došlo k úspěšenému uložení receptu ${JSON.stringify(document)}`,
            })
        }
    });
})

saveMaterial.get("/save-material", (req, res) => {
    res.send("Ano, navštívil jsi /save-material GETem");
})

module.exports = saveMaterial;