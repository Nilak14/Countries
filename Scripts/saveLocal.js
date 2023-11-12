export default function saveInLocalStorage(section) {
    section.addEventListener('click', (e) => {
        // e.preventDefault();
        let link = e.target.closest('a')
        if (link) {
            const countryName = link.dataset.name;
            localStorage.setItem('countryName', countryName)
        }
    })
}