const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   return res.send("This is home");
// });
// app.use(book);

app.get("/books",  (res, req) => {
  // const data = [
  //   {
  //     id: 1,
  //     name: "GameOfThrones",
  //     Author: "Emmott",
  //   },
  //   {
  //     id: 2,
  //     name: "HarryPotter ",
  //     Author: "Maury",
  //   },

  //   {
  //     id: 3,
  //     name: "Janis",
  //     Author: null,
  //   },
  // ];
   res.send("data");
});
// app.get("/book:name", singleBook, (req, res) => {
//   return res.send({ bookname: req.params.name });
// });

function logger(req, res, next) {
  return next();
}
// function singleBook(name) {
//   return function (req, res, next) {
//     if (res.parms.name == "HarryPotter") {
//       return next();
//     } else if (res.parms.name == "GameOfThrones") {
//       return next();
//     }
//     return res.send("Not allowed");
//   };
// }
app.listen(6000, () => {
  console.log("this is my post");
});
