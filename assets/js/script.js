var weatherContainerEl = document.querySelector("#weather-container");
var weatherSearchTerm = document.querySelector("#weather-search-term");
var getCityWeather = function (city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=5408976eb6420d10cfd14a42e726bb54";
    // format the github api url
    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            displayWeather(data, city)
            //THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
            console.log(data);
            console.log("temp", data.main.temp)
        });

    });
}
var userFormEl = document.querySelector("#city-form");
var nameInputEl = document.querySelector("#cityname");

var formSubmitHandler = function (event) {
    event.preventDefault();
    // get value from input element
    var cityname = nameInputEl.value.trim();

    if (cityname) {
        getCityWeather(cityname);
        nameInputEl.value = "";
    } else {
        alert("Please enter a city name");
    }
    console.log(event);
};
var displayWeather = function (weather, searchTerm) {
    // clear old content
    weatherContainerEl.textContent = "";
    weatherSearchTerm.textContent = searchTerm;
};

userFormEl.addEventListener("submit", formSubmitHandler);
