import 'dotenv/config.js'
import __dirname from './utils.js';   
//var createError = require('http-errors');
import createError from 'http-errors'; //crea errores
//var express = require('express');
import express from 'express'; // Provee metodos y propirdades para levantar servidores
//var path = require('path');
import path from 'path';  //Para conocer la ubicación de nuestro servidor
//var cookieParser = require('cookie-parser');  
//var logger = require('morgan');
import logger from 'morgan'  // para registrar cada una de las peticiones

//var indexRouter = require('./routes/index'); //Este enrutador va a llamar a todos los otros recursos // todas las rutas están acá
import indexRouter from './routes/index.js'

let app = express(); //ejecutando el módulo de expresscreo una APP de Backend

// view engine setup
//SET es el método necesario para setear (configurar) algo (motor de plantillas de vista de EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Midddlewares
//Metodo USE es el método necesario para obligar a mi aplicacion a que use la función cada vez que se realiza una solicitud/peticion
app.use(logger('dev'));                                   //obligo al servicor a registrar una peticion con el mod de logger/morgan
app.use(express.json());                                  // obligo al servicor a manipular/leer json
app.use(express.urlencoded({ extended: false }));         // Obliga al servicdor a leer params/queries
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //obligo al servidor s usar los archivos estáticos de la carpeta public

//ROUTER
app.use('/api', indexRouter);                               //obligo al servidor a que use las rutas del enrutador ppal con "/api"


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
