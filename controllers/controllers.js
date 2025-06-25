//validate form data\
const { body, validationResult } = require("express-validator");

//hash password
const bcrypt = require("bcryptjs");

//bring in queries file
const db = require("../db/queries");

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

//get sign up form
async function getSignUpForm(req, res) {
  res.render("signup", { title: "Sign Up" });
}
//submit form data
submitFormData = [
  validateUser,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("signup", {
        title: "Sign Up",
        errors: errors.array(),
      });
    }
    // If there are no validation errors, proceed with form submission logic
    const { username, email } = req.body;
    const hashpassword = await bcrypt.hash(req.body.password, 10);
    await db.InsertUsersData(username, email, hashpassword);
    console.log("Form submitted successfully:", {
      username,
      email,
      hashpassword,
    });

    res.redirect("/login");
  },
];

//get log in form
async function getLoginForm(req, res) {
  res.render("login", { title: "Login" });
}

//display message
async function displayMessage(req, res) {
  const usersdata = await db.getAllMessages();
  const usersdataObj = usersdata.find((data) => data.user_id !== null);
  const memberId = usersdataObj.user_id;
  res.render("dashboard", {
    loginUser: req.user,
    usersdata: usersdata,
    memberId: memberId,
  });
  console.log(memberId);
}

//submit message
async function sendMessage(req, res) {
  const userId = req.user.id;
  const { message } = req.body;
  await db.insertMessage(userId, message);
  res.redirect("/");
}
//delete message
async function deleteMessage(req, res) {
  const { userId } = req.params;
  const user_id = req.user.id;
  await db.deleteMessage(userId, user_id);
  res.redirect("/");
}

//edit mesage
async function editMessage(req, res) {
  const { userId } = req.params;
  const user_id = req.user.id;
  const editMessage = await db.editMatchMessage(userId, user_id);
  const messages = await db.getAllMessages();
  res.render("dashboard", {
    user: req.user, // Pass the logged-in user
    messages: messages, // Pass messages if you want to show them
    editMessage: editMessage, // Pass the message to edit
  });
}

//submit edited message
async function updateMessage(req, res) {
  const { message } = req.body;
  const { userId } = req.params;
  const user_Id = req.user.id;
  await db.postUpdatedMessage(message, userId, user_Id);
  res.redirect("/");
}
//submit accessmember form
async function submitMemberAnswer(req, res) {
  const { member } = req.body;
  const username = req.user.username;
  const userId = req.user.id;
  await db.InsertAnswer(member, userId, username);
  // console.log(username);
  // console.log(member);
  // console.log(userId);
  res.redirect("/");
}
submitMemberAnswer;
module.exports = {
  getSignUpForm,
  submitFormData,
  getLoginForm,
  displayMessage,
  sendMessage,
  deleteMessage,
  editMessage,
  updateMessage,
  submitMemberAnswer,
};
