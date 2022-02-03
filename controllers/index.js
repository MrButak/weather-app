const dbQuery = require('../public/javascripts/dbqueries')

exports.index = (req, res, next) => {

    res.render('index');
};

exports.searchCity = (req, res, next) => {

    let cities = dbQuery.searchByName(req.body.searchCity, req.body.searchCountry);
    res.status(200).json(cities)
};

exports.searchCountry = (req, res, next) => {

    let countries = dbQuery.searchByCountry(req.body.searchCountry);
    res.status(200).json(countries)  
};