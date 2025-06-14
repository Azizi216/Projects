const ApiKey = "257902b3253dd46b7d506985137e09f9";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weather_icon = document.querySelector(".wather_icon")

async function checkWeather(city) {

    const response = await fetch(`${ApiUrl}${city}&appid=${ApiKey}`);
    if(response.status == 404){
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    } else {
      var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".tem").innerHTML = Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+ "Km/hr";
    if (data.weather[0].main == "Clouds"){
      weather_icon.src = "images/clouds.png";
} else if(data.weather[0].main == "Clear"){
      weather_icon.src = "images/clear.png";
} else if(data.weather[0].main == "Rain"){
      weather_icon.src = "images/rain.png";
}else if(data.weather[0].main == "Drizzle"){
      weather_icon.src = "images/drizzle.png";
}else if(data.weather[0].main == "Mist"){
      weather_icon.src = "images/mist.png";
}
document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";

    }
    
      
}
      searchBtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value);
      })
    