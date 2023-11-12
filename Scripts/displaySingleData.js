import { getSingleData } from "./getSingleData.js";
import get from "./getElement.js";
import convert from "./objToArray.js";
import fetchData from "./fetchData.js";



const container = get('.singleItem')

export async function displaySingle(countryName) {
    const data = await getSingleData(countryName)
    const country = data[0]
    const nativeName = country.nativeName;
    const native = convert(nativeName, 'common')
    const population = country.population.toLocaleString('en-US')
    const currency = convert(country.currencies, 'name')
    const language = convert(country.languages)
    const border = country.borders
    let borderButtons = createBorderButton(border)

    const HTML = `
    <img src="${country.flags}" alt="${country.name}-flag">
    <div class="detail">
        <h2 class="country-name">${country.name}</h2>
        <div class="single-detail">
            <div class="first-detail">
                <p class="native"> <span class="desc">Native Name :</span> ${native}</p>
                <p class="population"> <span class="desc">Population :</span> ${population ? population : 'Not defined till Now'}</p>
                <p class="region"> <span class="desc">region :</span> ${country.region ? country.region : 'Not defined till Now'}</p>
                <p class="sub-region"> <span class="desc">sub-region :</span> ${country.subregion ? country.subregion : 'Not defined till Now'}</p>
                <p class="capital"> <span class="desc">capital :</span> ${country.capital ? country.capital : 'Not defined till Now'}</p>
            </div>
            <br>
            <div class="second-detail">
                <p class="domain"> <span class="desc">Top Level Domain :</span> ${country.tld ? country.tld : 'Not defined till Now'}</p>
                <p class="currency"> <span class="desc">currency :</span> ${currency}</p>
                <p class="language"> <span class="desc">language :</span> ${language}</p>
            </div>
        </div>
        <div class="button-container">
        <h3 class="desc border-title">Border Countries:</h3>
        <div class="btn">
            </div>

        </div>
    </div>
    `
    container.innerHTML = HTML;
    const buttonContainer = get('.btn')
    const title = get('.border-title')
    if (border) {
        const data = await borderButtons;
        data.forEach(async countryName => {
            const name = await countryName;
            buttonContainer.innerHTML += name
        });
    }
    else {
        title.style.display = 'none'
    }
    const btn = get('.btn')
    btn.addEventListener('click', (e) => {
        if (e.target.classList.contains('border')) {
            const name = e.target.dataset.name;
            displaySingle(name)
        }
    })
}



async function createBorderButton(countries) {
    let borderButtons;
    if (countries) {
        borderButtons = countries.map(async countryCode => {
            const URL = `https://restcountries.com/v3.1/alpha/${countryCode}`
            const data = await fetchData(URL);
            const name = data[0].name.common;
            return `<button data-name = "${name}" class="border">${name}</button>`;
        })
        return await borderButtons;
    }
}
