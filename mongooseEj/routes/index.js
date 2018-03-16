'use strict';

/** Import Modules */
const express = require('express');
const router = express.Router();

/** Rutes */
router.get('/', (req, res) =>{
    res.render('index.ejs');
});

/** Export Module */
module.exports = router;