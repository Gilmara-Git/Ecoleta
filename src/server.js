const express = require("express")
const server = express()
const nunjucks = require("nunjucks")

// Ligando o servidor
server.listen(3000, function(){
   console.log("Sou o servidor do Ecoleta")
})

server.use(express.static("public"))

//ligamos o nunjucks ao express e o servidor esta fazendo o processo de passar o html pelo nunjucks
nunjucks.configure("src/views", { 
    express: server,
    noCache: true
})


//vamos usar uma variavel global e concatenar com o index.html para o browser (__dirname)
server.get("/", (req, res)=>{
    return res.render("index.html")
})

server.get("/create-point", (req, res)=>{
   return  res.render("create-point.html")
})

server.get("/search", (req, res)=>{
    return res.render("search-results.html")
})




