const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const { join } = require('path');
const app = express();
const port = 3000;
const route = require('./routes');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());
app.use(express.json());
// http logger
app.use(morgan("combined"))

// template engine
   app.engine('handlebars', hbs.engine());
app.set('view engine', 'handlebars');
    app.set('views', path.join(__dirname, 'resources', 'views'));

// console.log('PATH:', path.join(__dirname, 'resources/views'))

// app.get('/', function (req, res) {
//   res.render('home');
// });

// app.get('/search', function (req, res) {

//   res.render('search');
// });

// app.post('/search1', function (req, res) {
//   console.log(req.body);
//   res.send('');
// });
// route init
route(app);
app.listen(port, () => 
console.log(`Example app listening on port ${port}`)
);