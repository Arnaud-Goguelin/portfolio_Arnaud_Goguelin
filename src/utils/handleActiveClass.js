export function handleActiveClass(event, buttons) {
    //Ajout et suppression de classes CSS pour identifier le filtre actif
    const allButtonsFilter = Array.from(buttons.current.children)
    allButtonsFilter.forEach(buttonFilter => buttonFilter.classList.remove('active'))

    const selectedButton = event.target
    selectedButton.classList.add('active')
}