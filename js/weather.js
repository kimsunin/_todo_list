const API_KEY = "4d520dc390610c30e2593fcb67dc143b"

function onGeoOk(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const first = document.querySelector("#weather span:first-child")
        const second = document.querySelector("#weather span:nth-child(2)")
        const last = document.querySelector("#weather span:last-child")
        first.innerHTML = data.name
        second.innerHTML = data.weather[0].main
        last.innerHTML = data.main.temp
    })
}
function onGeoError(){
    alert("can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)