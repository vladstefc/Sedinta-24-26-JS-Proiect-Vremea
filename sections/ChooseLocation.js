// const bucuresti = document.querySelector('.bucharest');
// const timisoara = document.querySelector('.timisoara');
// const oradea = document.querySelector('.oradea');
// const constanta = document.querySelector('.constanta');

const selectedCity = document.getElementById('city');
const localStorageCity = localStorage.getItem('selectedCity');
console.log(localStorageCity)

function updateCity(city) {
    localStorage.setItem('selectedCity', city);

    selectedCity.innerHTML = city;
    displayCurrentWeather(city);
    displayForecastWeather(city);
}

const preselectedCity = localStorageCity || selectedCity.innerHTML;

updateCity(preselectedCity);

// bucuresti.addEventListener('click', function() {
//     updateCity(this.innerHTML);
// })

// timisoara.addEventListener('click', function() {
//     updateCity(this.innerHTML);
// });

// oradea.addEventListener('click', function() {
//     updateCity(this.innerHTML);
// });

// constanta.addEventListener('click', function() {
//     updateCity(this.innerHTML);
// });

const elements = document.querySelectorAll('.dropdown-item');

console.log(elements);

elements.forEach(element => {
    element.addEventListener('click', function() {
        updateCity(this.innerHTML);
    })
})





