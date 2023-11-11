import fetchedData from "./fetchData.js";
import get from "./getElement.js";

const container = get('.container')

export default async function filterData(url) {
    const countries = await fetchedData(url)
    if (countries.status == 404) {
        container.innerHTML = 'Not Found'
        return countries.status;
    } else {
        const filteredData = countries.map(country => {
            let { name, capital, region, population, flags } = country
            return {
                name: name.common, capital, region, population, flag: flags.svg
            }
        });
        filteredData.sort((a, b) => {
            if (a.name > b.name) {
                return 1
            } else if (b.name > a.name) {
                return -1
            } else {
                return 0
            }
        })
        return filteredData;
    }

}