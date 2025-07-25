const express = require("express");
const blogController = require("../controllers/blogController");
const router = express.Router();

router.post("/", blogController.blog_create_post);
router.get("/", blogController.blog_create_get);
router.get("/create", blogController.blog_create);
router.get("/:id", blogController.blog_details);
router.delete("/:id", blogController.blog_delete);
module.exports = router;
