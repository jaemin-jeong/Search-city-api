import express from "express";
import City from './City.js';

const router = express.Router();

router.use('/city', City)

export default router;