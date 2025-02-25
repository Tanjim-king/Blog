const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const axios = require('axios'); // node

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render("index"); // Render EJS template
});
app.get('/login', (req, res) => {
    res.render("login"); // Render EJS template
});
app.get('/signup', (req, res) => {
    res.render("signup"); // Render EJS template
});
app.get('/addBlog', (req, res) => {
    res.render("addBlog"); // Render EJS template
});

app.get('/blog/:blogId', async(req, res) => {
    const blogId = req.params.blogId
    let blog = []
    await axios.get(` http://localhost:5050/blogs/${blogId}`)
    .then(res =>{
        blog = res.data
    })
    
     res.render("blog", { blog: blog }); // Pass data to EJS template
});

app.post('/setUser' , (req , res)=>{
    const userId  = req.body.userId;
    axios.get(`http://localhost:5050/users/${userId}`)
    .then(dataRes=>{
        console.log("Users detail :", dataRes.data)
    })
})
// Start the server
app.listen(port, async () => {
    console.log(`Server is running on http://localhost:${port}`);
});
