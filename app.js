const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const app = express();

const dbURI = 'mongodb+srv://choaibelmadi:choaibelmadi@nodeblogs.to9a9ov.mongodb.net/nodeBlogs';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(3000))
    .catch(() => console.log('Error'));

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((blogs) => {
            res.render('index', { title: 'All Blogs', blogs });
        })
        .catch((err) => {
            console.error(err);
        })
});

app.get('/blogs/new', (req, res) => {
    res.render('new', { title: 'New' });
});

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});