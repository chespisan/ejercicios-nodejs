'use strict';

const mongoose = require('mongoose');

const agenteSchema = mongoose.Schema({
    name: String,
    age: Number
});

mongoose.model('Agente', agenteSchema);