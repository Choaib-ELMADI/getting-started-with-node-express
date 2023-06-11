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
app.use(express.urlencoded({ extended: true }));

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
app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then(() => res.redirect('/blogs'))
        .catch((err) => console.error(err));
});

app.get('/blogs/new', (req, res) => {
    res.render('new', { title: 'New' });
});

app.get('/blogs/:id', (req, res) => {
    Blog.findById(req.params.id)
        .then((blog) => res.render('blog', { title: 'Blog', blog }))
        .catch((err) => console.error(err));
});
app.delete('/blogs/:id', (req, res) => {
    Blog.findByIdAndDelete(req.params.id)
        .then(() => res.json({ redirect: '/blogs' }))
        .catch((err) => console.error(err));
});

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});