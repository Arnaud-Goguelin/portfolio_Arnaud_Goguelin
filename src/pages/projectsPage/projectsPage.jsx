import { useRef } from 'react'

import './projectsPage.scss'

import projectsData from '../../data/projectsDatas.json'

import FilterButton from '../../components/filterButton/filterButton'
import ProjectCard from '../../components/projectCard/projectCard'

function ProjectsPage() {

    const buttonsContainer = useRef(null)
    const scrollBar = useRef(null)

    
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

    function handleScroll() {
        const scrollBar = scrollBar.current
        console.log(scrollBar)
        var quantityOfScroll = document.body.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (quantityOfScroll / height) * 100;
        scrollBar.style.width = scrolled +'%';
    }

    return (
        <section 
            className='projectsPage'
            onScroll={handleScroll}
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
                    ref={scrollBar}
                ></div>
            </div>
        </section>
    )

//     <nav class="menu">
//   <input type="checkbox" href="#" class="menu-open" name="menu-open" id="menu-open"/>
//   <label class="menu-open-button" for="menu-open">
//     <span class="hamburger hamburger-1"></span>
//     <span class="hamburger hamburger-2"></span>
//     <span class="hamburger hamburger-3"></span>
//   </label>
  
//   <a href="#" class="menu-item"> <i class="fa fa-bar-chart"></i> </a>
//   <a href="#" class="menu-item"> <i class="fa fa-plus"></i> </a>
//   <a href="#" class="menu-item"> <i class="fa fa-heart"></i> </a>
//   <a href="#" class="menu-item"> <i class="fa fa-envelope"></i> </a>
//   <a href="#" class="menu-item"> <i class="fa fa-cog"></i> </a>
//   <a href="#" class="menu-item"> <i class="fa fa-ellipsis-h"></i> </a>
  
// </nav>

}

export default ProjectsPage