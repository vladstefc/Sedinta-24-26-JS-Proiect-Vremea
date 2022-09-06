function displayCurrentWeather(city) {

    const currentWeather = document.querySelector('.current-weather');

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
    })
    .catch(err => {
        console.log(err);
    });

}