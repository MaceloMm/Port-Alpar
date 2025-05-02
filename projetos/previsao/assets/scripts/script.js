const apiKey = "52c34bb1fec8a47fe2676ce765d114b5";
const lang = "pt_br";
const units = "metric";

const cardEl = document.querySelector(".card");
const iconEl = document.querySelector(".icon");
const cidadeEl = document.querySelector(".cidade");
const tempEL = document.querySelector(".temp");
const tempsenseEL = document.querySelector(".temp-sense span");
const minEL = document.querySelector(".min");
const maxEL = document.querySelector(".max");
const humidityEL = document.querySelector(".humidity");
const fotoEL = document.querySelector(".foto img");
const fotopEl = document.querySelector(".foto span");
const inputEL = document.querySelector(".input input");
const buttonEl = document.querySelector(".input button");

function callApi() {

    const city = inputEL.value;

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&lang=${lang}`
    )
        .then((response) => response.json())
        .then((response) => {
            const data = response.json()
            const icon = response.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
            iconEl.src = iconUrl;

            cidadeEl.innerHTML = city;
            tempEL.innerHTML = response.main.temp;
            tempsenseEL.innerHTML = response.main.feels_like;
            minEL.innerHTML = response.main.temp_min;
            maxEL.innerHTML = response.main.temp_max;
            humidityEL.innerHTML = response.main.humidity;
            fotopEl.innerHTML = response.wind.speed;
            fotoEL.style.transform = `rotate(${response.wind.deg}deg)`
            cardEl.classList.add("active");

        });
}


buttonEl.addEventListener('click', callApi)