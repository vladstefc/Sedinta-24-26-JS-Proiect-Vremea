function displayCurrentWeather(city) {

    const currentWeather = document.querySelector('.current-weather');
    const chooseLoc = document.querySelector(".choose-location");

    fetch(getCurrentWeatherApi(city))
    .then(res => res.json())
    .then(res => {
        console.log(res);
        const { dt, main, weather, wind } = res;
        const { description } = weather[0];
        const windSpeed = Math.round(windToKmPerHour(wind.speed))
        const hours = getHours(dt);
        const day = getDayOfTheWeek(dt);
        const realFeel = Math.round(main.feels_like);
        const weatherIcon = getWeatherIcon(weather[0].icon);
        const temperature = Math.round(main.temp);

        // chooseLoc.innerHTML = weather.weather[0].main;
        const weatherinfo = weather[0].main;
        console.log(weatherinfo)
        
        currentWeather.innerHTML = `
            <div class='px-3'>
                <div class='fs-2 fw-bold mb-2'>${city}
                </div>
                <div class='fs-4'>
                    <strong>${day}, </strong>${hours}
                    </div>
                <div class='d-flex align-items-center justify-content-center'>
                    <strong class='fs-1'>${temperature}°C</strong>
                    <img src='${weatherIcon}' />
                </div>
            </div>
            <div class='px-3'>
                <p class='fs-5'>Real feel: <strong>${realFeel}°C</strong></p>
                <p class='fs-5 text-capitalize'>${description}</p>
                <p class='fs-5'>Vant: <strong>${windSpeed} km/h</strong></p>
            </div>
        `;

        function backgroundChange(weather) {
            if (weatherinfo === Rain) {
            chooseLoc.style.backgroundImage = 'url(../day/rain-clouds.jpg)';
            } else if (weatherinfo === Clouds) {
            chooseLocchooseLoc.style.backgroundImage = 'url(day/scattered-clouds.jpg)';
            } else if (weatherinfo === Clear) {
            chooseLoc.style.backgroundImage = 'url(day/sunny-day.gif)';
            } else {
            // document.body.style.backgroundImage= 'url(background.gif)';
            }
          }
    })
    .catch(err => {
        console.log(err);
    });
}