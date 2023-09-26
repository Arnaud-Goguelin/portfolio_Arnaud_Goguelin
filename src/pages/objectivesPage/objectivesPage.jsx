import { useRef, useState, useEffect } from 'react'

import objectivesDatas from '../../data/objectivesDatas.json'

import TextDisplay from '../../components/textDisplay/textDisplay'
import FilterButton from '../../components/filterButton/filterButton'
import { filterThings } from '../../utils/filterFucttion/filterFunction'

import './objectivesPage.scss'


function ObjectivesPage() {

    const specializations = [ 'Front-end', 'Back-end']
    const buttonsContainer = useRef(null)
    const [ objectivesFiltered, setObjectivesFiltered ] = useState([])  

    return(

        <section className='objectivesPage'>

            <h2>{'Objectifs d\'apprentissage'}</h2>

            <div 
                className='objectivesPage__buttonContainer'
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

             {/* <div className='objectivesPage__specializationContent'>
                <h3>Back-End</h3>
                {
                    backEndObjectives.map(data => (
                        <TextDisplay
                            key={data.id}
                            titleLevel={4}
                            title={data.title}
                            paragraphs={data.paragraphs}
                            lists={data.objectives} 
                            listRef={(element) => (listRef.current[data.id] = element)}
                            handleClick={handleClick}
                            customHeight={customHeight}
                        />
                    ))
                }
            </div> */}

            {/* <div className='objectivesPage__specializationContent'>
                <h3>Front-End</h3>
                {
                    frontEndObjectives.map(data => (
                        <TextDisplay
                            key={data.id}
                            titleLevel={4}
                            title={data.title}
                            paragraphs={data.paragraphs}
                            lists={data.objectives}
                            listRef={listRef}
                            handleClick={() => (setIsOpen(!isOpen))}
                            customHeight={customHeight} 
                        />
                    ))
                }
            </div> */}

            

        </section>
    )
}

export default ObjectivesPage