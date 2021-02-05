const express = require("express")
const server = express()
const nunjucks = require("nunjucks")
const routes = require("./routes/routes")

// Ligando o servidor
server.listen(3000, function(){
   console.log("Sou o servidor do Ecoleta")
})

server.use(express.static("public"))
server.use(routes)

//ligamos o nunjucks ao express e o servidor esta fazendo o processo de passar o html pelo nunjucks
nunjucks.configure("src/views", { 
    express: server,
    noCache: true
})






