import get from './getElement.js'
import { displayData } from './displayData.js'

const baseURl = 'https://restcountries.com/v3.1/name/'
const inputEl = get('.search-bar')

inputEl.addEventListener('keyup', () => {
    let userValue = inputEl.value;
    if (userValue == '') {
        console.log('hi');
        const URL = 'https://restcountries.com/v3.1/all'
        displayData(URL)
    } else {
        const URL = `${baseURl}${userValue}`
        displayData(URL);

    }
})

