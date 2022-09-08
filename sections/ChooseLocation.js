const list = document.querySelector(".for-drop-down-btn");  

const selectedCity = document.getElementById("city");
const localStorageCity = localStorage.getItem("selectedCity");

(function dropdownCities() {
  for (i = 0; i < listOfCities.length; i++) {
    let optn = listOfCities[i];
    let el = document.createElement("button");
    el.textContent = optn;
    el.value = optn;
    list.appendChild(el);
    el.classList.add("dropdown-item");
  }
})();

function updateCity(city) {
  localStorage.setItem("selectedCity", city);

  selectedCity.innerHTML = city;
  displayCurrentWeather(city);
  displayForecastWeather(city);
};

const preselectedCity = localStorageCity || selectedCity.innerHTML;

updateCity(preselectedCity);

const elements = document.querySelectorAll(".dropdown-item");

Object.values(elements).forEach((element) => {
  element.addEventListener("click", function () {
    updateCity(this.innerHTML);
  });
});


function filterFunction() {
  let input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.querySelector('.dropdown-menu');
  a = div.getElementsByTagName("button");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = ""; 
    } else {
      a[i].style.display = "none";
    }
  }
};



