const express = require("express");
const app = express();
const Twitter = require("./api/helpers/twitter");
const twitter = new Twitter();
const port = 8080;
require("dotenv").config();

app.get("/tweets", (req, res) => {
  const query = req.query.q;
  const count = req.query.count;
  console.log(process.env.TWITTER_API_TOKEN);
  twitter
    .get(query, count)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.listen(port, () => console.log("I am listening"));
