// searchCountry cityList
let queryCountry = (searchCountryTextInput, countryList) => {
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/searchcountry', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
    // If a POST request happens
    xhr.onreadystatechange = function() { // Call a function when the state changes.

        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

            // clear old search results
            clearSearchResults(countryList)
            
            // the returned object(s) from the database query
            let countryObjs = JSON.parse(xhr.responseText);
            
            // check if countryObjs has anything to display
            if(countryObjs.length > 0) {
                
                // display city data to the dom, add onclick, and data attribute of cityid (for precise api call)
                for(let i = 0; i < countryObjs.length; i++) {
                    
                    let li = document.createElement('li');
                    let a = document.createElement('a');

                    li.textContent = countryObjs[i].country;
                    
                    // when country is clicked, set that country as the value and clear search list
                    li.onclick = (e) => {

                        searchCountryTextInput.value = e.target.innerHTML; 
                        // clear search results
                        clearSearchResults(countryList)
                    };

                    countryList.appendChild(li);
                
                };
            };
        };
    };
    
    // send text input value to database for query
    xhr.send("searchCountry=" + searchCountryTextInput.value);
};


let queryCity = (searchCityTextInput, searchCountryTextInput, cityList) => {

    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/searchcity', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
    // If a POST request happens
    xhr.onreadystatechange = function() { // Call a function when the state changes.

        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

            // clear previous search results
            clearSearchResults(cityList)

            // the returned object(s) from the database query
            let cityObjs = JSON.parse(xhr.responseText);
            console.log(cityObjs)

            // check if cityObjs has anything to display
            if(cityObjs.length > 0) {
                
                // check if city text input is blank (if the user delete search text) if so don't display any results
                if(searchCityTextInput.value == "") {
                    return
                };

                // display city data to the DOM (search city list), add onclick, and data attribute of cityid (for precise api call)
                for(let i = 0; i < cityObjs.length; i++) {
                    
                    let li = document.createElement('li');
                    let a = document.createElement('a');

                    // display cities with state names
                    if(cityObjs[i].state) {

                        li.textContent = cityObjs[i].name + ", " + cityObjs[i].state + " , " + cityObjs[i].country;
                        li.setAttribute('data-cityid', cityObjs[i].cityid);

                        // When a city name is clicked
                        li.onclick = (e) => {
                            // clear search results
                            clearSearchResults(cityList)
                            fetchApi(e)
                        };

                        cityList.appendChild(li);
                    }
                    // display cites with no state names
                    else {

                        li.textContent = cityObjs[i].name + " | Country " + cityObjs[i].country;
                        li.setAttribute('data-cityid', cityObjs[i].cityid);

                        // When a city name is clicked
                        li.onclick = (e) => {
                            // clear search results
                            clearSearchResults(cityList)
                            fetchApi(e);
                        };
                        cityList.appendChild(li);
                    };
                };
            };
        };
    };

    // send text input values (city, country) to DB for query
    xhr.send("searchCity=" + searchCityTextInput.value + "&searchCountry=" + searchCountryTextInput.value);
    
};

export {queryCountry, queryCity};