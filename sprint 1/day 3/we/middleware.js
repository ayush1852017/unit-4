const express = require("express");

const app = express();

app.use(logger); // logger() logger

// app.get("/users", logger, logger, logger, (req, res) => {
//   return res.send({ route: "/users", role: req.role });
// });

// app.get("/students", (req, res) => {
//   return res.send({ route: "/students", role: req.role });
// });

// app.get("/admin", (req, res) => {
//   return res.send({ route: "/admin", role: req.role });
// });

app.get("/products", loggedIn("seller"), (req, res) => {
  return res.send("Yes you can get the product");
});

function loggedIn(role) {
  return function logger(req, res, next) {
    if (role === "seller") {
      return next();
    }
    return res.send("Not allowed");
  };
}


app.listen(5000, () => {
  console.log("listening on port 5000");
});
