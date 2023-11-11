import get from './getElement.js'

const btn = get('.mode-toggle-button')



function addLocalStorage(value) {
    localStorage.setItem('DarkMode', JSON.stringify(value))
}

function getFromLocalStorage() {
    const value = JSON.parse(localStorage.getItem('DarkMode')) || false;
    return value
}


// console.log(value)


btn.addEventListener('click', () => {
    document.body.classList.toggle('darkMode')
    check()
})

function check() {
    let value = getFromLocalStorage();
    if (value === false) {
        addLocalStorage(true)
        return value
    } else if (value === true) {
        addLocalStorage(false)
        return value
    }
}

let value = getFromLocalStorage()
if (value) {
    document.body.classList.add('darkMode')
} else {
    document.body.classList.remove('darkMode')
}