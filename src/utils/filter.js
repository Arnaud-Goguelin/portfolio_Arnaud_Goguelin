export function filterThings(event, buttons, Datas, setThingFiltered,prop ) {
    //Ajout et suppression de classes CSS pour identifier le filtre actif
    const allButtonsFilter = Array.from(buttons.current.children)
    allButtonsFilter.forEach(buttonFilter => buttonFilter.classList.remove('active'))

    const selectedButton = event.target
    selectedButton.classList.add('active')

    //Filtre des projetcs en fonction de la valeur du bouton actif et mise à jour de la variable projectsFiltered 
    const filterValue = event.target.textContent
    setThingFiltered(Datas.filter(data => data[prop].includes(filterValue)))
}