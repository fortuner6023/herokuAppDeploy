const express = require('express');
// const { index, about,service } = require('../controller/indexControl');

const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index.html')
})

module.exports = router;