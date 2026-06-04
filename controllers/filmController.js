import Film from "../models/Film.js";

export const getAllFilms = async (req, res) => {
    try {
        const films = await Film.findAll();
        res.json(films);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createFilm = async (req, res) => {
    try {
        const film = await Film.create(req.body);
        res.json(film);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};