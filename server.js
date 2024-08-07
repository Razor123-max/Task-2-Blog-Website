const express = require('express');
const articleRouter = require("./routes/articles")
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
const articles = [{
  title: 'Test Article 1',
  createdAt: new Date(),
  description: 'Test Description'
},
{
  title: 'Test Article 2',
  createdAt: new Date(),
  description: 'Test Description'
}]
  res.render('index', {articles:articles});
})


app.use('/articles', articleRouter);

app.listen(3000);
