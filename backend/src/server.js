const port = 8086

const bodyParser = require('body-parser')
const express = require('express')

const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))

server.get('/', (req,res) => {
    res.json({hello :'World'})
})

require('./routes/company.routes')(server)


server.listen(port, () =>console.log(`Backend running on port ${port}.`))

module.exports = server