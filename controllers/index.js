const cityManager = require('../public/javascripts/cities')

exports.index = (req, res, next) => {
    // ldToMemory.loadData();
    let post = false;
    res.render('index', {post: post});
};

exports.searchCity = (req, res, next) => {

    console.log(req.body)
    let post = true;
    let cities = cityManager.searchByName(req.body.searchCity);
    res.render('index', {tmp: cities[0].name, post: post})
    
	// res.json(cities);
};