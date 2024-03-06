const apiKey = "67e8288c07402c614bfdda0292584460";
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

        const searchBox = document.querySelector(".search-container input");
        const searchBtn = document.querySelector(".search-container button");
        const weatherIcon = document.querySelector(".weather-icon");


        async function checkweather(city){
            const response = await fetch(apiURL + "&q=" + city + `&appid=${apiKey}`);
            var data = await response.json();

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round( data.main.temp) + " °C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
            document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";


            const weatherMain = data.weather[0].main.toLowerCase().trim(); // Normalize the weather condition string
       
            if(weatherMain === "clouds"){
                weatherIcon.src = "img/clouds.png";
                console.log("Clouds");
            } else if(weatherMain === "clear"){
                weatherIcon.src = "img/clear.png";
                console.log("Clear");
            } else if(weatherMain === "rain"){
                weatherIcon.src = "img/rain.png";
                console.log("Rain");
            } else if(weatherMain === "drizzle"){
                weatherIcon.src = "img/snow.png";
                console.log("Drizzle");
            } else if(weatherMain === "mist"){
                weatherIcon.src = "img/mist.png";
                console.log("Mist");
            }
        
            document.querySelector(".weather").style.display = "flex";
        }

          searchBtn.addEventListener("click", ()=>{
           checkweather(searchBox.value);

        });
        searchBox.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                checkweather(searchBox.value);
            }
        });
