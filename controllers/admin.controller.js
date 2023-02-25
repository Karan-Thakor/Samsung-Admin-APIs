const db = require("../models");
// const md5 = require("md5");
const User = db.user;
const Product = db.product;
const multer = require('multer');


exports.login = async (req, res) => {
    const email = "Samsung-Admin@gmail.com";
    const password = "12345678";
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

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  });
  const upload = multer({ storage: storage });

exports.addProducts = async (req, res) => {
    const product = new Product({
      id: req.body.id,
      product: req.body.product,
      price: req.body.price,
      color: req.body.color,
      image: req.body.image,
    });
  
    product.save().then((data) => {
      res.send({
        success: "true",
        message: "product added",
        data: data
      })
    }).catch((error) => {
      res.send({
        success: "false",
        message: "product not added",
        data: error
      })
    })
  }

  exports.allProducts = (res) => {
    Product.find({}).then((data) => {
        res.send({
            success:'true',
            message:"All Products !!",
            data:data
        })
    })
}

exports.updateProduct = (req,res)=> {
    const condition = {
      id: req.body.id2,
      product: req.body.product,
      price: req.body.price,
      color: req.body.color,
      image: req.body.image,
    };

    Product.findByIdAndUpdate(req.body.id, condition, {useFindAndModify:false}).then((data) => {
        res.send({
            success:'true',
            message:"Product Updated !!",
             data:data
        })
    }).catch((error) => {
        res.send({
            success:'false',
            message:"Product Not Updated !!",
            data:error
        })
    })
}

exports.deleteProduct = (req,res) => {
    Product.findByIdAndDelete(req.body.id).then((data) => {
        res.send({
            success:'true',
            message:"Product Deleted !!",
            data:data
        })
    }).catch((error) => {
        res.send({
            success:'false',
            message:"Product Not Deleted !!",
            data:error
        })
    })
}