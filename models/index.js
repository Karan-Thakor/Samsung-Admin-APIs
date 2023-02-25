const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");

const db ={};
db.mongoose= mongoose;
db.url = dbConfig.url;
db.user = require("./admin.models.js")(mongoose);
db.product = require("./product.models.js")(mongoose);
module.exports = db;