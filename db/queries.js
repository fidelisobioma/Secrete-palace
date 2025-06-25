const pool = require("./pool");

//insert users data
async function InsertUsersData(username, email, hashpassword) {
  await pool.query(
    "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
    [username, email, hashpassword]
  );
}

async function insertMessage(userId, message) {
  await pool.query("INSERT INTO messages (user_id, content) VALUES ($1, $2)", [
    userId,
    message,
  ]);
}

async function getAllMessages() {
  const { rows } = await pool.query(
    " SELECT * FROM users LEFT JOIN messages ON users.id = messages.user_id LEFT JOIN members ON users.id = members.user_id"
  );
  return rows;
}

//delete message
async function deleteMessage(userId, user_id) {
  await pool.query(
    "DELETE FROM messages WHERE messages.id = $1 AND messages.user_id = $2",
    [userId, user_id]
  );
}

//edit message
async function editMatchMessage(userId, user_id) {
  const { rows } = await pool.query(
    "SELECT * FROM messages WHERE messages.id = $1 AND messages.user_id = $2",
    [userId, user_id]
  );
  return rows;
}
//submit edited message
async function postUpdatedMessage(mesage, userId, user_Id) {
  await pool.query(
    "UPDATE messages SET content = $1 WHERE messages.id = $2 AND messages.user_id = $3",
    [mesage, userId, user_Id]
  );
}
//submit accessmember form
async function InsertAnswer(member, userId, username) {
  if (Number(member) === 1995) {
    await pool.query("INSERT INTO members (user_id, members) VALUES ($1, $2)", [
      userId,
      username,
    ]);
  }
}

module.exports = {
  InsertUsersData,
  insertMessage,
  getAllMessages,
  deleteMessage,
  editMatchMessage,
  postUpdatedMessage,
  InsertAnswer,
};
