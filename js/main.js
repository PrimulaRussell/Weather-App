var submit = document.querySelector(".submit")
var inputValue = document.querySelector(".inputValue")
var notSearched = document.querySelector(".notSearched")
var searched = document.querySelector(".searched")
var city = document.querySelector(".city")
var temp = document.querySelector(".temp")
var feeling = document.querySelector(".feeling")
var wind = document.querySelector(".wind")
var humidity = document.querySelector(".humidity")

submit.addEventListener('click', function() {
    fetch('api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=')
        .then(response => response.json)
        .then(changeDisplay())
        .then(data => {
            var cityValue = data['name'];
            var tempValue = data['main']['temp'];
            var feelingValue = data['main']['feels_like'];
            var windValue = data['wind'];
            var humidityValue = data['main']['humidity'];

            city.innerHTML = cityValue;
            temp.innerHTML = tempValue;
            feeling.innerHTML = feelingValue;
            wind.innerHTML = windValue;
            humidity.innerHTML = humidityValue;
        })
})

function changeDisplay() {
    notSearched.style.display = "none";
    searched.style.display = "initial";
}