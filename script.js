const API_KEY = "d31be56d4477e255d01630781ca71108";


const form = document.querySelector('form');
const search = document.getElementById('search')

const getWeather = async(cityName)=>{
    let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
    const response = await fetch(API_URL)
    let data = await response.json()
    console.log(data);
    showWeather(data)
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let cityName = search.value
    getWeather(cityName)
})

const showWeather = (data)=>{
    let row = document.getElementById('weather')
    if (data.cod == "404") {
        row.innerHTML = `<h4>Oops! City not Found.<h4>`
        return
    }
    row.innerHTML = `<div>
                        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather">
                    </div>
                    <div>
                        <h2>${data.main.temp}<span> &#176;</span>C</h2>
                        <h4>${data.weather[0].main}</h4>
                        

                    </div>`
}