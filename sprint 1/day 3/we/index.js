// const express = require("express");
// const app = express();

// // app.get("/", (req, res) => {
// //   return res.send("This is home");
// // });
// app.use(logger);

// app.get("/login", logger("admin"), (res, req) => {
//   return res.send("Now you can login");
// });
// function logger(req,res,next) {
//     // return function logIn(res, req, next) {
//     //     if (role === "admin") {
//     //         return next();
//     //     } else {
//     //         return res.send("Not Authorized");
//     //     }
//     // };
//     if (req.path === "/login") {
//         req.role = "admin";
//     }
//     // else {
//     //      req.send("Not Authorized");
//     // }
//     console.log("Not Authorized");
//     next();
// }
// app.listen(6000, () => {
//   console.log("this is my post");
// });
