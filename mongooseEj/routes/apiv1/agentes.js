'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Agente = mongoose.model('Agente');

/** Middelware */

router.get('/', (req, res, next) =>{
    Agente.find().exec((err, list)=>{
        if (err) {
            next(err);
            return;
        }
        res.json({ok: true, list: list});
    });
});

module.exports = router;
