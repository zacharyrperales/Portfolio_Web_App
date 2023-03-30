const favicon           = require('serve-favicon');
const path              = require('path');
const express           = require('express');
const indexController   = require('./controllers/indexController');
const { PORT }          = require('./config/build/config.js');
const githubController  = require('./controllers/githubController.js');
const app = express();

app.use(express.static(path.join(__dirname, "/views/resources/favicon")));

// Path for potential future local stylesheet to replace css inside view
// app.use(express.static(path.join(__dirname, "/views/resources/css")));

// Test GitHub API connection
// console.log(githubController.github.getUser());

app.set('view engine', 'ejs');

app.get('/', indexController.getHomePage);
app.get('/testing', githubController.getGitHubPage)

// Start the server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});