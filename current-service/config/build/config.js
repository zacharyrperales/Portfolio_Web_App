// OBSOLETE. KEPT FOR DEMONSTRATION PURPOSES.
require('dotenv').config();

// ENVIRONMENT VARIABLES
const PORT = parseInt(process.env.PORT) || 8080;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

module.exports = {
    PORT,
    GITHUB_USERNAME,
    GITHUB_TOKEN
}