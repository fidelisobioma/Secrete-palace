const express = require("express");
const app = express();
const path = require("path");

const router = require("./routes/router");
app.set("view engine", "ejs");
app.use(express.urlencoded({ exnteded: true }));

//serve static files
const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

app.use("/", router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
