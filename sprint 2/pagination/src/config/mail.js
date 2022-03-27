const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 465,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "1d886cd4feb496", // generated ethereal user
    pass: "400eebc43ceaf4", // generated ethereal password
  },
});

module.exports = transporter;
