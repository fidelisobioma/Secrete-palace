//validate form data\
const { body, validationResult } = require("express-validator");
const validateUser = [
  body("username")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Username must be at least 3 characters long"),
  body("email")
    .trim()
    .isEmail()
    .withMessage("Please enter a valid email address"),
  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];

//get all messages
async function getAllMessages(req, res) {
  res.render("index", { title: "Ananymouse Messages" });
}

//get sign up form
async function getSignUpForm(req, res) {
  res.render("signup", { title: "Sign Up" });
}
//submit form data
submitFormData = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("signup", {
        title: "Sign Up",
        errors: errors.array(),
      });
    }
    // If there are no validation errors, proceed with form submission logic
    const { username, email, password } = req.body;
    console.log("Form submitted successfully:", {
      username,
      email,
      password,
    });

    res.redirect("/signup");
  },
];

//get log in form
async function getLoginForm(req, res) {
  res.render("login", { title: "Login" });
}

module.exports = {
  getAllMessages,
  getSignUpForm,
  submitFormData,
  getLoginForm,
};
