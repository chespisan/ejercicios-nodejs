'use strict';

const mongoose = require('mongoose');

const db = mongoose.connection;

/** Eventos */
db.on('error', (err)=>{
    console.log(err);
});

db.once('open', ()=>{
    console.info('conectado a mongoose');
});

mongoose.connect('mongodb://localhost/ejerciciosNode');

