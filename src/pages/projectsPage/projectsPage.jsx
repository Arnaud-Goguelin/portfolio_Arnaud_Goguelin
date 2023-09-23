import { useEffect, useRef, useState } from 'react'

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

    const [ maxWidth, setMawWidth] = useState(0)

    useEffect(() => {
        const gallery = movingGallery.current;
        setMawWidth(gallery.scrollWidth);
    },[])

    function handleWheel(event) {
        const scrollBar = scrollBarToFill.current
        const gallery = movingGallery.current;
        // On récupère la valeur de scrollLeft de gallery 
        // (soit le nombre de pixels le long desquels le contenu d'un élément a défilé depuis son bord gauche)
        // et on y ajoute deltaY (la quantité de défilement vertical dans l'unité)
        // verticale car tous les utilisateurs ne disposent pas de souris avec molettes horizontales.
        const scrollLeft = gallery.scrollLeft += event.deltaY;
        // On calcule ici le rapport de progression de scroll réalisés (scrollLeft) 
        // par rapport à la largeur totale de gallery (scrollWidth).
        // On le converti en % pour la valeur de width de scrollBar.
        const scrolled = (scrollLeft / gallery.scrollWidth) * 100;

        // La propriété width se réfère à la zone d'affichage de gallery (soit clientWidth)
        // or nous nous référons à la largeur totale de gallery (soit scrollWidth).
        // Nous devons donc convertir la progression sur la zone d'affichage
        // pour qu'elle corresponde à la progression sur la largeur totale
        // (autrement la scrollBar reste cantonnée au début du défilement)
        const converterRatio = (gallery.scrollWidth  / gallery.clientWidth)
        const newScrollBarWidth = scrolled*(1 + converterRatio)

        // On limite la largeur de la scrollBar à la largeur maximale de gallery
        if (((gallery.clientWidth*newScrollBarWidth)/100) >= maxWidth) {
            scrollBar.style.width === 100 + '%'
        } else {
            scrollBar.style.width = newScrollBarWidth + '%';
        }
    }   

    function handleKeyDown(event) {
        const scrollBar = scrollBarToFill.current
        let width = scrollBar.scrollWidth

        const gallery = movingGallery.current;

        if (event.keyCode === 37) {     
            console.log(gallery)
            const scrollLeft = gallery.scrollWidth -= 1;

            const width = gallery.scrollWidth - gallery.clientWidth;
            const width2 = (scrollLeft / width) * 100;

            scrollBar.style.width = width2 + '%';
        }
        if (event.keyCode === 39) {     
            console.log(width)
  
            // const scrollLeft = gallery.scrollLeft + event.deltaY;

            // const width = gallery.scrollWidth - gallery.clientWidth;
            // const scrolled = (scrollLeft / width) * 100;
            width += 1
            scrollBar.style.width = width + '%';
            console.log(width)
        }
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
                onKeyDown={ (event) => handleKeyDown(event)}
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