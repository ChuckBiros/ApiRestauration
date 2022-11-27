import { Schema } from "mongoose";
import { ControllerALiment } from "./controllers/controllerAliment";
import { ControllerPlat } from "./controllers/controllerPlat";
import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
/**
 * On créé une nouvelle "application" express
 */
const app = express();
app.use(cors());
/**
 * On dit à Express que l'on souhaite parser le body des requêtes en JSON
 *
 * @example app.post('/', (req) => req.body.prop)
 */

const controllerAliment: ControllerALiment = new ControllerALiment();
const controllerPlat: ControllerPlat = new ControllerPlat();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// aliments route
app.get("/", (req, res) => res.send("🏠"));
app.get("/aliments", (req, res) => controllerAliment.getAliments(req, res));
app.get("/aliments/:id", (req, res) => controllerAliment.getOneAliment(req, res));
app.post("/aliments/create", (req, res) => controllerAliment.insertAliment(req, res));
app.put("/aliments/update/:id", (req, res) => controllerAliment.updateAliment(req, res));
app.delete("/aliments/delete/:id", (req, res) => controllerAliment.deleteAliment(req, res));

// plats route
app.get("/plats", (req, res) => controllerPlat.getPlats(req, res));
app.get("/plats/:id", (req, res) => controllerPlat.getOnePlat(req, res));
app.post("/plats/create", (req, res) => controllerPlat.insertPlat(req, res));
app.put("/plats/update/:id", (req, res) => controllerPlat.updatePlat(req, res));
app.delete("/plats/delete/:id", (req, res) => controllerPlat.deletePlat(req, res));

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: "API RESTAURATION",
    version: "0.1.0",
  },
  contact: {
    name: "Boris Montron",
    email: "bmontron@hellowork.com",
  },
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);

app.use("/docs",
  swaggerUi.serve,
  swaggerUi.setup(specs));

app.listen(3000, () => {
  "Serveur listening on port :3000";
});

async function main() {
  await mongoose.connect("mongodb://localhost/Gestion_stock");
  console.log("connected to mongodb");
}

main().catch((err) => console.log(err));
