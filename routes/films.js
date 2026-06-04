import { Router } from "express";
import {
    createFilm,
    getAllFilms,
} from "../controllers/filmController.js";

const router = Router();


router.get("/create", createFilm);

router.post("/create", createFilm);

router.get("/", getAllFilms);

export default router;