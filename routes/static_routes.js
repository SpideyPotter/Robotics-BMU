const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/team.html', (req, res) => {
  res.sendFile(path.join(__dirname,'../public/html/team.html'));
})

router.get('/ContactUs.html', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/html/ContactUs.html'));
})

router.get('/events2.html', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/html/events2.html'));
})

router.get('/index.html', (req, res) => { 
    res.sendFile(path.join(__dirname,'../public/html/index.html'));
})

router.get('/events.html', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public/html/events.html'));
})

router.get('/gallery.html', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public/html/gallery.html'));
})

router.get('/gallery1.html', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public/html/gallery1.html'));
})

router.get('/gallery2.html', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public/html/gallery2.html'));
})

router.get('/hover.html', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public/html/hover.html'));
})

router.get('/Login.html', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public/html/Login.html'));
})

router.get('/resources.html', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public/html/resources.html'));
})

router.get('/signup.html', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public/html/Signup.html'));
})

router.get('/timeline.html', (req, res) =>{
    res.sendFile(path.join(__dirname,'../public/html/timeline.html'));
})

module.exports = router;