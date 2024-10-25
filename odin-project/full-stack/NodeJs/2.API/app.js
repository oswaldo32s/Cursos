const express = require("express");

const app = express();

app.disable("x-powered-by");

// eslint-disable-next-line no-undef
const PORT = process.env.PORT ?? 3000;

//Middleware section
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.post("/pokemon", (req, res) => {
  res.status(201).json(req.body);
});

app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(PORT, () =>
  console.log(`app listening to http://localhost:${PORT}`)
);
