const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector("#searchBtn");
const cityName = document.querySelector(".city");
const tempInfo = document.querySelector(".temp");
const conInfo = document.querySelector(".condition");
const windInfo = document.querySelector(".wind");
const countryInfo = document.querySelector(".country");
const localTimeInfo = document.querySelector(".local-time");
const iconImg = document.querySelector(".iconImg");

function fetchWeather(city) {
    fetch(`http://api.weatherapi.com/v1/current.json?key=a659437ac678469886c142043230702&q=${city}&aqi=no`)
    .then((response) => response.json())
    .then((data) => weather(data));

  function weather(data) {
    const name = data.location.name;
    const country = data.location.country;
    const localTime = data.location.localtime;
    const temp = data.current.temp_c;
    const condition = data.current.condition.text;
    const wind = data.current.wind_mph;
    const icon = data.current.condition.icon;
    searchBox.value = '';
    cityName.innerText = `City: ${name}`;
    countryInfo.innerText = `Country: ${country}`;
    localTimeInfo.innerText = `Current local time: ${localTime}`;
    tempInfo.innerText = `Temperature: ${temp}°C`;
    conInfo.innerText = `Today's condition: ${condition}`;
    windInfo.innerText = `Wind: ${wind}mph`;
    iconImg.innerHTML = `<img src="${icon}" alt="Weather icon"></img>`;
  }
};

searchBtn.addEventListener("click", function(){
  let searchValue = searchBox.value;
  fetchWeather(searchValue);
});
