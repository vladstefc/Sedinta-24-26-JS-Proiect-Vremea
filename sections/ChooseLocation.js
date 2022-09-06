const bucuresti = document.querySelector('.bucharest');
const timisoara = document.querySelector('.timisoara');
const oradea = document.querySelector('.oradea');
const constanta = document.querySelector('.constanta');

const selectedCity = document.getElementById('city');

function updateCity(city) {
    selectedCity.innerHTML = city;
    displayCurrentWeather(city);
    displayForecastWeather(city);
}

bucuresti.addEventListener('click', function() {
    updateCity(this.innerHTML);
})

timisoara.addEventListener('click', function() {
    updateCity(this.innerHTML);
});

oradea.addEventListener('click', function() {
    updateCity(this.innerHTML);
});

constanta.addEventListener('click', function() {
    updateCity(this.innerHTML);
});




