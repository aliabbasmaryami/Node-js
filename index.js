// const { error } = require("console");
const fs = require("fs");
const path = require("path");
const dirpath = path.join(__dirname, "files");
// for (i = 0; i <= 5; i++) {
//   fs.writeFileSync(dirpath + "/hello " + i + ".txt", "this is a file system");
// }

fs.readdir(dirpath, (err, files) => {
  files.forEach((item) => {
    console.log("this is files name", item);
  });
});
