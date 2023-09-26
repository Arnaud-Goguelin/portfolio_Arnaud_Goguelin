import { useRef, useState, useEffect } from 'react'

import objectivesDatas from '../../data/objectivesDatas.json'

import TextDisplay from '../../components/textDisplay/textDisplay'
import FilterButton from '../../components/filterButton/filterButton'
import { filterThings } from '../../utils/filter'
import { extractDatas } from '../../utils/extractDatas'

import './objectivesPage.scss'


function ObjectivesPage() {

    // Création d'un tableau de valeur pour générer les boutons filtres.
    const specializationsWithDuplicates = extractDatas(objectivesDatas, 'specialization')
    const specializations = Array.from(new Set(specializationsWithDuplicates))

    // Création des ref et variables nécessaires aux filtres
    const buttonsContainer = useRef(null)
    const [ objectivesFiltered, setObjectivesFiltered ] = useState([])  

    return(

        <section className='objectivesPage'>

            <h2>{'Objectifs d\'apprentissage'}</h2>

            <div 
                className='objectivesPage__buttonsContainer'
                ref={buttonsContainer}
            >
                {
                    specializations.map(specialization => (
                        <FilterButton 
                            key={specializations.indexOf(specialization)}
                            content={specialization}
                            onClick={event => filterThings(event, buttonsContainer, objectivesDatas, setObjectivesFiltered, 'specialization')}
                        />
                    ))
                }
            </div>

            <div className='objectivesPage__content'>
                {
                    objectivesFiltered.length === 0 ?
                    <p>Cliquez sur une spécialisation</p>
                    :
                    objectivesFiltered.map(objective => (
                        <TextDisplay
                        key={objective.id}
                        titleLevel={4}
                        title={objective.title}
                        paragraphs={objective.paragraphs}
                        lists={objective.objectives} 
                        // listRef={(element) => (listRef.current[data.id] = element)}
                        // handleClick={handleClick}
                        // customHeight={customHeight}
                        />
                    ))
                }
            </div>

        </section>
    )
}

export default ObjectivesPage