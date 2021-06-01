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
    
module.exports = router;