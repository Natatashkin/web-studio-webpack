const express = require('express');
const handlebars = require('express-handlebars');
const features = require("./features.json");
const products = require("./products.json");
const team = require('./team.json');
const clients = require('./clients.json');




const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
extname: 'hbs',
}));

app.get('/', (req, res) => {
    res.render('home', { cssFileName: 'home', features, products, team, clients });
});

app.get('/projects', (req, res) => {
    res.render('projects', { cssFileName: 'projects' });
});

app.get('/contacts', (req, res) => {
    res.render('contacts', { cssFileName: 'contacts' });
})

app.listen(4444, () => {
    console.log(`сервер запущен на порте ${4444}`);
});

