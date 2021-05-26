const os = require('os')
const path = require('path')
const fs = require('fs')
var home = os.homedir()
var alert = require('alert')
var express = require('express')
var app = express()

app.get('/', (req, res) => {
    var deskpath = path.join(home, 'Desktop', 'downloaded')
    alert('directory create')
    fs.mkdirSync(deskpath)

    res.write('Hello new app')
}).listen(1234)




