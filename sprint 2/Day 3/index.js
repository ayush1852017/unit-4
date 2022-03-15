const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const conncetDB = () => {
  return mongoose.connect(
    "mongodb+srv://root:12345@cluster0.1rqfr.mongodb.net/relationDB?retryWrites=true&w=majority",
  );
};

// Section SCHEMA

const sectionSchema = mongoose.Schema(
  {
    secName: { type: String },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: "bookId" },
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
    sectionId: { type: mongoose.Schema.Types.ObjectId, ref: "sectionId", required: true },
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "authorId", required: true },
  },
  {
    versionKey: false,
  },
);

// Model for Section

const Book = mongoose.model("book", bookSchema);

// Author SCHEMA

const authorSchema = mongoose.Schema(
  {
    authorName: { type: String },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: "bookId" },
  },
  {
    versionKey: false,
  },
);

// Model for Author

const Author = mongoose.model("author", authorSchema);

// -------------Section CRUD-----------------

app.get("/section", async (req, res) => {
  try {
    const section = await Section.find().lean().exec();
    return res.status(200).send({ section });
  } catch (error) {
    return res.status(500).send({ message: "Something Went wrong .. try again later" });
  }
});

app.post("/section", async (req, res) => {
  try {
    const section = await Section.create(req.body);

    return res.status(201).send(section);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});
app.get("/section:uid", async (req, res) => {
  try {
    const section = await Section.findById(req.params.uid)
      .populate({ path: "bookId", select: ["bookName", "checkedInTime"] })
      .lean()
      .exec();

    return res.status(200).send(section);
  } catch (error) {}
});
app.patch("/section:id", async (req, res) => {
  try {
    const section = await Section.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(section);
  } catch (error) {}
});

// -------------Book CRUD-----------------

app.get("/book", async (req, res) => {
  try {
    const book = await Book.find().lean().exec();
    return res.status(200).send({ book });
  } catch (error) {
    return res.status(500).send({ message: "Something Went wrong .. try again later" });
  }
});
app.post("/book", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    return res.status(201).send(book);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});
app.get("/book:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).lean().exec();

    return res.status(200).send(book);
  } catch (error) {}
});
app.patch("/book:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(book);
  } catch (error) {}
});
// -------------Author CRUD-----------------

app.get("/author", async (req, res) => {
  try {
    const author = await Author.find().lean().exec();
    return res.status(200).send({ author });
  } catch (error) {
    return res.status(500).send({ message: "Something Went wrong .. try again later" });
  }
});
app.post("/author", async (req, res) => {
  try {
    const author = await Author.create(req.body);
    return res.status(201).send(author);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});
app.get("/author:uid", async (req, res) => {
  try {
    const author = await Author.findById(req.params.uid)
      .populate({ path: "bookId", select: ["bookName", "checkedInTime"] })
      .lean()
      .exec();

    return res.status(200).send(author);
  } catch (error) {}
});
app.patch("/author:id", async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(author);
  } catch (error) {}
});
// -------------Active Port-----------------

app.listen(7000, async () => {
  try {
    await conncetDB();
  } catch (err) {
    console.log(err);
  }
  console.log("listening on port 7000");
});

// app.get("/sections/:uid", async (req, res) => {
//   try {
//     const sections = await Section.findById(req.params.uid)
//       .populate({ path: "bookId", select: ["bookName", "checkedInTime"] })
//       .lean()
//       .exec();
//     // console.log(req.params)
//     return res.status(201).send(sections);
//   } catch (err) {
//     return res.status(500).send(" Error : " + err);
//   }
// });
