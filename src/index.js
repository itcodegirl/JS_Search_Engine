//require('dotenv').config();
let apiKey = 'd9126eda46b6755db8578eaa14ec0ba3';
let apiUrl = 'https://api.openweathermap.org/data/3.0/onecall/timemachine?query=${city}&appid=${apiKey}&units=metrics';
function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  let city = searchInputElement.value
  cityElement.innerHTML = searchInputElement.value;
}

console.log = (apiUrl);

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);


searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=apiKey`)
    .then(response => {
      let cityName = response.data.main.temp;
      let temperature = response.data.main.temp;
      document.querySelector("city-name").textContent = cityName;
      document.querySelector("temperature").textContent = temperature;
    })
    .catch(error => console.error('Error:', error));
});