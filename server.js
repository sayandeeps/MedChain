const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
})
app.get("/preg", (req, res) => {
    res.sendFile(path.join(__dirname + "/patientregister.html"));
})
app.get("/givepermi", (req, res) => {
    res.sendFile(path.join(__dirname + "/givepermi.html"));
})
app.get("/revokepermi", (req, res) => {
    res.sendFile(path.join(__dirname + "/revokepermi.html"));
})
const server = app.listen(2000);
const portNumber = server.address().port;
console.log(`port is open on ${portNumber}`);