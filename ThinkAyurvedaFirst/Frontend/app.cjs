const express = require("express")
const jwt = require("jsonwebtoken");
const cors = require('cors');


const {collection} = require("./mongo.cjs")
const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const check = await collection.findOne({ email: email, password: password });
        // console.log(check)
        if (check) {
            const mail = { email };
            const accessToken = jwt.sign(mail, 'your-secret-key');
            console.log(accessToken);
            
            res.json({ status: "exist", accessToken: accessToken, username: check.username });
        } else {
            res.json({ status: "notexist" });
        }
    } catch (e) {
        res.json({ status: "fail" });
    }
});

app.post("/logout", (req, res) => {
    localStorage.removeItem("accessToken");
    res.redirect("/");
  });

  

app.post("/signup", async (req, res) => {
    console.log(req.body);
const { username, email, password, vorc } = req.body;
console.log(username, email, password, vorc);

try {
    const existingUser = await collection.findOne({
    $or: [{ username: username }, { email: email }],
    });

    if (existingUser) {
    return res.json({ message: "User already exists" });
    }

    const newUser = new collection({ username, email, password, vorc });
    const savedUser = await newUser.save();

    res.json({ message: "success" });
} catch (error) {
    console.error(error);
    res.status(500).json({ error: "error" });
}
});

app.listen(8000,()=>{
    console.log("port connected");
})
