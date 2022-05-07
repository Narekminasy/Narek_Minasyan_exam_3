import path from 'path'
import express from 'express';
import 'dotenv/config';
import {fileURLToPath} from "url";
import morgan from "morgan";
import cookieParser from 'cookie-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const {PORT} = process.env || 4000;
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


//express home

app.post('/login', (req, res) => {
    res.render('login');
});
app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.post('/register', (req, res) => {
    res.render('register.ejs');
});

app.get('/register', (req, res) => {
    res.render('register.ejs');
});

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
});