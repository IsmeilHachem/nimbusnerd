const express = require("express");
const fs = require("fs");
const path = require("path");
const MarkdownIt = require("markdown-it");
const md = new MarkdownIt();

const app = express();
app.set("view engine", "ejs");
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  fs.readdir(path.join(__dirname, "/blogs/"), (err, files) => {
    if (err) {
      return res.sendStatus(500);
    }
    let links = files
      .filter((file) => !file.startsWith("Azure")) // Exclude Azure posts from the main list
      .map((file) => {
        const name = path.basename(file, ".md");
        return `<a href="/blog/${name}">${name}</a>`;
      })
      .join("<br>");

    let azurePosts = files
      .filter((file) => file.startsWith("Azure")) // Include only Azure posts
      .map((file) => {
        const name = path.basename(file, ".md");
        return `<a href="/blog/${name}">${name}</a>`;
      });

    res.render("index", { links: links, azurePosts: azurePosts });
  });
});

app.get("/blog/:name", (req, res) => {
  const fileName = req.params.name;
  fs.readFile(
    path.join(__dirname, "/blogs/", fileName + ".md"),
    "utf8",
    (err, data) => {
      if (err) {
        return res.sendStatus(500);
      }
      const result = md.render(data);
      res.render("blog", { content: result });
    }
  );
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running at http://localhost:${port}`);
});