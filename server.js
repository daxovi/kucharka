const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const db = require("./databaze/connect");
const getMaterials = require("./routes/GET/getMaterial");
const saveMaterial = require("./routes/POST/saveMaterial");
const cors = require("cors");

db.connect();

/**
 * Middleware
 * Povolme přijímat JSONz frontendu
 */
 app.use(express.json({extended: false}));
 app.use(express.text({extended:false}));

/**
 * Routy - GET
 */
app.use("/", cors(), getMaterials);

/**
 * Routy - POST
 */
app.use("/", saveMaterial);

app.get("/", (request,response) => {
    response.send("Hlavní stránka, milí uživateli");
});

app.listen(PORT, (err) => {
    console.log(`Server běží na ${PORT}!`)
});