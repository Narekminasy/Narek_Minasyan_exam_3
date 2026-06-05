import { Router } from "express";
import {
    createFilm,
    getAllFilms,
} from "../controllers/filmController.js";

const router = Router();


router.get("/films", (req, res) => {
    res.render("film.ejs");
});

router.post("/films", (res,req)=>{
    res.render("film.ejs");
});

router.get("/create", createFilm);

router.post("/create", createFilm);



export default router;