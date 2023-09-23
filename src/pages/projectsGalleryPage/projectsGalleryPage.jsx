import { useRef, useState } from 'react'

import './projectsGalleryPage.scss'

import projectsData from '../../data/projectsDatas.json'

import FilterButton from '../../components/filterButton/filterButton'
import ProjectCard from '../../components/projectCard/projectCard'

function ProjectsPage() {

    const buttonsContainer = useRef(null)
    const scrollBarToFill = useRef(null)
    const movingGallery = useRef(null)

    //création d'un variable contenant les projets filtrés
    const [ projectsFiltered, setProjectsFiltered ] = useState([])

    //Création d'un tableau de valeurs uniques pour générer les boutons filtres
    const unusableTags = projectsData.map((project) => project.tags);
    const tagsWithDuplicates = unusableTags.reduce((acc, tags) => {
        return acc.concat(tags)
    })
    const tags = Array.from(new Set(tagsWithDuplicates))
    tags.unshift('Tous')

    //Identification du filtre actif + filtrage des projets
    function filterProjects(event) {
        //Ajout et suppression de classes CSS pour identifier le filtre actif
        const allButtonsFilter = Array.from(buttonsContainer.current.children)
        allButtonsFilter.forEach(buttonFilter => buttonFilter.classList.remove('active'))

        const selectedButton = event.target
        selectedButton.classList.add('active')

        //Filtre des projetcs en fonction de la valeur du bouton actif et mise à jour de la variable projectsFiltered 
        const filterValue = event.target.innerText
        
        setProjectsFiltered(projectsData.filter(project => project.tags.includes(filterValue)))
    }
    //Gestion de l'évènement wheel
     function handleWheel(event) {
        const gallery = movingGallery.current;
        // On récupère la valeur de scrollLeft de gallery 
        // (soit le nombre de pixels le long desquels le contenu d'un élément a défilé depuis son bord gauche)
        // et on y ajoute deltaY (la quantité de défilement vertical dans l'unité)
        // verticale car tous les utilisateurs ne disposent pas de souris avec molettes horizontales.
        return gallery.scrollLeft += event.deltaY;
    }   

    return (
        <section 
            className='projectsPage'
            onWheel={(event) => handleWheel(event)}
        >
            <div 
                className='projectsPage__buttonsContainer'
                ref={buttonsContainer}
            >
            {
            tags.map(tag => (
                <FilterButton 
                    key={'filter n°' + tags.indexOf(tag)}
                    className='projectsPage__filter'
                    content={tag}
                    onClick={filterProjects}
                />
            ))
            }
            </div>

            <div
                className='projectsPage__gallery'
                ref={movingGallery}
            >
                {   //Condition d'affichge des projet: si le tableau des projets filtrés vide,
                    //càd au premier affichage sans aucun filtre actif, alors on utilise le tableau de données complet,
                    //sinon s'il est rempli, c'est qu'un filtre est actif, et on affiche les projets filtrés. 
                    projectsFiltered.length === 0 ?
                    projectsData.map(({id, title, imageURL}) => (
                        <ProjectCard
                        key={id}
                        id={id}
                        title={title}
                        imageURL ={imageURL}
                        />
                    ))
                    :
                    projectsFiltered.map(({id, title, imageURL}) => (
                        <ProjectCard
                        key={id}
                        id={id}
                        title={title}
                        imageURL ={imageURL}
                        />
                    ))
                }
                <div 
                    className='projectsPage__progressBar' 
                    ref={scrollBarToFill}
                ></div>
            </div>
        </section>
    )
}

export default ProjectsPage