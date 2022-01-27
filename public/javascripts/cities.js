const Database = require('better-sqlite3');

// Query DB to find cities that start with cityName
exports.searchByName = (cityName) => {
	console.log(cityName);
    // SELECT name FROM cities WHERE name LIKE (?);
    let db = new Database('citylist.db', {verbose: console.log});
	try {
		let statement = db.prepare('SELECT name FROM cities LIMIT 10');
		let city = statement.all();
		db.close();
		return city;
	} catch (e) {
		console.log(e);
	}
};