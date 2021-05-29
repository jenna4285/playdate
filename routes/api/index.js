const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./users")


router.use("/users", userRoutes)

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
