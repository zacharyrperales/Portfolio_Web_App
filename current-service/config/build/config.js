// OBSOLETE. KEPT FOR DEMONSTRATION PURPOSES.
require('dotenv').config();

// ENVIRONMENT VARIABLES
const MONGO_DB_PASSWORD = process.env.MONGO_DB_PASSWORD;
const PORT = parseInt(process.env.PORT) || 8080;

module.exports = {
    MONGO_DB_PASSWORD,
    PORT
}