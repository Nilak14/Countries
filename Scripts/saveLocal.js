import get from "./getElement.js";

// const singleCountryLink = get('.link')

export default function saveInLocalStorage(section) {
    section.addEventListener('click', (e) => {
        e.preventDefault();
        let link = e.target.parentElement;
        if (link.classList.contains('details')) {
            link = link.parentElement
        } else if (link.classList.contains('link')) {
            // link = e.target.parentElement.firstChildElement
        }
        console.log(link);
    })
}