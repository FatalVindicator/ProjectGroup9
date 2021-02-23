//This is SUPER in progress and doesn't fully work yet

let express = require('express');
let exphbs = require('express-handlebars').create({
    defaultLayout:'main'
});

let bodyparser = require('body-parser');
let app = express();
let port = 9150;

app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');
app.use(bodyparser.urlencoded({extended:true}));
//app.use('/static', express.static('public'));
//app.set('mysql', mysql);
//app.use('/duties', require('./duties.js'));
/*
app.use('/missions', require('./missions.js'));
app.use('/personnel', require('./personnel.js'));
app.use('/personToDuty', require('/.personToDuty.js'));
app.use('/ranks', require('./ranks.js'));
app.use('/ships', require('./ships.js'));
*/
//app.use('/', express.static('public'));

app.get('/duties', (req, res) => {
    res.render('duties');
});

app.get('/missions', (req, res) => {
    let context = {};
    let missions = {
        missionID: "", 
        directive : "", 
        status : "", 
        location : ""
    };

    //sql stuff here

    context.missions = missions;
    res.render('missions', context);
});

app.get('/personnel', (req, res) => {
    res.render('personnel');
});

app.get('/personToDuty', (req, res) => {
    res.render('personToDuty');
});

app.get('/ranks', (req, res) => {
    let context = {};
    let ranks = {
        rankId: "", 
        rank : "", 
        pay : "", 
        minYears : ""
    };

    //sql stuff here
    
    context.ranks = ranks;
    res.render('ranks', context);
});

app.get('/ships', (req, res) => {
    let context = {};
    let ships = {
        shipName: "", 
        registry : "", 
        class : "", 
        location : "",
        missionId : ""
    };

    //sql stuff here
    
    context.ships = ships;
    res.render('ships', context);
});

app.get('/', (req, res) => {
    res.render('home');
});

app.use((req, res, next) => {
    res.status(404);
    res.send('404 Not Found');
});

app.use((err, req, res, next) =>  {
    console.error(err.stack);
    res.status(500);
    res.send('500 Error');
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}, Ctrl-C to quit`);
});