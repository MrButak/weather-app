let searchCityForm = document.getElementById('searchCityForm');
let errorMessage = document.getElementById('errorMessage');
let city = document.getElementById('city');
let temp = document.getElementById('temp');
let dataWrapper = document.getElementById('dataWrapper');
let weatherImg = document.getElementById('weatherImg');
let fah;


let convertTemp = (kelvin) => {

    // For celcius
    if(fah) {
        fah = false;
        temp.textContent = Math.round(kelvin - 273.15) + " C"; 
    }

    // For fahrenheit
    else {
        fah = true;
        temp.textContent = Math.round((kelvin - 273.15) * 1.8 + 32) + " F"; 
    };
};


let displayData = (data) => {

    // show the data div index.html
    dataWrapper.style.display = "flex";

    city.textContent = data.name;
    weatherImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    // default display temp in fahrenheit
    fah = false;
    convertTemp(data.main.temp);
    
    // toggle temp unit
    document.getElementById('tempUnit').onclick = () => {

        convertTemp(data.main.temp);      
    };
};


async function getData(event) {

    event.preventDefault();
    errorMessage.textContent = "";
    let city = event.srcElement[0].value;
    
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=65388c50a787be295df1ae5b1f2c37ea`, {mode: 'cors'});
    let data = await response.json();
    
    // handle errors
    if(!response.ok) {
        errorMessage.textContent = data.message;
        dataWrapper.style.display = "";
        searchCityForm.reset();
        
        return;
    };
    
    searchCityForm.reset();
    return(displayData(data))
};