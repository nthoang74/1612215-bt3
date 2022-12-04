const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')

const indexRouter = require('./src/routes/index.js');
// var usersRouter = require('./routes/users');

const app = express();
const port = 16215;



// HTTP logger
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));

// Template engine

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './src/views');


// Routes

// app.get('/', (req, res, next) => {
//     res.render('home')
// });



app.use('/', indexRouter);
// app.use('/users', usersRouter);


app.listen(port, () => console.log(`App running at http://localhost:${port}`));
