function displayForecastWeather(city) {
    const forecastWeather = document.querySelector('.weather-forecast');

    fetch(getForecastWeatherApi(city))
    .then(res => res.json())
    .then(res => {
        console.log(res);
        const { list } = res;
        const mapDays = {};

        list.forEach(item => {
            const day = getDayOfTheWeek(item.dt);

            if (mapDays[day]) {
                mapDays[day].push(item)
            } else {
                mapDays[day] = [item];
            }
        })

        console.log(mapDays)

        Object.entries(mapDays).forEach(([day, items]) => {
            forecastWeather.innerHTML +=`
            <h3 class='text-primary'>${day}</h3>
            <div class='weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3'></div>
            `
            console.log(day);
            console.log(items)
        })


        // for (day in mapDays) {
        //     console.log(day);
        // }

    })
    .catch(err => {
        console.log(err);
    });
}
