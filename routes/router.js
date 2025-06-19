const { Router } = require("express");
const router = Router();

//bring in controller
const controller = require("../controllers/controllers");

//get all messages
router.get("/", controller.getAllMessages);

//get sign up form
router.get("/signup", controller.getSignUpForm);
//submit form data
router.post("/signup", controller.submitFormData);

//get login form
router.get("/login", controller.getLoginForm);

module.exports = router;
