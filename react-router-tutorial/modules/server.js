var express = require('express')
var path = require('path')

var compression = require('compression')

var app = express()
app.use(compression())

app.use(express.static(__dirname, 'public'))

app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function(){
  console.log("Production Express running at localhost:" + PORT)
})
