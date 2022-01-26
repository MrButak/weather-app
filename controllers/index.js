let ldToMemory = require('../public/javascripts/ldtomemory')

exports.index = (req, res, next) => {
    ldToMemory.loadData();
    res.render('index');
};

  