/**
 * @author The Craftions Developers <github.com/CraftionsMC>
 * @copyright (c) 2018-2021 Craftions.net. All rights reserved.
 */

const fs = require("fs");
const path = require("path");
const os = require("os");

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

if (!fs.existsSync(path.join(os.homedir(), ".craftions_files"))) {
  fs.mkdirSync(path.join(os.homedir(), ".craftions_files"));
}

if (!fs.existsSync(path.join(os.homedir(), ".craftions_files", "uploads"))) {
  fs.mkdirSync(path.join(os.homedir(), ".craftions_files", "uploads"));
}

const app = express();

app.use("/", express.static(path.join(__dirname, "..", "dist")));

app.use(fileUpload());

app.use(
  "/file",
  express.static(path.join(os.homedir(), ".craftions_files", "uploads"))
);

app.post("/api/upload", (req, res) => {
  let uploadFile;
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  uploadFile = req.files.uplFile;

  let uploadName = "";
  let f = false;
  while (!f) {
    uploadName = randomString(10);
    if (
      !fs.existsSync(
        path.join(
          os.homedir(),
          ".craftions_files",
          "uploads",
          uploadName,
          uploadFile.name
        )
      )
    ) {
      f = true;
    }
  }

  fs.mkdirSync(
    path.join(os.homedir(), ".craftions_files", "uploads", uploadName)
  );

  uploadPath = path.join(
    os.homedir(),
    ".craftions_files",
    "uploads",
    uploadName,
    uploadFile.name
  );

  uploadFile.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);
    res.end(
      "<script>window.location.assign('/success?url=" +
        encodeURIComponent("/file/" + uploadName + "/" + uploadFile.name) +
        "')</script>"
    );
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.use(cors());
app.use(bodyParser());

app.listen(3000, "0.0.0.0");

function randomString(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
