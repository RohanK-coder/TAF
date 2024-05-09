const mongoose=require("mongoose")




let password = "Venkat1234";
let user = "Venkat:";
mongoose.connect("mongodb+srv://" + user + password + "@cluster0.yd4utob.mongodb.net/Ayurved", { useNewUrlParser: true })
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch((err) => {
    console.error('MongoDB connection error:', err.message);
});


const loginSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    vorc:{
        type:String,
        required:true
    }

})

const collection = mongoose.model("collection",loginSchema)

module.exports = {
    collection: collection,
};
