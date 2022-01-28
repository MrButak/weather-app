
let queryCountry = () => {
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/searchcountry', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    let countryInput = document.getElementById('searchCountry');
    let countryList = document.getElementById('countrySearchResults');

    // if a POST request happens
    xhr.onreadystatechange = function() { // Call a function when the state changes.

        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

            // check to see if DOM list of cities contains anything, if so, remove them
            if(countryList.childElementCount > 0) {

                let first = countryList.firstElementChild;

                while(first) {
                    first.remove();
                    first = countryList.firstElementChild;
                };
            };

            // the returned object(s) from the database query
            let countryObjs = JSON.parse(xhr.responseText);
            console.log("I'm here in querycountry.js module")
            console.log(countryObjs)

            // check if cityObjs has anything to display
            if(countryObjs.length > 0) {
                
                // display city data to the dom, add onclick, and data attribute of cityid (for precise api call)
                for(let i = 0; i < countryObjs.length; i++) {
                    
                    let li = document.createElement('li');
                    let a = document.createElement('a');

                    li.textContent = countryObjs[i].country;
                    

                    li.onclick = (e) => {
                        // TODO: clear out live search results for city
                        // searchCountry.value =
                        // console.log("the click event")
                        // console.log(e.target.innerHTML)
                        countryInput.value = e.target.innerHTML;
                        if(countryList.childElementCount > 0) {

                            let first = countryList.firstElementChild;
            
                            while(first) {
                                first.remove();
                                first = countryList.firstElementChild;
                            };
                        };
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