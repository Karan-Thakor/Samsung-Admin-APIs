const db = require("../models");
// const md5 = require("md5");
const User = db.user;

exports.login = async (req, res) => {
    const email = "samsungAdmin@gmail.com";
    const password = "qwerty";
    const user = { email: req.body.email, password: req.body.password };
  
    if (user.email === email && user.password === password) {
      return res.status(200).send({
        success: true,
        data: null,
        message: "Login successful!",
      });
    } else {
      return res.status(200).send({
        success: false,
        data: null,
        message: "Invalid Credentials!",
      });
    }
  };
  