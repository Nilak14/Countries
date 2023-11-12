import './Scripts/toggleDark.js'
import get from './Scripts/getElement.js'
import { displaySingle } from './Scripts/displaySingleData.js'

const backButton = get('.back')

backButton.addEventListener('click', () => {
    window.location = 'index.html'
})

const countryName = localStorage.getItem('countryName')
window.addEventListener('DOMContentLoaded', () => {
    displaySingle(countryName)
})


