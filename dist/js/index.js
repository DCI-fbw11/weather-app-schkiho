let btn = document.getElementById("addCity");
let cities = [];
let cityNames = [];
let cityForecast = [];
let forecastName = [];

btn.addEventListener("click", () => {
  city = document.getElementById("cityInput").value;
  document.getElementById("cityInput").value = "";
  if (city === "") {
    return alert("Enter a city");
  } else {
    getWeatherApi();
  }
});

function weatherHTML(cities) {
  document.getElementById("weatherOutput").innerHTML = "";

  cities.forEach(city => {
    let temp = Math.round(city.main.temp);
    let cityWeather = `<div id ='container' style="background-image:url(${weatherBackground(
      city
    )})">
          <h1>${city.name}</h1>
          <h4>Humidity : ${city.main.humidity} %</h4>
          <h4>Temp : ${temp} °C</h4>
          <img src="./img/${city.weather[0].icon}.png" alt="">
          <h4>Wind speed :  ${city.wind.speed} m/s</h4> 
          <h4>Deg:  ${city.wind.deg}</h4> 
          <h4>${city.weather[0].description}</h4>
          <button onclick="deleteCity(${cities.indexOf(
            city
          )})">Delete</button><button onclick="getForecast()">Forecast</button></div>`;

    document.getElementById("weatherOutput").innerHTML += cityWeather;
  });
}

function forecastHTML(cityForecast) {
  document.getElementById("forecastOutput").innerHTML = "";

  cityForecast.forEach(forecast => {
    let day1 = forecast.list[8];
    let day2 = forecast.list[16];
    let forecastCard = "";

    console.log(day1);
    console.log(day2);

    let temp1 = Math.round(day1.main.temp);
    let temp2 = Math.round(day2.main.temp);

    forecastCard = `<div id='forecastContainer' style="background-image:url(${forecastBackground(
      day1
    )})">
          <div class="forecast1">
            <h4>${day1.dt_txt}</h4>
            <img src="./img/${day1.weather[0].icon}.png" alt="">
            <h4>Temp: ${temp1} °C</h4>
            <h4>${day1.weather[0].description}</h4>
          </div>
          <div class="forecast2">
            <h4>${day2.dt_txt}</h4>
            <img src="./img/${day2.weather[0].icon}.png" alt="">
            <h4>Temp: ${temp2} °C</h4>
            <h4>${day2.weather[0].description}</h4>
          </div>
          </div>`;
    // console.log(forecastCard);
    document.getElementById("forecastOutput").innerHTML += forecastCard;
  });
}

//

function deleteCity(index) {
  cities.splice(index, 1);
  cityNames.splice(index, 1);
  cityForecast.splice(index, 1);

  weatherHTML(cities);
  forecastHTML(cityForecast);
  // console.log(cities);
}

function weatherBackground(city) {
  let img = {
    rain:
      "https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    sunny:
      "https://images.pexels.com/photos/3590/nature-sky-sunny-clouds.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    snow:
      "http://2.bp.blogspot.com/_2IU2Nt4rD1k/TQ-m8w1ZO0I/AAAAAAAACUE/141iQgueiyo/s1600/winter_night.jpg",
    cloud:
      "https://images.pexels.com/photos/601798/pexels-photo-601798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    fog:
      "https://addins.waow.com/blogs/weather/wp-content/uploads/2013/12/fog.jpg",
    mist: "http://www.sciencekids.co.nz/images/pictures/weather/valleymist.jpg",
    haze:
      "http://icons-ak.wunderground.com/data/wximagenew/t/Tsurai/1590-800.jpg",
    drizzle:
      "https://get.pxhere.com/photo/snow-morning-rain-green-weather-drizzle-atmospheric-phenomenon-atmosphere-of-earth-1571.jpg",
    general:
      "http://images5.fanpop.com/image/photos/30900000/supercell-weather-30969255-1680-1050.jpg"
  };
  if (city.weather[0].main === "Clear") {
    return img.sunny;
  } else if (city.weather[0].main === "Clouds") {
    return img.cloud;
  } else if (city.weather[0].main === "Snow") {
    return img.snow;
  } else if (city.weather[0].main === "Rain") {
    return img.rain;
  } else if (city.weather[0].main === "Fog") {
    return img.fog;
  } else if (city.weather[0].main === "Mist") {
    return img.mist;
  } else if (city.weather[0].main === "Haze") {
    return img.haze;
  } else if (city.weather[0].main === "Drizzle") {
    return img.drizzle;
  } else {
    return img.general;
  }
}

function forecastBackground(forecast) {
  let forecastImg = {
    rain:
      "https://images.pexels.com/photos/125510/pexels-photo-125510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    sunny:
      "https://images.pexels.com/photos/3590/nature-sky-sunny-clouds.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    snow:
      "http://2.bp.blogspot.com/_2IU2Nt4rD1k/TQ-m8w1ZO0I/AAAAAAAACUE/141iQgueiyo/s1600/winter_night.jpg",
    cloud:
      "https://images.pexels.com/photos/601798/pexels-photo-601798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    fog:
      "https://addins.waow.com/blogs/weather/wp-content/uploads/2013/12/fog.jpg",
    mist: "http://www.sciencekids.co.nz/images/pictures/weather/valleymist.jpg",
    haze:
      "http://icons-ak.wunderground.com/data/wximagenew/t/Tsurai/1590-800.jpg",
    drizzle:
      "https://get.pxhere.com/photo/snow-morning-rain-green-weather-drizzle-atmospheric-phenomenon-atmosphere-of-earth-1571.jpg",
    general:
      "http://images5.fanpop.com/image/photos/30900000/supercell-weather-30969255-1680-1050.jpg"
  };
  if (forecast.weather[0].main === "Clear") {
    return forecastImg.sunny;
  } else if (forecast.weather[0].main === "Clouds") {
    return forecastImg.cloud;
  } else if (forecast.weather[0].main === "Snow") {
    return forecastImg.snow;
  } else if (forecast.weather[0].main === "Rain") {
    return forecastImg.rain;
  } else if (forecast.weather[0].main === "Fog") {
    return forecastImg.fog;
  } else if (forecast.weather[0].main === "Mist") {
    return forecastImg.mist;
  } else if (forecast.weather[0].main === "Haze") {
    return forecastImg.haze;
  } else if (forecast.weather[0].main === "Drizzle") {
    return forecastImg.drizzle;
  } else {
    return forecastImg.general;
  }
}

async function getWeatherApi() {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&cnt=5&APPID=4f9fe51bf288ac7c62c3c605a932d614`
  );
  try {
    let data = await res.json();
    if (data.cod === "404") {
      return alert(`${data.message}`);
    } else {
      if (!cityNames.includes(data.name)) {
        cityNames.push(data.name);
        cities.push(data);
      } else {
        alert("City exist already!");
        // console.log(cities);
      }
      weatherHTML(cities);
    }
  } catch (e) {
    console.log(e.message);
  }
}

async function getForecast() {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=4f9fe51bf288ac7c62c3c605a932d614`
  );
  try {
    let data = await res.json();
    if (!forecastName.includes(data.city.name)) {
      console.log(data.city.name);
      forecastName.push(data.city.name);
      cityForecast.push(data);
    } else {
      alert("Forecast exist already!");
    }
    forecastHTML(cityForecast);
  } catch (e) {
    console.log(e.message);
  }
}
