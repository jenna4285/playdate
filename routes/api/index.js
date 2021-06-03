const router = require("express").Router();
const userRoutes = require("./users")
const activityRoutes = require("./activity")

router.use("/users", userRoutes)
router.use("/activity", activityRoutes)

module.exports = router;
