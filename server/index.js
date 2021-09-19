const express = require('express');
const mongoose = require('mongoose')
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
app.use(express.json())
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Serve main files (main.js, main.css) in build folder
    app.use(express.static('client/build'));

    // express serves up index.html
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
} 

app.get('/', (req, res) => {
    res.send({bye: 'there'});
});



const PORT = process.env.PORT || 5000;
app.listen(PORT);