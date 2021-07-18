const router = require("express").Router();
const activityController = require("../../controllers/activityController");

// Matches with "/api/activity"
router.route("/")
  .get(activityController.findAll)
  .post(activityController.create);

// Matches with "/api/activity/:id"
router
  .route("/:id")
  .get(activityController.findById)
  .put(activityController.update)
  .delete(activityController.remove);

// Matches with "/api/activity/comment/:id"
router
  .route("/comment/:id")
  .put(activityController.addCommentByActivityID)
  // .delete(activityController.removeComment);
  
// Matches with "/api/activity/email/:email"
router
  .route("/email/:email")
  .get(activityController.findByEmail)
  .put(activityController.updateByEmail)

  // Matches with "/api/activity/email/kid/:email -- might not use this
  router
  .route("/email/kid/:email")
  // .put(activityController.addKidByEmail)
  .get(activityController.findByEmail)

router
  .route("/attendee/:id")
  .put(activityController.addAttendeeById)
  .delete(activityController.removeAttendeeById)
    
module.exports = router;