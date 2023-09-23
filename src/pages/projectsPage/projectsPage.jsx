import { useRef } from 'react'

import './projectsPage.scss'

import projectsData from '../../data/projectsDatas.json'

import FilterButton from '../../components/filterButton/filterButton'
import ProjectCard from '../../components/projectCard/projectCard'

function ProjectsPage() {

    const buttonsContainer = useRef(null)
    const scrollBarToFill = useRef(null)
    const movingGallery = useRef(null)

    
    const unusableTags = projectsData.map((project) => project.tags);
    const tagsWithDuplicates = unusableTags.reduce((acc, tags) => {
        return acc.concat(tags)
    })
    const tags = Array.from(new Set(tagsWithDuplicates))
    tags.unshift('Tous')

    function handleClick(event) {
        const allButtonsFilter = Array.from(buttonsContainer.current.children)
        allButtonsFilter.forEach(buttonFilter => buttonFilter.classList.remove('active'))

        const selectedButton = event.target
        selectedButton.classList.add('active')
    }

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
                    onClick={handleClick}
                />
            ))
            }
            </div>

            <div
                className='projectsPage__gallery'
                ref={movingGallery}
                // onKeyDown={ (event) => handleKeyDown(event)}
            >
                {
                    projectsData.map(({id, title, imageURL}) => (
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