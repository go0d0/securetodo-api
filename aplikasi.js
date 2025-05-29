require("dotenv").config();

const expres = require("express");

const routeR = require("./router/routerPostgres")
const router = require("./router/routerMongo")
const customMiddleware = require("./custom_middleware/custom");
const app = expres();


app.use(expres.json());
app.use(expres.static("web"));
app.use(customMiddleware);

app.use("/todo", router)
app.use("/identity", routeR)

module.exports = app;
