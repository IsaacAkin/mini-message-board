import 'dotenv/config.js';
import path from 'node:path';
import express from 'express';
import { fileURLToPath } from 'node:url';
import indexRouter from './routes/index-router.js'

const app = express();
const PORT = process.env.PORT || 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // views template using ejs
app.use(express.urlencoded({ extended: true })); // needed to parse form data into req.body

app.use('/', indexRouter);

app.listen(PORT, (error) => {
    if (error) {
        console.error(error);
    }

    console.log(`App running on http://localhost:${PORT}`);
})