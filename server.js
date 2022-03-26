const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const db = require("./databaze/connect");
const getMaterials = require("./routes/GET/getMaterial");
db.connect();

/**
 * Routy - GET
 */
app.use("/", getMaterials);

app.get("/", (request,response) => {
    response.send("Hlavní stránka, milí uživateli");
});

app.listen(PORT, (err) => {
    console.log(`Server běží na ${PORT}!`)
});