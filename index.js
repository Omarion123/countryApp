const countriesElem = document.querySelector(".countries");
const dropDown = document.querySelector(".dropDown");
const dropElem = document.querySelector(".drop");
const region = document.querySelectorAll(".region");
const search = document.querySelector(".search");
const toggle = document.querySelector(".toggle");
const moon = document.querySelector(".moon");
async function getCountries() {
    const url = await fetch("data.json");
    const res = await url.json();
    console.log(res);
    res.forEach(element => {
        showCountry(element);
    });
}
getCountries();
function showCountry(data) {
    const country = document.createElement("div");
    country.classList.add("country");
    country.innerHTML = `
        <div class="country-img">
            <img src="${data.flag}" alt="">
        </div>
        <div class="country-info">
            <h5 class="countryName">${data.name}</h5>
            <p><strong>Population: </strong>${data.population}</p>
            <p class="regionName"><strong>Region: </strong>${data.region}</p>
            <p><strong>Capital: </strong>${data.capital}</p>
        </div>
        `;
    countriesElem.appendChild(country)
    country.addEventListener("click", ()=>{
        showCountryDetail(data)
    })
}
dropDown.addEventListener("click", () => {
    dropElem.classList.toggle("showDropDown");
    console.log("hello");
});
const regionName = document.getElementsByClassName("regionName");
const countryName = document.getElementsByClassName("countryName");
region.forEach(element => {
    element.addEventListener("click", () => {
        console.log(element);
        Array.from(regionName).forEach(elem => {
            console.log(elem.innerText);
            if (elem.innerText.includes(element.innerText) || element.innerText == "All") {
                elem.parentElement.parentElement.style.display = "grid";
            }
            else {
                elem.parentElement.parentElement.style.display = "none";
            }
        })
    })
});
search.addEventListener("input", () => {
    console.log(search.value.toLowerCase());
    Array.from(countryName).forEach(elem => {
        if (elem.innerText.toLowerCase().includes(search.value.toLowerCase())) {
            elem.parentElement.parentElement.style.display = "grid";
        }
        else {
            elem.parentElement.parentElement.style.display = "none";
        }
    })
});
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    moon.classList.toggle("fas");
})
const countryModel=document.querySelector(".countryModel");
function showCountryDetail(data) {
    countryModel.classList.toggle("show")
    countryModel.innerHTML=`<button class="back" value="omar">Back</button>
    <div class="model">
        <div class="leftModel">
            <img src="${data.flag}" alt="">
        </div>
        <div class="rightModel">
            <h1>Germany</h1>
            <div class="modelInfo">
                <div class="innerLeft inner">
                    <p><strong>Native Name: </strong>${data.population}</p>
                    <p><strong>Population: </strong>${data.region}</p>
                    <p><strong>Region: </strong>${data.capital}</p>
                    <p><strong>Sub-region: </strong>${data.capital}</p>
                    <p><strong>Capital: </strong>${data.capital}</p>
                </div>
                <div class="innerRight inner">
                    <p><strong>Top Level Domain: </strong>${data.region}</p>
                    <p><strong>Currencies: </strong>${data.capital}</p>
                    <p><strong>Languages: </strong>${data.capital}</p>
                </div>
            </div>
        </div>
    </div>`;
    const back=countryModel.querySelector(".back");
back.addEventListener("cick", ()=>{
    countryModel.classList.toggle("show")
})
}

