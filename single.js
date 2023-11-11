import './Scripts/toggleDark.js'
import get from './Scripts/getElement.js'

const backButton = get('.back')

backButton.addEventListener('click', () => {
    window.location = 'index.html'
})
