"use strict";
// data for background image

const backgroundImages = [
  "url(/images/nature-01.png)",
  "url(/images/nature-02.png)",
  "url(/images/nature-03.png)",
  "url(/images/nature-04.png)",
  "url(/images/nature-05.png)",
];

// data for weather

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
  // changing the bg
  const randomImgIndex = Math.floor(Math.random() * backgroundImages.length);
  document.body.style.backgroundImage = backgroundImages[randomImgIndex];
  // fetch weather data
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

  inputElem.value = "";
}

inputElem.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    fetchData();
  }
});
searchBtn.addEventListener("click", fetchData);

// changing backgroung image on load

// window.addEventListener("load", () => {
//   document.body.style.backgroundImage = backgroundImages[randomImgIndex];
// });
