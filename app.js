import express from 'express';
import { create } from 'express-handlebars';

import morgan from 'morgan';
import cookieParser from 'cookie-parser'
import  path from 'path'

const hbs = create({
    extname
});
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

const app = express();
const port = 16215;



// HTTP logger
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');


// Routes

app.get('/', (req, res) => {
    res.render('home')
});


// app.use('/', indexRouter);
// app.use('/users', usersRouter);


app.listen(port, () => console.log(`App running at http://localhost:${port}`));
