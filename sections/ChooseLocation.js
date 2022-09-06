// const bucuresti = document.querySelector('.bucharest');
// const timisoara = document.querySelector('.timisoara');
// const oradea = document.querySelector('.oradea');
// const constanta = document.querySelector('.constanta');

const listOfCities = [
    "Abrud",
    "Adjud",
    "Agnita",
    "Aiud",
    "Alba Iulia",
    "Aleșd",
    "Alexandria",
    "Amara",
    "Anina",
    "Aninoasa",
    "Arad",
    "Ardud",
    "Avrig",
    "Azuga",
    "Babadag",
    "Băbeni",
    "Bacău",
    "Baia de Aramă",
    "Baia de Arieș",
    "Baia Mare",
    "Baia Sprie",
    "Băicoi",
    "Băile Govora",
    "Băile Herculane",
    "Băile Olănești",
    "Băile Tușnad",
    "Băilești",
    "Bălan",
    "Bălcești",
    "Balș",
    "Baraolt",
    "Bârlad",
    "Bechet",
    "Beclean",
    "Beiuș",
    "Berbești",
    "Berești",
    "Bicaz",
    "Bistrița",
    "Blaj",
    "Bocșa",
    "Boldești-Scăeni",
    "Bolintin-Vale",
    "Borșa",
    "Borsec",
    "Botoșani",
    "Brad (oraș)|Brad",
    "Bragadiru",
    "Brăila",
    "Brașov",
    "Breaza",
    "Brezoi",
    "Broșteni",
    "Bucecea",
    "București",
    "Budești",
    "Buftea",
    "Buhuși",
    "Bumbești-Jiu",
    "Bușteni",
    "Buzău",
    "Buziaș",
    "Cajvana",
    "Calafat",
    "Călan",
    "Călărași",
    "Călimănești",
    "Câmpeni",
    "Câmpia Turzii",
    "Câmpina",
    "Câmpulung Moldovenesc",
    "Câmpulung",
    "Caracal",
    "Caransebeș",
    "Carei",
    "Cavnic",
    "Căzănești",
    "Cehu Silvaniei",
    "Cernavodă",
    "Chișineu-Criș",
    "Chitila",
    "Ciacova",
    "Cisnădie",
    "Cluj-Napoca",
    "Codlea",
    "Comănești",
    "Comarnic",
    "Constanța",
    "Copșa Mică",
    "Corabia",
    "Costești, Argeș|Costești",
    "Covasna",
    "Craiova",
    "Cristuru Secuiesc",
    "Cugir",
    "Curtea de Argeș",
    "Curtici",
    "Dăbuleni",
    "Darabani",
    "Dărmănești",
    "Dej",
    "Deta",
    "Deva",
    "Dolhasca",
    "Dorohoi",
    "Drăgănești-Olt",
    "Drăgășani",
    "Dragomirești",
    "Drobeta-Turnu Severin",
    "Dumbrăveni",
    "Eforie",
    "Făgăraș",
    "Făget",
    "Fălticeni",
    "Făurei",
    "Fetești",
    "Fieni",
    "Fierbinți-Târg",
    "Filiași",
    "Flămânzi",
    "Focșani",
    "Frasin (oraș)|Frasin",
    "Fundulea",
    "Găești",
    "Galați",
    "Gătaia",
    "Geoagiu",
    "Gheorgheni",
    "Gherla",
    "Ghimbav",
    "Giurgiu",
    "Gura Humorului",
    "Hârlău",
    "Hârșova",
    "Hațeg",
    "Horezu",
    "Huedin",
    "Hunedoara",
    "Huși",
    "Ianca",
    "Iași",
    "Iernut",
    "Ineu",
    "Însurăței",
    "Întorsura Buzăului",
    "Isaccea",
    "Jibou",
    "Jimbolia",
    "Lehliu Gară",
    "Lipova",
    "Liteni",
    "Livada (oraș)|Livada",
    "Luduș",
    "Lugoj",
    "Lupeni",
    "Măcin",
    "Măgurele",
    "Mangalia",
    "Mărășești",
    "Marghita",
    "Medgidia",
    "Mediaș",
    "Miercurea Ciuc",
    "Miercurea Nirajului",
    "Miercurea Sibiului",
    "Mihăilești",
    "Milișăuți",
    "Mioveni",
    "Mizil",
    "Moinești",
    "Moldova Nouă",
    "Moreni",
    "Motru",
    "Murfatlar",
    "Murgeni",
    "Nădlac",
    "Năsăud",
    "Năvodari",
    "Negrești",
    "Negrești-Oaș",
    "Negru Vodă (oraș)|Negru Vodă",
    "Nehoiu",
    "Novaci",
    "Nucet",
    "Ocna Mureș",
    "Ocna Sibiului",
    "Ocnele Mari",
    "Odobești",
    "Odorheiu Secuiesc",
    "Oltenița",
    "Onești",
    "Oradea",
    "Orăștie",
    "Oravița",
    "Orșova",
    "Oțelu Roșu",
    "Otopeni",
    "Ovidiu (oraș)|Ovidiu",
    "Panciu",
    "Pâncota",
    "Pantelimon",
    "Pașcani",
    "Pătârlagele",
    "Pecica",
    "Petrila",
    "Petroșani",
    "Piatra Neamț",
    "Piatra-Olt",
    "Pitești",
    "Ploiești",
    "Plopeni",
    "Podu Iloaiei",
    "Pogoanele",
    "Popești-Leordeni",
    "Potcoava",
    "Predeal",
    "Pucioasa",
    "Răcari",
    "Rădăuți",
    "Râmnicu Sărat",
    "Râmnicu Vâlcea",
    "Râșnov",
    "Recaș",
    "Reghin",
    "Reșița",
    "Roman, România|Roman",
    "Roșiorii de Vede",
    "Rovinari",
    "Roznov",
    "Rupea",
    "Săcele",
    "Săcueni",
    "Salcea",
    "Săliște",
    "Săliștea de Sus",
    "Salonta",
    "Sângeorgiu de Pădure",
    "Sângeorz-Băi",
    "Sânnicolau Mare",
    "Sântana",
    "Sărmașu",
    "Satu Mare",
    "Săveni",
    "Scornicești",
    "Sebeș",
    "Sebiș",
    "Segarcea",
    "Seini",
    "Sfântu Gheorghe",
    "Sibiu",
    "Sighetu Marmației",
    "Sighișoara",
    "Simeria",
    "Șimleu Silvaniei",
    "Sinaia",
    "Siret",
    "Slănic",
    "Slănic-Moldova",
    "Slatina, România|Slatina",
    "Slobozia",
    "Solca",
    "Șomcuta Mare",
    "Sovata",
    "Ștefănești, Argeș",
    "Ștefănești, Botoșani",
    "Ștei",
    "Strehaia",
    "Suceava",
    "Sulina",
    "Tălmaciu",
    "Țăndărei",
    "Târgoviște",
    "Târgu Bujor",
    "Târgu Cărbunești",
    "Târgu Frumos",
    "Târgu Jiu",
    "Târgu Lăpuș",
    "Târgu Mureș",
    "Târgu Neamț",
    "Târgu Ocna",
    "Târgu Secuiesc",
    "Târnăveni",
    "Tășnad",
    "Tăuții-Măgherăuș",
    "Techirghiol",
    "Tecuci",
    "Teiuș",
    "Țicleni",
    "Timișoara",
    "Tismana",
    "Titu",
    "Toplița",
    "Topoloveni",
    "Tulcea",
    "Turceni",
    "Turda",
    "Turnu Măgurele",
    "Ulmeni",
    "Ungheni, Mureș|Ungheni",
    "Uricani",
    "Urlați",
    "Urziceni",
    "Valea lui Mihai",
    "Vălenii de Munte",
    "Vânju Mare",
    "Vașcău",
    "Vaslui",
    "Vatra Dornei",
    "Vicovu de Sus",
    "Victoria, România|Victoria",
    "Videle",
    "Vișeu de Sus",
    "Vlăhița",
    "Voluntari",
    "Vulcan (oraș)|Vulcan",
    "Zalău",
    "Zărnești",
    "Zimnicea",
    "Zlatna",
  ];

const list = document.querySelector(".for-drop-down-btn");  

const selectedCity = document.getElementById("city");
const localStorageCity = localStorage.getItem("selectedCity");
console.log(localStorageCity);

function updateCity(city) {
  localStorage.setItem("selectedCity", city);

  selectedCity.innerHTML = city;
  displayCurrentWeather(city);
  displayForecastWeather(city);
  dropdownCities();
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

const elements = document.querySelectorAll(".dropdown-item");

elements.forEach((element) => {
  element.addEventListener("click", function () {
    updateCity(this.innerHTML);
  });
});

function dropdownCities() {
  for (i = 0; i < listOfCities.length; i++) {
    let optn = listOfCities[i];
    // console.log(listOfCities[i]);
    let el = document.createElement("button");
    // console.log(el);
    el.textContent = optn;
    el.value = optn;
    // console.log("el.value =", el.value);
    list.appendChild(el);
    el.classList.add("dropdown-item");
  }
}

dropdownCities();


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
}
