const cityManager = require('../public/javascripts/cities')

exports.index = (req, res, next) => {
    // ldToMemory.loadData();
    res.render('index');
};

exports.searchCity = (req, res, next) => {
    let cities = cityManager.searchByName(req.body.cityName);
	res.json(cities);
};