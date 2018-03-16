'use strict';

/** Import Modules */
const express = require('express');
const serve = express();

/** Import module mongoose */
require('./lib/connectMongoose');
require('./models/agente');


/** Import Rutes */
const routeIndex = require('./routes/index');
const routeInfo = require('./routes/info');
const routerAgente = require('./routes/apiv1/agentes');

/** Views Engine  */
serve.set('views', __dirname + '/views');
serve.set('view engine', 'ejs');

/** Use Rutes */
serve.use(routeIndex);
serve.use(routeInfo);
serve.use(routerAgente);


/** Server actived */
serve.listen(3000, ()=> console.log('Servidor funcionando en el puerto 3000'));