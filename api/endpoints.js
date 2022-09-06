const API_URL = 'https://api.openweathermap.org/data/2.5';

const API_KEY = '2dc744097025eb0db68f0c7f5a0a8a36';

const IMG_URL = `http://openweathermap.org/img/wn/`;

function getCurrentWeatherApi(city) {
    return  `${API_URL}/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
};

function getForecastWeatherApi(city) {
    return `${API_URL}/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`
}
