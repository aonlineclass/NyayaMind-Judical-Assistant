import {querycases,queryrecomnd,anylyzequery, anaskquerynew} from '../middleware/dboperations_f.js';
import express from 'express'
const router = express.Router()

router.post('/querycases', querycases)
router.post("/queryrecomnd",queryrecomnd)
router.post("/anylyzequery",anylyzequery)
router.post("/anaskquery",anaskquerynew)


export default router