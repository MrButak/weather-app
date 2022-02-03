
let queryCountry = (xhr, countryInput, countryList, searchList) => {
    
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

                        countryInput.value = e.target.innerHTML; 
                        // clear search results
                        clearSearchResults(countryList)
                    };

                    countryList.appendChild(li);
                
                };
            };
        };
    };
    
    // send text input value to database for query
    xhr.send("searchCountry=" + countryInput.value);
};

export default queryCountry;