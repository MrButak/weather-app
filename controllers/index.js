const locations = require('../public/javascripts/locations')

exports.index = (req, res, next) => {

    res.render('index');
};

exports.searchCity = (req, res, next) => {

    let cities = locations.searchByName(req.body.searchCity, req.body.searchCountry);
    res.status(200).json(cities)
};

exports.searchCountry = (req, res, next) => {

    let countries = locations.searchByCountry(req.body.searchCountry);
    res.status(200).json(countries)  
};
