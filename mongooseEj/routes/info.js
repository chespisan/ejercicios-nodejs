'use strict';

const express = require('express');
const router = express.Router();

router.get('/info', (req, res)=>{
    res.render('info.ejs');
});


module.exports = router;