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
}

const preselectedCity = localStorageCity || selectedCity.innerHTML;
updateCity(preselectedCity);

const elements = document.querySelectorAll(".dropdown-item");

Object.values(elements).forEach((element) => {
  element.addEventListener("click", function () {
    updateCity(this.innerHTML);
    document.getElementById("myInput").value = "";
    filterFunction();
  });
});

function filterFunction() {
  let input, filter, ul, li, btn, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.querySelector(".dropdown-menu");
  btn = div.getElementsByTagName("button");
  for (i = 0; i < btn.length; i++) {
    txtValue = btn[i].textContent || btn[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      btn[i].style.display = "";
    } else {
      btn[i].style.display = "none";
    }
  }
}
