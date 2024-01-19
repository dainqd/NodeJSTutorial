const express = require("express");
const con = require("../../config/connection");
const path = require('path');
const {query} = require("express");

module.exports = app => {
    var path = require('path');

    var router = require("express").Router();


    app.set('views', path.join(__dirname, '../../ui'));
    app.set('view engine', 'ejs');
    app.use(express.static(path.join(__dirname, '../../public')));

    router.get('/', function (req, res, next) {
        res.render('index', {title: 'Express', session: req.session});
    });

    app.use('/', router);

    module.exports = router;
};