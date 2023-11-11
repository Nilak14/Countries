import './Scripts/toggleDark.js'
import { displayData } from './Scripts/displayData.js'
import './Scripts/search.js'
import './Scripts/filterByRegion.js'

const URL = 'https://restcountries.com/v3.1/all'


window.addEventListener('DOMContentLoaded', () => {
    displayData(URL)
})

