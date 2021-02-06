const express = require("express");
const routes = express.Router()
const PlacesController = require("../app/controllers/PlacesController")


routes.get("/", PlacesController.index)

routes.get("/create-point", PlacesController.create) 

routes.post("/create-point", PlacesController.post)

routes.get("/search", PlacesController.search)

module.exports = routes