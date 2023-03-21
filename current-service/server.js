const favicon =         require('serve-favicon');
const path =            require('path');
const express =         require('express');
const indexController = require('./controllers/indexController');
const { PORT } =        require('./config/build/config.js');

const app = express();

app.use(express.static(path.join(__dirname, "/views/resources/favicon")));
// app.use(express.static(path.join(__dirname, "/views/resources/css")));

app.set('view engine', 'ejs');

app.get('/', indexController.getHomePage);

// Start the server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});