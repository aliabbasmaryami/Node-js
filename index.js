// const express = require("express");
// const app = express();
// const path = require("path");
// const fs = require("fs");
// const { isUtf8 } = require("buffer");
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));
// app.set("view engine", "ejs");

// app.get("/", function (req, res) {
//   const filesDirectory = path.join(__dirname, "files");
//   fs.readdir(filesDirectory, function (err, files) {
//     res.render("index", { files: files });
//   });
// });

// app.get("/files/:filename", function (req, res) {
//   fs.readFile(
//     `../files/${req.params.filename}`,
//     "utf-8",
//     function (err, filedata) {
//       res.render("show", {
//         filename: req.params.filename,
//         filedata: filedata,
//       });
//     }
//   );
// });

// app.post("/create", function (req, res) {
//   const fileName = req.body.title.split(" ").join("") + ".txt";
//   const filePath = path.join(__dirname, "files", fileName);
//   fs.writeFile(filePath, req.body.details, function (err) {
//     res.redirect("/");
//   });
// });

// app.listen(3000, function () {
//   console.log("Server is running on port 3000");
// });

const express = require("express");
const app = express();

const userModal = require("./views/usersmodal");

app.get("/", function (req, res) {
  res.send("Heyy!");
});

// created users
app.get("/create", async (req, res) => {
  let createduser = await userModal.create({
    name: "ali",
    username: "amir",
    email: "ali@gmail.com",
  });
  res.send(createduser);
});

// updated userModal
app.get("/update", async (req, res) => {
  let updateduser = await userModal.findOneAndUpdate(
    { username: "aliabbas" },
    { name: "amir mir" },
    { new: true }
  );
  res.send(updateduser);
});

// read users

app.use("/read", async (req, res) => {
  let users = await userModal.find();
  res.send(users);
});

// deleted users

app.use("/delete", async (req, res) => {
  let deletedUsers = await userModal.findOneAndDelete(
    { name: "Gaurav" },
    { username: "ali" }
  );
  res.send(deletedUsers);
});
console.log("alaa");
app.listen(3000);
