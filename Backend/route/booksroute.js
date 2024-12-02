import express from 'express';
import { getBook } from '../controller/bookcontroller.js'; // Ensure the path is correct

const router = express.Router();

// Define the route
router.get("/", getBook);

export default router;
