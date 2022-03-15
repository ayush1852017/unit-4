const express = require("express");
const app = express();

app.use(logger);

app.get("/books", (req, res) => {
  const data = [
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
  ];
  return res.send(data);
});
app.get("/book:name", singleBook, (req, res) => {
  
  return res.send({ bookname: req.name });
});

function logger(req, res, next) {
  return next();
}
function singleBook(req, res, next) {
    req.name = req.params.name;
    next();
}
app.listen(6000, () => {
  console.log("this is my post");
});
