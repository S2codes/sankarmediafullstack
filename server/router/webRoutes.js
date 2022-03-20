const express = require('express');
const router = express.Router()

router.get('/', (req, res) =>{
    res.render('index')
})
router.get('/services', (req, res) =>{
    res.render('services')
})
router.get('/offlinecourse', (req, res) =>{
    res.render('offlinecourse')
})
router.get('/onlinecourse', (req, res) =>{
    res.render('onlinecourse')
})
router.get('/course', (req, res) =>{
    res.render('course')
})
router.get('/about', (req, res) =>{
    res.render('about');
})
router.get('/contact', (req, res) =>{
    res.render('contactus');
})


module.exports = router;