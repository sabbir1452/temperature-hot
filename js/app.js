// DO'NOT SHOW  API KEY ON YOUR JS FILE
const API_KEY = "dbc31c4cd0cc8d5f292915ed5c043354";
// const API_KEY = "46ad7454603b9b0104e633e78cd60e16";

const loadTemperature = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const displayTemperature = (data) => {
  //   const temperature = document.getElementById("temperature");
  //   temperature.innerText = data.main.temp;
  setInnerTextById("temperature", data.main.temp);
  setInnerTextById("condition", data.weather[0].main);
  console.log(data.weather[0].main);
};

const setInnerTextById = (id, text) => {
  const temperature = document.getElementById(id, text);
  temperature.innerText = text;
};

document.getElementById("btn-search").addEventListener("click", function () {
  const searchField = document.getElementById("search-field");
  const city = searchField.value;
  // set city
  document.getElementById("city").innerText = city;
  loadTemperature(city);
});

loadTemperature("dhaka");
// a
