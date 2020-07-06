var weatherSearchTerm = document.querySelector("#weather-search-term");
var userFormEl = document.querySelector("#city-form");
var nameInputEl = document.querySelector("#cityname");
var weatherContainer = $("#weather-container");
var weatherContainerFive = $("#weather-container-five");
var getCityWeather = function (city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=5408976eb6420d10cfd14a42e726bb54&units=imperial";
    // format the github api url
    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            displayWeather(data, city)
            //THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
            console.log(data)

            weatherContainer.append("<p>Temperature: " + data.main.temp + "</p>");
            weatherContainer.append("<p>Humidity: " + data.main.humidity + "</p>");
            weatherContainer.append("<p>Wind-speed: " + data.wind.speed + "</p>");
            weatherContainer.append("<p>Condition: " + data.weather[0].description + "</p>");
        });

    });
}
var getCityForecast = function (city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=5408976eb6420d10cfd14a42e726bb54&units=imperial";
    // format the github api url
    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {

            for (var i = 2; i < data.list.length; i += 8) {

                var newDiv = $("<div>");
                newDiv.addClass("col-md-2");
                console.log(data);
                var date = data.list[i].dt_txt.split(" ");
                var today = date[0];

                newDiv.append("<p>" + today + "</p>")
                newDiv.append("<p>Humidity: " + data.list[i].main.humidity + "</p>")
                newDiv.append("<p>Temperature: " + data.list[i].main.temp + "</p>")
                var img = $("<img>").attr("src", "http://openweathermap.org/img/wn/" +data.list[i].weather[0].icon +".png");
                newDiv.append(img)

                weatherContainerFive.append(newDiv);
            }

        
        });

    });
}

var formSubmitHandler = function (event) {
    event.preventDefault();
    // get value from input element
    var cityname = nameInputEl.value.trim();

    if (cityname) {
        getCityWeather(cityname);
        getCityForecast(cityname);
        nameInputEl.value = "";
    } else {
        alert("Please enter a city name");
    }
    console.log(event);
};
var displayWeather = function (weather, searchTerm) {
    weatherContainer.textContent = "";
    weatherSearchTerm.textContent = searchTerm;

};

userFormEl.addEventListener("submit", formSubmitHandler);


