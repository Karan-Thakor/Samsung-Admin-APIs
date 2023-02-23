module.exports = app =>{
    const user = require("../controllers/admin.controller.js");
    const express = require("express");
    const router = express.Router();

    router.post('/login',user.login);

    app.use("/api", router);
}