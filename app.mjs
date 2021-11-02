import express from "express";
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("I am a hello world server");
})
app.get("/profile", (req, res) => {
    res.send("This is my profile section");
})
app.get("/about", (req, res) => {
    res.send("It is my about section");
})
app.listen(port, () => {
    console.log(`server is running on port number ${port}`);
});