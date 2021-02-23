//Declaring variables//
var submit = document.querySelector(".submit");
var inputValue = document.querySelector(".inputValue");
var notSearched = document.querySelector(".notSearched");
var searched = document.querySelector(".searched");
var city = document.querySelector(".city");
var temp = document.querySelector(".temp");
var feeling = document.querySelector(".feeling");
var wind = document.querySelector(".wind");
var humidity = document.querySelector(".humidity");
var far = document.querySelector(".far");
var cel = document.querySelector(".cel");
//links to private api key//
var apiKey = config.WEATHER_API_KEY;


//fetches weather data when submit button is clicked//

submit.addEventListener("click", function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&units=imperial&APPID=" + apiKey)
        .then(response => response.json())
        .then(changeDisplay())

    //gets data from weather api and displays it//
    .then(data => {
        var cityValue = data.name;
        var tempValue = Math.round(data.main.temp);
        var feelingValue = Math.round(data.main.feels_like);
        var windValue = data.wind.speed;
        var humidityValue = data.main.humidity;

        city.innerHTML = cityValue;
        temp.innerHTML = tempValue + "°";
        feeling.innerHTML = "Feels like: " + feelingValue + "°";
        wind.innerHTML = "Wind: " + windValue + " mph";
        humidity.innerHTML = "Humidity: " + humidityValue;
    })

    .then(inputValue.value = "")
})


//changes display to show weather stats when submit is clicked//
function changeDisplay() {
    notSearched.style.display = "none";
    searched.style.display = "initial";
}