import express from "express";
import create from "../controller/activities/create.js";
import read from "../controller/activities/read.js";
import readOne from "../controller/activities/readOne.js";
import update from "../controller/activities/update.js";
import destroy from "../controller/activities/destroy.js";

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