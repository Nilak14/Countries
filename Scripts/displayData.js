import filterData from "./filterData.js";
import get from "./getElement.js";
import saveInLocalStorage from "./saveLocal.js";

const container = get('.container')

export async function displayData(url) {
    const data = await filterData(url)
    if (data == 404) {
        return
    }
    else {
        const HTMLData = data.map(country => {
            let imageClass = 'flag'
            if (country.name === 'Nepal') {
                imageClass = 'nepal'
            }
            const linkElement = document.createElement('a')
            linkElement.classList.add('link')
            linkElement.href = `single.html`
            linkElement.setAttribute('data-name', country.name)
            const HTML = `
                    <article class="country">
                        <img src="${country.flag}" alt="${country.name}-flag" class = ${imageClass}>
                            <div class="details">
                                <h2 class="name">${country.name}</h2>
                                <p class="population"><span class="desc">population:</span> ${country.population.toLocaleString('en-US')}</p>
                                <p class="region"><span class="desc">region:</span> ${country.region}</p>
                                <p class="capital"><span class="desc">capital:</span> ${country.capital}</p>
                            </div>
                    </article>
        `
            linkElement.innerHTML += HTML;
            return linkElement.outerHTML;
        });
        container.innerHTML = HTMLData.join(" ");
        saveInLocalStorage(container);
    }

}




