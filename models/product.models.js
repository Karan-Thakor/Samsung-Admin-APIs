module.exports = mongoose => {
    var Product = mongoose.Schema({
        id:Number,
        product: String,
        price : Number,
        color : String,
        image:String,
        
    });
    const user = mongoose.model("Products", Product);
    return user;
}