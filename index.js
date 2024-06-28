const express = require("express");
const app = express();
const path = require("path");

const userModel = require("./models/user");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/read", async (req, res) => {
  let users = await userModel.find();
  res.render("read", { users });
});

app.post("/create", async (req, res) => {
  let { name } = req.body;
  let { email } = req.body;
  let { image } = req.body;
  let createdUser = await userModel.create({
    name,
    email,
    image,
  });
  res.send(createdUser);
});
app.get("/delete/:id", async (req, res) => {
  try {
    let deletedUser = await userModel.findOneAndDelete({ _id: req.params.id });
    res.redirect("/read");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting user");
  }
});
app.listen(3000);
