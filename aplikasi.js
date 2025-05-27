const expres = require("express");

const routeR = require("./router/routerPostgres")
const router = require("./router/routerMongo")

const app = expres();


app.use(expres.json());

app.use("/todo", router)
app.use("/identity", routeR)

module.exports = app;
