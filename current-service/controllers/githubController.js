const GitHub                            = require('github-api');
const { GITHUB_USERNAME, GITHUB_TOKEN } = require('../config/build/config.js');

const gitHub = new GitHub({
    username: GITHUB_USERNAME,
    token: GITHUB_TOKEN
});

const getGitHubPage = async (req, res) => {

    const username = gitHub.getUser().__auth.username;
    res.render("pages/testing.ejs", {username: username} );
}

module.exports = {
    gitHub,
    getGitHubPage
}