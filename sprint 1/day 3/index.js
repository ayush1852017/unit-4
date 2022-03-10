const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   return res.send("This is home");
// });
app.use(book);

app.get("/books", book, (res, req) => {
  return res.send([
    {
      id: 1,
      name: "GameOfThrones",
      Author: "Emmott",
    },
    {
      id: 2,
      name: "HarryPotter ",
      Author: "Maury",
    },

    {
      id: 3,
      name: "Janis",
      Author: null,
    },
  ]);
});
app.get("/book:name", singleBook, (req, res) => {
  return res.parms.name;
});

function book(req, res, next) {
  return next();
}
function singleBook(name) {
  return function (req, res, next) {
    if (res.parms.name == "HarryPotter") {
      return next();
    } else if (res.parms.name == "GameOfThrones") {
      return next();
    }
    return res.send("Not allowed");
  };
}
app.listen(6000, () => {
  console.log("this is my post");
});

// const express = require("express");
// const app = express();

// app.get("/", function (req, res) {
//   console.log("ha");
//   res.send();
// });

// app.get("/book", logger, (req, res) => {
//   return res.send("No books");
// });

// app.get("/book/:name", auth, (req, res) => {
//   res.send({ bookname: req.params.name });
// });
// function logger(req, res, next) {
//   console.log("Fetching all books");
//   next();
// }
// function auth(req, res, next) {
//   console.log(req.params.name);

//   next();
// }
// app.listen(4000, () => {
//   console.log("listening on 4000");
// });