const router = require("express").Router();

router.use("/users", require("./api/users"));
// router.use("/movies", require("./api/movies"));

module.exports = router;
