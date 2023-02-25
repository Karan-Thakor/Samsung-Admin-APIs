const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const port = 4000;




app.get('/',(req, res) => {
    res.send({message:'server is running'})
})
const db = require("./models");

db.mongoose.set("strictQuery",false);

db.mongoose
.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
  
  require("./routes/admin.routes.js")(app);
  
  
  app.listen(port, () => {
      console.log('server is listening');
  })


//   const securePassword = async (password) => {
//     const passwordHash = await bcrypt.hash(password, 10 );
//     console.log(passwordHash);

//     const passwordmatch = await bcrypt.compare("anant@test",passwordHash);
//     console.log(passwordmatch);
// }
// securePassword("anant@test")


