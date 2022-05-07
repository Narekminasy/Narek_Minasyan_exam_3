import { Router } from "express";
import auth from "../middleware/auth.js";
import validation from "../middleware/validation.js";
import schema from "../middleware/schemas/users.schema.js";
import {controller} from "../controllers/users.js";

const indexPages = Router();

indexPages.get("/main", auth, (req, res) => {
    res.render("main.ejs");
});

indexPages.get('/register', (req, res) => {
    res.render('register.ejs');
});

indexPages.post(
    '/register',
    validation(schema.register, 'body'),
    controller.register
);
indexPages.get('/login', (req, res) => {
    res.render('login.ejs');
});
indexPages.post(
    '/login',
    validation(schema.login, 'body'),
    controller.login
);

export default indexPages;

