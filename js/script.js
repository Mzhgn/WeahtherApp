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

function showData(data) {}

inputElem.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    fetchData();
  }
});
searchBtn.addEventListener("click", fetchData);
