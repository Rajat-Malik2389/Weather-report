const apikey = "414af6a03a45105eb12974e1b14f488f";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const SearchBox = document.querySelector(".search input");
const SearchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clear"){
            weatherIcon.src = "img/clear.png";
                }
                else if(data.weather[0].main == "Clouds"){
                    weatherIcon.src = "img/clouds.png";
                        }
                        else if(data.weather[0].main == "Drizzle"){
                            weatherIcon.src = "img/drizzle.png";
                                }
                                else if(data.weather[0].main == "Humidity"){
                                    weatherIcon.src = "img/humidity.png";
                                        }
                                        else if(data.weather[0].main == "Mist"){
                                            weatherIcon.src = "img/mist.png";
                                                }
                                                else if(data.weather[0].main == "Rain"){
                                                    weatherIcon.src = "img/rain.png";
                                                        }
                                                        else if(data.weather[0].main == "Snow"){
                                                            weatherIcon.src = "img/snow.png";
                                                                }
                document.querySelector(".weather").style.display = "block";
                document.querySelector(".error").style.display = "none";
    }
    

   
}
SearchBtn.addEventListener("click", ()=>{
    checkWeather(SearchBox.value);
})
    
