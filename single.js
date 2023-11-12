import './Scripts/toggleDark.js'
import get from './Scripts/getElement.js'
import './Scripts/displaySingleData.js'

const backButton = get('.back')

backButton.addEventListener('click', () => {
    window.location = 'index.html'
})
