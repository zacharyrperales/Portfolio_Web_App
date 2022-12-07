const favicon = require('serve-favicon');
const path = require('path');
const express = require('express');
const indexController = require('./controllers/indexController');
const bodyParser = require('body-parser');

// DEPRECATED. KEPT FOR DEMONSTRATION PURPOSES.
const mongoose = require('mongoose');
const fileUpload = require("express-fileupload");
const expressSession = require('express-session');
const connectMongo = require('connect-mongo');
const connectFlash = require('connect-flash');

// DEPRECATED. KEPT FOR DEMONSTRATION PURPOSES.
const { MONGO_DB_PASSWORD, PORT } = require('./config/build/config.js');

const app = express();

app.use(express.static(path.join(__dirname, "/views/resources/favicon")));
app.use(express.static(path.join(__dirname, "/views/resources/scss")));

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// DEPRECATED. KEPT FOR DEMONSTRATION PURPOSES.
app.use(connectFlash());


// DEPRECATED. KEPT FOR DEMONSTRATION PURPOSES.
// @todo Use environment variable NODE_ENV and dotenv to change the 'development' environment server to local and the 'production' environment server to Google Cloud Atlassian MongoDB.
// @todo Learn how to backup, drop, and then restore the MongoDB database and its contents to Google Cloud Atlassian MongoDB and/or platform and implement this with proper naming conventions and syntax.
mongoose.connect(`mongodb+srv://zack:${MONGO_DB_PASSWORD}@cluster0.u8yqr.mongodb.net/posts?retryWrites=true&w=majority`).catch((error) => {
    console.log(error);
})

// DEPRECATED. KEPT FOR DEMONSTRATION PURPOSES.
const mongoStore = connectMongo(expressSession);

// DEPRECATED. KEPT FOR DEMONSTRATION PURPOSES.
// @todo Use environment variable NODE_ENV and dotenv to create two separate session configurations for the 'development' and 'production' environments. E.g. no cookies and cookies respectively.
// @todo Check for race condition with navbar links on the homepage with the default resave option set to true in express-session, when logging in and out too fast the home page may still think the user is authenticated after logging out.
app.use(expressSession({
    secret: 'secret',
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    })
}));

// DEPRECATED. KEPT FOR DEMONSTRATION PURPOSES.
app.use('*', (req, res, next) => {
    app.locals.auth = req.session.userId
    next();
});

// DEPRECATED. KEPT FOR DEMONSTRATION PURPOSES.
const storePost = require('./middleware/storePost');
const auth = require('./middleware/auth');
const redirectIfAuthenticated = require('./middleware/redirectIfAuthenticated');

app.get('/page_template', (req, res) => {
   res.render('pages/page_template.ejs');
});

app.get('/', indexController.getHomePage);

// @todo Require https always by modifying current-service.yaml or cloudbuild.yaml, then enforce secure cookies are always sent via https as well during sessions.
// Start the server.
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});