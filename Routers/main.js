import express from 'express'
const router = express.Router()
import main_f from '../middleware/main_f.js';

router.get('/', main_f)
export default router