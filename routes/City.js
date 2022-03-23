import express from "express";
import City from '../controllers/City.js'

const router = express.Router();

router.get('/info/:name', City.info);

export default router;