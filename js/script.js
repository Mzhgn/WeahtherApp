"use strict";
// let imagesArray=[{id:1,img:}]
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let $ = document;

const inputElem = $.querySelector(".search-bar");
const searchBtn = $.querySelector("#search");
const weatherEl = $.querySelector(".weather");
const cityEl = $.querySelector(".city");
const tempEl = $.querySelector(".temp");
const descriptionEl = $.querySelector(".description");
const iconEl = $.querySelector(".icon");
const humidityEl = $.querySelector(".humidity");
const windEl = $.querySelector(".wind");

let apiKey = "3244187444f4b03034a273eot82c9c1e";

function fetchData() {
  let city = inputElem.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showData(data);
    });
}

function showData(data) {
  weatherEl.classList.remove("loading");
  cityEl.innerHTML = `${data.city}, ${data.country}`;
  tempEl.innerHTML = `${Math.round(data.temperature.current)}°C`;
  descriptionEl.innerHTML = `${data.condition.description}`;
  iconEl.setAttribute("src", `${data.condition.icon_url}`);
  humidityEl.innerHTML = `Humidity: ${data.temperature.humidity}%`;
  windEl.innerHTML = `Wind speed: ${Math.round(data.wind.speed)}km/h`;
}

inputElem.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    fetchData();
  }
});
searchBtn.addEventListener("click", fetchData);
