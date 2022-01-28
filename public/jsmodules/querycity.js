let queryCity = (xhr, textInput, countryInput, searchList) => {

    xhr.open("POST", '/searchcity', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
    // If a POST request happens
    xhr.onreadystatechange = function() { // Call a function when the state changes.

        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

            // clear previous search results
            clearSearchResults(searchList)

            // the returned object(s) from the database query
            let cityObjs = JSON.parse(xhr.responseText);
            console.log(cityObjs)

            // check if cityObjs has anything to display
            if(cityObjs.length > 0) {
                
                // display city data to the dom, add onclick, and data attribute of cityid (for precise api call)
                for(let i = 0; i < cityObjs.length; i++) {
                    
                    let li = document.createElement('li');
                    let a = document.createElement('a');

                    // handle cities with state names
                    if(cityObjs[i].state) {

                        li.textContent = cityObjs[i].name + ", " + cityObjs[i].state + " , " + cityObjs[i].country;
                        li.setAttribute('data-cityid', cityObjs[i].cityid);

                        // When a city name is clicked
                        li.onclick = (e) => {
                            // clear search results
                            clearSearchResults(searchList)
                            fetchApi(e)
                        };

                        searchList.appendChild(li);
                    }
                    // handle cites with no state names
                    else {

                        li.textContent = cityObjs[i].name + " | Country " + cityObjs[i].country;
                        li.setAttribute('data-cityid', cityObjs[i].cityid);

                        // When a city name is clicked
                        li.onclick = (e) => {
                            // clear search results
                            clearSearchResults(searchList)
                            fetchApi(e);
                        };
                        searchList.appendChild(li);
                    };
                };
            };
        };
    };

    // send text input values (city, country) to DB for query
    xhr.send("searchCity=" + textInput.value + "&searchCountry=" + countryInput.value);
    
};

export default queryCity;