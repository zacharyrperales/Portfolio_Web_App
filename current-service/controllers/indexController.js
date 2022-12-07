const getHomePage = async (req, res) => {
    res.render("pages/index.ejs");
}

module.exports = {
    getHomePage
}