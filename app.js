const express = require('express');
const morgan = require('morgan');

const app = express();
app.set('view engine', 'ejs');
app.listen(3000);

app.use((req, res, next) => {
    console.log('A new request was made:');
    console.log('Host: ', req.hostname);
    console.log('Path: ', req.path);
    console.log('Method: ', req.method);

    next();
});

app.use(morgan('dev'));

app.use(express.static('public'));

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