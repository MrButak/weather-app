let queryCity = () => {

    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/searchcity', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    let textInput = document.getElementById('searchCity');
    let searchList = document.getElementById('liveSearchResults');
    let countryInput = document.getElementById('searchCountry');
    
    // if a POST request happens
    xhr.onreadystatechange = function() { // Call a function when the state changes.

        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

            // check to see if DOM list of cities contains anything, if so, remove them
            if(searchList.childElementCount > 0) {
                let first = searchList.firstElementChild;
                while(first) {
                    first.remove();
                    first = searchList.firstElementChild;
                };
            };

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

                        li.textContent = cityObjs[i].name + ", " + cityObjs[i].state + " | Country " + cityObjs[i].country;
                        li.setAttribute('data-cityid', cityObjs[i].cityid);

                        li.onclick = (e) => {
                            // TODO: clear out live search results and clear field
                            fetchApi(e)
                        };
                        searchList.appendChild(li);
                    }
                    else {

                        li.textContent = cityObjs[i].name + " | Country " + cityObjs[i].country;
                        li.setAttribute('data-cityid', cityObjs[i].cityid);

                        li.onclick = (e) => {
                            // TODO: clear out live search results and clear field
                            fetchApi(e);
                        };
                        searchList.appendChild(li);
                    };
                };
            };
        };
    };

    // send text input value to database for query
    xhr.send("searchCity=" + textInput.value + "&searchCountry=" + countryInput.value);
    
};

export default queryCity;