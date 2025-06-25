const userBtn = document.querySelector(".user");
const dropContent = document.querySelector(".drop-content");
userBtn.addEventListener("click", () => {
  dropContent.classList.toggle("showcontent");
});

const addModal = document.querySelector(".add_modal");
const removModal = document.querySelector(".remove_modal");

const displaymodal = document.querySelector(".textarea-container");
addModal.addEventListener("click", () => {
  console.log("I will add the modal");
  displaymodal.classList.add("displaymodal");
});

removModal.addEventListener("click", () => {
  console.log("I will remove modal");
  displaymodal.classList.remove("displaymodal");
});

//add edit buton logic
/*const editBtn = document.querySelector(".editbtn");
const updateTextarea = document.querySelector(".updatetextarea ");

editBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
  updateTextarea.classList.add("displaytextarea");
});*/

//add member form
const addMember = document.querySelector(".add_member");
const accessMember = document.querySelector(".accessmember");
const removeMember = document.querySelector(".memberbtn");

addMember.addEventListener("click", () => {
  accessMember.classList.add("displaymemberform");
});

removeMember.addEventListener("click", () => {
  accessMember.classList.remove("displaymemberform");
});
// console.log(removeMember);

//validate member form
const submit = document.querySelector(".accesForm");
const member = document.querySelector("#member");
const memberText = document.querySelector(".membertext");

submit.addEventListener("click", (e) => {
  if (Number(member.value) !== 1995) {
    memberText.textContent = "Incorrect answer";
    e.preventDefault();
  } else {
    memberText.textContent = "";
  }
});
