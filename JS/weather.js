const API_KEY = "9b4922a202bd7d8c33349192211871cd"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather p:first-child");
        const city = document.querySelector("#weather p:last-child");
        city.innerText = `IN ${data.name}`;
        weather.innerText = `${data.weather[0].main} ${data.main.temp}°C`;
    });
}
function onGeoError(){
    alert("Can't find you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
