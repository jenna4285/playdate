const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);
  
router
  .route("/email/:email")
  .get(userController.findByEmail)
  .put(userController.updateByEmail)

  router
  .route("/email/kid/:email")
  .put(userController.addKidByEmail)
  .get(userController.findByEmail)

  router
  .route("/email/messages/:id")
  .put(userController.addMessageByEmail)
  .get(userController.findMessagesByEmail)

  router
  .route("/email/messages/status/:id")
  .put(userController.markMessageAsRead)
  .get(userController.findMessagesByEmail)

  router
  .route("/email/friends/:email")
  .put(userController.removeFriendByEmail)
  .get(userController.findByEmail)

router
  .route("/activity/:id")
  .put(userController.addUserActivity)
    
module.exports = router;