function displayForecastWeather(city) {
  const forecastWeather = document.querySelector(".weather-forecast");

  fetch(getForecastWeatherApi(city))
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      const { list } = res;
      const mapDays = {};

      list.forEach((item) => {
        const day = getDayOfTheWeek(item.dt);

        if (mapDays[day]) {
          mapDays[day].push(item);
        } else {
          mapDays[day] = [item];
        }
      });

      console.log(mapDays);

      Object.entries(mapDays).forEach(([day, items]) => {
        forecastWeather.innerHTML += `
            <h3 class='text-primary'>${day}</h3>
            `;
        items.forEach((item) => {
          const { dt, weather, main } = item;

          const hours = getHours(dt);
          const weatherIcon = getWeatherIcon(weather[0].icon);
          const temperature = Math.round(main.temp);
          const { description } = weather[0];
          const realFeel = Math.round(main.feels_like);

          forecastWeather.innerHTML += `<div class='weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3'>
                <div>
                    ${hours}
                </div>
                    <img src='${weatherIcon}' alt='Icon' />
                <div class='fs-3'>
                    <strong>${temperature}°C</strong>
                </div>
                
                <div>
                    ${description}
                </div>
                
                <div class='real-feel'>
                    Real feel:
                    <strong>${realFeel}°C</strong>
                </div>
                               
                </div>`;
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
