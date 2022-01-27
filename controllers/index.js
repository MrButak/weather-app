const cityManager = require('../public/javascripts/cities')

exports.index = (req, res, next) => {
    // ldToMemory.loadData();
    let post = false;
    res.render('index', {post: post});
};

exports.searchCity = (req, res, next) => {

    console.log(req)
    let post = true;
    let cities = cityManager.searchByName(req.body.searchCity);
    res.status(200).json(cities)
    
};