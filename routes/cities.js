import express from 'express';
import create from '../controller/cities/create.js';
import read from '../controller/cities/read.js';
import readOne from '../controller/cities/readOne.js';
import update from '../controller/cities/update.js'
import destroy from '../controller/cities/destroy.js';
import carousel from '../controller/cities/carousel.js';


let router = express.Router();

//CREATE
router.post('/', create)

//READ
router.get('/', read)
router.get('/carousel', carousel)
router.get('/:id', readOne)   // Los endpoints que llevan params VAN SIEMPRE AL FINAL(Para que no detecte la palabra como parametro configurado)

//UPDATE
router.put('/:uc_id', update)

//DESTROY
router.delete('/:id', destroy)

export default router