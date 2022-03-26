const getMaterials = require("express").Router();
getMaterials.get("/get-materials", (req, res) => {
    res.json({
        msg:"uspesne jsem ziskal suroviny",
        seznamSurovin: [
            {surovina: "Mrkev"},
            {surovina:"Celer"},
            {surovina:"Brambory"}
        ]
    })
})

module.exports = getMaterials;