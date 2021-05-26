const os = require('os')
const path = require('path')
const fs = require('fs')
var home = os.homedir()
var alert = require('alert')

var deskpath = path.join(home, 'Desktop', 'downloaded')
alert('directory create')

fs.mkdirSync(deskpath)


