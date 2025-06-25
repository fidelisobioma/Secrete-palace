const { Router } = require("express");
const router = Router();

//bring in controller
const controller = require("../controllers/controllers");

//get sign up form
router.get("/signup", controller.getSignUpForm);
router.post("/signup", controller.submitFormData);

//get login form
router.get("/login", controller.getLoginForm);

//get dashboard
router.get("/", controller.displayMessage);

router.post("/new-message", controller.sendMessage);

//delete message
router.get("/delete/:userId", controller.deleteMessage);

//edit message
router.get("/edit/:userId", controller.editMessage);
//submit edited message
router.post("/edit/:userId", controller.updateMessage);
//submit accessmember form
router.post("/accessmember", controller.submitMemberAnswer);

module.exports = router;
