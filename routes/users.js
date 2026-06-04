import {Router} from "express";
import indexPages from '../routes/index.js';
import FilmsPages from '../routes/films.js';
//import auth from "../middleware/auth.js";


const router = Router();

router.use('/', indexPages);
router.use('/film', FilmsPages);


export default router;