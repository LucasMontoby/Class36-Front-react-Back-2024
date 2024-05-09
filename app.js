const express=require('express');
const session = require ('express-session');
const bodyParser =require('body-parser');
const cors = require('cors');

const cursosRoutes = require('./routes/cursos');
const userRoutes = require('./routes/authRoutes');
const {appConfig} =require ('./config');

const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/public', express.static(`${__dirname}/storage/imgs`))

app.use(session({
    secret: `${appConfig.secret}`,
    resave: false,
    cookie: {expires: new Date (Date.now() + 7 * 24 * 60 * 60 * 1000 )},
    saveUninitialized: false,
  }));

app.use ('/v1', cursosRoutes);
app.use ('/auth', userRoutes);

module.exports = app