import { useRef, useState } from 'react'

import objectivesDatas from '../../data/objectivesDatas.json'

import TextDisplay from '../../components/textDisplay/textDisplay'
import FilterButton from '../../components/filterButton/filterButton'
import ArrowContainer from '../../components/arrowContainer/arrowContainer'

import { handleActiveClass } from '../../utils/handleActiveClass'

import './objectivesPage.scss'


function ObjectivesPage() {

    // Création d'un tableau de valeur pour générer les boutons filtres.
    // On récupère un tableau de plusiers tableaux d'objets JS (les spécialisations et objectifs à atteindre par spécialisation)
    const arrayOfAllObjectives = objectivesDatas.map((object) => object.objectives);
    // On récupère le nom des clefs de ces objets JS (soit le nom des spécialisations), 
    // mais elles sont en doubles et encore regroupées dans des tableaux au sein d'un tableau.
    const arrayOfObjectivesKeysNames = arrayOfAllObjectives.map(object => Object.keys(object))
    // On concatène toutes les valeurs et on supprime les doublons pour obtenir
    // un seul tableau avec des 'strings' à savoir: ['Front-end', 'Back-end']
    const arrayForFilters = Array.from(new Set(arrayOfObjectivesKeysNames.reduce((acc, element) => {
        return acc.concat(element)
    })))
 
    // Création des ref et variables nécessaires aux filtres
    const buttonsContainer = useRef(null)
    const [ choosenSpecialization, setChoosenSpecializations ] = useState(null)

    // On récupère les objectifs dont le nom de la clef est égale à choosenSpecialization
    // sachant que choosenSpecialization est égale au contenu du bouton filtre.
    function getObjectives(objective) {
        const objectivesToDisplay = objectivesDatas[objectivesDatas.indexOf(objective)];
        return objectivesToDisplay.objectives[choosenSpecialization]
    }

    return(

        <section className='objectivesPage'>

            <h2>{'Objectifs d\'apprentissage'}</h2>
            <ArrowContainer
                text='Choissisez une spécialisation'
            />

            <div 
                className='objectivesPage__buttonsContainer'
                ref={buttonsContainer}
            >
                {
                    arrayForFilters.map(specialization => (
                        <FilterButton 
                            key={arrayForFilters.indexOf(specialization)}
                            content={specialization}
                            onClick={(event) => {
                                handleActiveClass(event,buttonsContainer);
                                setChoosenSpecializations(event.target.textContent);
                            }}
                        />
                    ))
                }
            </div>

            <div className='objectivesPage__content'>

                {
                    objectivesDatas.map(objective => (
                        <TextDisplay
                        key={objective.id}
                        titleLevel={4}
                        title={objective.timeLimit}
                        lists={choosenSpecialization ? getObjectives(objective) : null}
                        />
                    ))
                }
            </div>

        </section>
    )
}

export default ObjectivesPage