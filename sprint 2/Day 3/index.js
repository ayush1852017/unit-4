const express = require("express");
const mongoose = require("mongoose");
const app = express();

const conncetDB = () => {
  return mongoose.connect(
    "mongodb+srv://root:12345@cluster0.1rqfr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  );
};

// Section SCHEMA

const sectionSchema = mongoose.Schema(
  {
    secName: { type: String },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: "bookId", required: true },
  },
  {
    versionKey: false,
  },
);

// Model for Section

const Section = mongoose.model("section", sectionSchema);

// Book SCHEMA

const bookSchema = mongoose.Schema(
  {
    bookName: { type: String },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: "sectionId", required: true },
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "authorId", required: true },
  },
  {
    versionKey: false,
  },
);

// Model for Section

const book = mongoose.model("book", bookSchema);

// Author SCHEMA

const authorSchema = mongoose.Schema(
  {
    authorName: { type: String },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: "bookId", required: true },
  },
  {
    versionKey: false,
  },
);

// Model for Author

const Author = mongoose.model("author", authorSchema);

// Active Port

// Section CRUD

app.get("/section", (res, req) => {
  try {
  } catch (error) {
    console.log("error:", error);
  }
});

app.listen(7000, async () => {
  try {
    await conncetDB();
  } catch (err) {
    console.log(err);
  }

  console.log("listening on port 7000");
});
