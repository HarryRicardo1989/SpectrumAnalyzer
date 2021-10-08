#!/usr/local/bin/node

const makeScan = require('../../Scanner/makeScan')
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();



router.get('/', function (req, res) {
    res.sendFile(path.join('../HTML/index.html'));
    //__dirname : It will resolve to your project folder.
});
router.get('/parametrers/:freqinit/:freqend/:step/:gain',async function (req, res) {
    let ms = new makeScan();
    let data = ms.InitScan(req.params.freqinit, req.params.freqend, req.params.step, req.params.gain)
    //console.log(data)
    res.send(await data);
});



app.use('/', router);
app.listen(80);

console.log('Running at Port 80');