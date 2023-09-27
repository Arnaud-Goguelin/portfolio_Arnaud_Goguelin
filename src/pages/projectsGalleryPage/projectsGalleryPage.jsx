import { useRef, useState } from 'react'

import './projectsGalleryPage.scss'

import projectsData from '../../data/projectsDatas.json'

import ComponentButton from '../../components/componentButton/componentButton'
import ProjectCard from '../../components/projectCard/projectCard'
import { handleActiveClass } from '../../utils/handleActiveClass'
import { extractDatas } from '../../utils/extractDatas'

function ProjectsPage() {

    //Création d'un tableau de valeurs uniques (sans doublon) pour générer les boutons filtres
    // En effet nos tags de la base de données sont des tableaux de strings.
    // La fonction extractDatas récupère dans un tableau la totalité des tableaux "tags",
    // puis les concatène pour n'obtenir qu'un seul tableau avec toutes les strings, mais en double.
    const tagsWithDuplicates = extractDatas(projectsData, 'tags')
    const tags = Array.from(new Set(tagsWithDuplicates))

    //Création des variables et ref nécessaires au filtre des projets
    const [ projectsFiltered, setProjectsFiltered ] = useState([])
    const buttonsContainer = useRef(null)

    //Gestion de l'évènement wheel

    const movingGallery = useRef(null)
    function handleWheel(event) {
        // On récupère la valeur de scrollLeft de gallery 
        // (soit le nombre de pixels le long desquels le contenu d'un élément a défilé depuis son bord gauche)
        // et on y ajoute deltaY (la quantité de défilement vertical dans l'unité)
        // verticale car tous les utilisateurs ne disposent pas de souris avec molettes horizontales.
        const gallery = movingGallery.current;
        return gallery.scrollLeft += event.deltaY;
    }
    
    
    //Filtre des projetcs en fonction de la valeur du bouton actif et mise à jour de la variable projectsFiltered 
    function filterProjects(event) {
        const filterValue = event.target.textContent
        setProjectsFiltered(projectsData.filter(project => project.tags.includes(filterValue)))
    }
    


    return (
        <section 
            className='projectsPage'
            onWheel={(event) => handleWheel(event)}
        >
            <h2>Gallerie de projets</h2>
            <div 
                className='projectsPage__buttonsContainer'
                ref={buttonsContainer}
            >
            {
            tags.map(tag => (
                <ComponentButton 
                    key={'filter n°' + tags.indexOf(tag)}
                    className='projectsPage__filter'
                    content={tag}
                    onClick={event => {handleActiveClass(event, buttonsContainer);filterProjects(event)}}
                />
            ))
            }
            </div>

            <div
                className='projectsPage__gallery'
                ref={movingGallery}
            >
                {   //Condition d'affichge des projet: si le tableau des projets filtrés est vide,
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
            </div>
        </section>
    )
}

export default ProjectsPage