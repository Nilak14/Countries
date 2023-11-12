import { getSingleData } from "./getSingleData.js";
import get from "./getElement.js";
import convert from "./objToArray.js";

const countryName = localStorage.getItem('countryName')
const container = get('.singleItem')

async function displaySingle() {
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
                <p class="native"> <span class="desc">Native Name:</span> ${native}</p>
                <p class="population"> <span class="desc">Population:</span> ${population}</p>
                <p class="region"> <span class="desc">region:</span> ${country.region}</p>
                <p class="sub-region"> <span class="desc">sub-region:</span> ${country.subregion}</p>
                <p class="capital"> <span class="desc">capital:</span> ${country.capital}</p>
            </div>
            <div class="second-detail">
                <p class="domain"> <span class="desc">Top Level Domain:</span> ${country.tld}</p>
                <p class="currency"> <span class="desc">currency:</span> ${currency}</p>
                <p class="language"> <span class="desc">language:</span> ${language}</p>
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
    if (borderButtons) {
        buttonContainer.innerHTML = borderButtons.join('')
    } else {
        title.style.display = 'none'
    }
}

displaySingle();


function createBorderButton(countries) {
    let borderButtons;
    if (countries) {
        borderButtons = countries.map(country => {
            return `<a href="#" class="border">${country}</a>`
        })
        return borderButtons;
    } else {
        return
    }
}
