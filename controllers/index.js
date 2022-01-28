const cityManager = require('../public/javascripts/cities')

exports.index = (req, res, next) => {
    
    res.render('index');
};

exports.searchCity = (req, res, next) => {

    let cities = cityManager.searchByName(req.body.searchCity, req.body.searchCountry);
    res.status(200).json(cities)
};

exports.searchCountry = (req, res, next) => {

    let countries = cityManager.searchByCountry(req.body.searchCountry);
    res.status(200).json(countries)  
};