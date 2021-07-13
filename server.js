"use strict"

const jsonServer = require("json-server")
const _jsonExtender = require("json-server-extension")
const app = jsonServer.create()
const path = require("path")
const express = require("express")

//options:
//fullPath:full path for the combined object
//generatedPath:the path where the generated files will be found
//staticPath:the path where the static files will be found
const jsonExtender = new _jsonExtender({
  filePath: "./db_extends.json",
  generatedPath: "./generated",
  staticPath: "./static",
})

//register accept array of generators or path to the generator scripts
//const funcs =  Object.keys(generators).map(key => generators[key])
jsonExtender.register("../../../generators")
jsonExtender
  .generate()
  .then((data) => {
    var server = jsonServer.create()
    var router = jsonServer.router("./db_extends.json")
    var middlewares = jsonServer.defaults()
    const PORT = process.env.PORT || 3000

    app.use("/db", middlewares, router)
    app.use(express.static(path.join(__dirname, "build")))

    app.get("/*", function (req, res) {
      res.sendFile(path.join(__dirname, "build", "index.html"))
    })

    server.use(middlewares)
    server.use(router)
    server.listen(PORT, function () {
      console.log("JSON Server is running")
      console.log(`Your app is running on port ${PORT}`)
    })
  })
  .catch((e) => {
    console.log(e)
  })
