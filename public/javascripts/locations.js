const Database = require('better-sqlite3');

// Query DB for city and country
exports.searchByName = (cityName, countryName) => {

	console.log(cityName);
    let db = new Database('citylist.db', {verbose: console.log});

	try {
		let statement = db.prepare('SELECT * FROM cities WHERE name LIKE (?) AND country = (?) LIMIT 30');
		let city = statement.all(cityName + "%", countryName);
		db.close();
		return city;
	}
    catch (e) {
		console.log(e);
	};
};

// Query DB for countries
exports.searchByCountry = (countryName) => {

    let db = new Database('citylist.db', {verbose: console.log});

	try {
		let statement = db.prepare('SELECT DISTINCT country FROM cities WHERE country LIKE (?) LIMIT 10');
		let country = statement.all(countryName + "%");
		db.close();
		return country;
	} 
    catch (e) {
		console.log(e);
	};
};