const Blog = require('../models/blog');

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((blogs) => {
            res.render('index', { title: 'All Blogs', blogs });
        })
        .catch((err) => {
            console.error(err);
        })
};

const blog_new_post = (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then(() => res.redirect('/blogs'))
        .catch((err) => console.error(err));
};

const blog_new_get = (req, res) => {
    res.render('new', { title: 'New' });
};

const blog_single = (req, res) => {
    Blog.findById(req.params.id)
        .then((blog) => res.render('blog', { title: 'Blog', blog }))
        .catch(() => res.status(404).render('404', { title: '404' }));
};

const blog_delete = (req, res) => {
    Blog.findByIdAndDelete(req.params.id)
        .then(() => res.json({ redirect: '/blogs' }))
        .catch((err) => console.error(err));
};

module.exports = {
    blog_index,
    blog_new_post,
    blog_new_get,
    blog_single,
    blog_delete
}