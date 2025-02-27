const express = require("express");
const jsonServer = require("json-server");
const path = require("path");
const axios = require("axios");

const app = express();
const port = 3000;

// Set up JSON Server and mount it on /api
const apiServer = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

apiServer.use(middlewares);
apiServer.use(router);
app.use("/api", apiServer); // Mount JSON Server under /api

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/addBlog", (req, res) => {
    res.render("addBlog");
});

app.get("/blog/:blogId", async (req, res) => {
    const blogId = req.params.blogId;
    try {
        const response = await axios.get(`api/blogs/${blogId}`);
        res.render("blog", { blog: response.data });
    } catch (error) {
        console.error("Error fetching blog:", error.message);
        res.status(500).send("Error retrieving blog post");
    }
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
