const express = require("express");
const routes = express.Router()


routes.get("/", (req, res)=>{
    return res.render("index.html")
})

routes.get("/create-point", (req, res)=>{
   return  res.render("create-point.html")
})

routes.get("/search", (req, res)=>{
    return res.render("search-results.html")
})

module.exports = routes