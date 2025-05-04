import express from 'express';
import { createMovies } from "../controllers/controllers.movies.js";
const router = express.Router();


router.get('/', createMovies)

router.post('/', () => { })

router.put('/:id', () => { })

router.delete('/:id', () => { })


export default router;

