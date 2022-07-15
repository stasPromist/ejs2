const PORT = process.env.PORT || 4700;

const express = require("express");
const app = express();
const images = require('./modules/images');
const path = require("path");
app.set("view engine", "ejs");
const publicDirectoryPath = path.join(__dirname, "./public");


app.use(express.static(publicDirectoryPath));

const views = path.join(__dirname, './views');
app.set('views', views);


app.get("", (req, res) => {
    res.render("index" , {imagesArray:images});
});



app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`)
})