const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => res.send("hello srikar"));

app.listen(port, () => console.log("I am listening"));
