const router = require("express").Router();
router.get("/", (req, res) => {
  res.render("homepage");
});
router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/profile", (req, res) => {
  res.render("profile");
});
router.get("/project", (req, res) => {
  res.render("project");
});
module.exports = router;
