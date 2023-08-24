import express from "express";
import create from "../controller/itineraries/create.js";
import read from "../controller/itineraries/read.js"
import readOne from "../controller/itineraries/readOne.js";
import update from "../controller/itineraries/update.js";
import destroy from "../controller/itineraries/destroy.js";

let router = express.Router();

//CREATE
router.post("/", create);

//READ
router.get("/", read);
router.get("/:id", readOne);

//UPDATE
router.put("/:u_id", update);

//DESTROY
router.delete("/:d_id", destroy);

export default router;