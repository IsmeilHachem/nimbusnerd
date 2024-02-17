const express = require('express');
const fs = require('fs');
const path = require('path');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  fs.readdir(path.join(__dirname, '/blogs/'), (err, files) => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    let links = files.map(file => {
      const name = path.basename(file, '.md');
      return `<a href="/blog/${name}">${name}</a>`;
    }).join('<br>');
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <link rel="stylesheet" type="text/css" href="/styles.css">
      </head>
      <body>
        <div class="container">
          <h1>Nimbus Nerds, Unite!</h1>
          ${links}
        </div>
      </body>
      </html>
    `;
    res.send(html);
  });
});

app.get('/blog/:name', (req, res) => {
  const fileName = req.params.name;
  fs.readFile(path.join(__dirname, '/blogs/', fileName + '.md'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    const result = md.render(data);
    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <link rel="stylesheet" type="text/css" href="/styles.css">
      </head>
      <body>
        <div class="container">
          ${result}
        </div>
      </body>
      </html>
    `;
    res.send(html);
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running at http://localhost:${port}`)
});