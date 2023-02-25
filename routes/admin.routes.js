module.exports = app =>{
    const user = require("../controllers/admin.controller.js");
    const express = require("express");
    const router = express.Router();

    router.post('/login',user.login);
    router.post('/addProducts',user.addProducts);
    router.get('/allProducts',user.allProducts);
    router.post('/updateProduct',user.updateProduct);
    router.delete('/deleteProduct',user.deleteProduct);

    app.use("/api", router);
}