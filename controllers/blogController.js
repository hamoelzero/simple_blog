const Blog = require("../models/blog");

const blog_create_post = (req, res) => {
  let body = req.body;
  const blog = new Blog(body);
  blog
    .save()
    .then((result) => res.redirect("/blogs"))
    .catch((err) => {
      console.log(err);
      res.next;
    });
};
const blog_create_get = (req, res) => {
  Blog.find().then((result) =>
    res.render("index", { title: "Home", blogs: result })
  );
};
const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      if (result) {
        res.render("blogContent", { title: "blogInfo", blog: result });
      } else throw Error("not found");
    })
    .catch((err) => res.status(404).render("404", { title: "blog not found" }));
};
const blog_create = (req, res) => {
  res.render("create", { title: "new blog" });
};
const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findOneAndDelete(id)
    .then((result) => {
      res.send("deleted success");
    })
    .catch((err) => console.log(err));
};
module.exports = {
  blog_create_post,
  blog_create_get,
  blog_details,
  blog_create,
  blog_delete,
};
