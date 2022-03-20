const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploadfile"));
  },
  filename: function (req, file, cb) {
    const uniquePrefix = Date.now();
    cb(null, uniquePrefix + "-" + file.fieldname);
  },
});

function fileFilter(req, file, cb) {
  // The function should call `cb` with a boolean
  // to indicate if the file should be accepted

  // To accept the file pass `true`, like so:
  if (
    file.mimetype == "image/jpeg" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/png"
  ) {
    cb(null, true);
  }

  // To reject this file pass `false`, like so:
  else {
    cb(null, false);
  }

  // You can always pass an error if something goes wrong:
  // cb(new Error("I don't have a clue!"));
}

const options = {
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
};

const upload = multer({ storage: storage });

module.exports = upload;
