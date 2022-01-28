const Database = require('better-sqlite3');

// Query DB to find cities like user input
exports.searchByName = (cityName) => {

	console.log(cityName);
    let db = new Database('citylist.db', {verbose: console.log});
	try {
		let statement = db.prepare('SELECT * FROM cities WHERE name LIKE (?) LIMIT 30');
		let city = statement.all(cityName + "%");
		db.close();
		return city;
	} 
    catch (e) {
		console.log(e);
	}
};