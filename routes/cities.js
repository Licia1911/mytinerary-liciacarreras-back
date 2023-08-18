import express from 'express';
import create from '../controller/cities/create.js';
import read from '../controller/cities/read.js';
import readOne from '../controller/cities/readOne.js';
import update from '../controller/cities/update.js'
import destroy from '../controller/cities/destroy.js';



let router = express.Router();

//CREATE
router.post('/', create)

//READ
router.get('/', read)
router.get('/:id', readOne)

//UPDATE
router.put('/:_id', update)

//DESTROY
router.delete('/:id', destroy)

export default router