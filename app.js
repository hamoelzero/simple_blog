const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const blogRoutes = require("./routes/blogRoutes");
//START APP
const app_port = 3000;
const app = express();

//conect dataBase
const dbUrl = "mongodb://localhost:27017/myDatabase";
mongoose.connect(dbUrl).then((_) => {
  app.listen(app_port);
  console.log("database connected successfully");
});
//
//
//
//
//MIDDLEWARES
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded());
//
//
//
//blog routes
app.get("/", async (req, res) => {
  res.redirect("/blogs");
});
app.use("/blogs", blogRoutes);
//
// 
//
//about
app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
//
//
//
//404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
