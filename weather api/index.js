var inputcity = document.querySelector('#cityinput')
var button = document.querySelector('#Submit')
var outputcity = document.querySelector('#cityname')
var temp = document.querySelector('#temperature')
var desc = document.querySelector('#description')
var weather_forecast = document.querySelector('#weatherforecast')

console.log("this is working")
apik= '921ba71f48b5e606a305bbaa1dbaea72'

function conversion(val) {
    return (val - 273).toFixed(2)

}

button.addEventListener('click', () => {
   
   
   
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputcity.value+'&appid='+apik)
    .then(res => res.json())

    .then(data => {
        var cityname = data['name']
        var description = data['weather']['0']['description']
        var temperature = data['main']['temp']
        var forecast = data['wind']['speed']

        outputcity.innerHTML=`Weather of <span>${cityname}<span>`
        temp.innerHTML = `Temperature:<span> ${conversion(temperature)}<span>`
        desc.innerHTML = `Condition: <span>${description}<span>`
        weather_forecast.innerHTML = `Wind speed: <span> ${forecast} km/h <span`



    })
    .catch(err => alert("You enter wrong city name"))

})

