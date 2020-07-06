
var getCityWeather = function (city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=5408976eb6420d10cfd14a42e726bb54";
    // format the github api url
    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
        });
    
    });
}


getCityWeather("London")
