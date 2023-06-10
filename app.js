const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Lorem ipsum dolor', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, cum!' },        
        { title: 'Sit amet consectetur', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, cum!' },        
        { title: 'Adipisicing elit', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, cum!' },        
    ];

    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs/new', (req, res) => {
    res.render('new', { title: 'New' });
});

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});