import get from './getElement.js'
import { displayData } from './displayData.js'

const baseURL = 'https://restcountries.com/v3.1/region/'
const selectEl = get('#filter')

selectEl.addEventListener('change', () => {
    let region = selectEl.value
    if (region == 'All') {
        const URL = 'https://restcountries.com/v3.1/all'
        displayData(URL)
    } else {
        const URL = `${baseURL}${region}`
        displayData(URL)
    }
})