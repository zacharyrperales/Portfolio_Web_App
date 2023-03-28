const GitHub                            = require('github-api');
const { GITHUB_USERNAME, GITHUB_TOKEN } = require('../config/build/config.js');

const github = new GitHub({
    username: GITHUB_USERNAME,
    token: GITHUB_TOKEN
});

module.exports = {
    github
}