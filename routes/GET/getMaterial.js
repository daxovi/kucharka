const getMaterials = require("express").Router();
const materails = require("../../models/material");
getMaterials.get("/get-materials", (req, res) => {
    materails.find({}, (err, docs) => {
        if(err) {
            return res.json({
                msg: "bohužel se nepodařilo získat žádné dokumenty",
                documents: []
            })
        } else {
            return res.json({
                msg: "úspěšně se podařily získat suroviny",
                documents: docs
            })
        }
    });
})

module.exports = getMaterials;