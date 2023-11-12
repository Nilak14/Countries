import fetchData from "./fetchData.js";



export async function getSingleData(name) {
    const URL = `https://restcountries.com/v3.1/name/${name}?fullText=true`
    const data = await fetchData(URL)
    let single = data.map(country => {
        let { flags, name, population, region, subregion, capital, tld, currencies, languages, borders } = country
        flags = flags.svg;
        let nativeName = name.nativeName
        name = name.common;
        return {
            flags, name, nativeName, population, region, subregion, capital, tld, currencies, languages, borders
        }
    });
    return single;
}

