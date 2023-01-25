require("dotenv").config();
const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const usersRoutes = require("./routes/users");
const dishesRoutes = require("./routes/dishes")

//parst Daten aus req.body (kommend aus HTML Formularen)
app.use(express.urlencoded({ extended: true }));

//parst JSON Daten aus req.body (kommend aus NICHT-HTML Formularen)
app.use(express.json());

//erlaubt Zugriff unabhängig vom Client
app.use(cors());

app.use("/", usersRoutes);
app.use("/", dishesRoutes);

app.get("/", (req, res) => {
  res.send(
    "Unsere erste funktionierende API mit SQL! Diese API hat folgende Endpunkte: /users und eigentlich auch /dishes"
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
