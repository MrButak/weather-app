exports.loadData = () => {

    const fs = require('fs');
    try {
        let op = fs.openSync('citylist.json', 'r');
        let buffer = fs.readFileSync('op', 'utf-8');
        let cityDataArry = JSON.parse(buffer);
        console.log("am I here????????????????????????????????????????????")
        
        // console.log(cityDataArry.length);
        // console.log(cityDataArry[2]);
    }
    catch(e) {
        console.log(e)
    }
    // return(cityDataArry);
};