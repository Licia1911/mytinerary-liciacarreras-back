import express from'express';
import update from '../controller/users/update.js';
import create from '../controller/users/create.js';
import read from '../controller/users/read.js';
import readOne from '../controller/users/readOne.js';
import destroy from '../controller/users/destroy.js';


let router = express.Router();

//CREATE
router.post('/', create)

//READ
router.get('/', read)
router.get('/:user_id', readOne)

//UPDATE
router.put('/:u_id', update)


router.delete('/:id', destroy)


export default router;
