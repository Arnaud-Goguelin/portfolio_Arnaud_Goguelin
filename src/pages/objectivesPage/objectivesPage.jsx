
import objectivesDatas from '../../data/objectivesDatas.json'

import TextDisplay from '../../components/textDisplay/textDisplay'
import TimeLine from '../../components/timeLine/timeLine'

import './objectivesPage.scss'


function objectivesPage() {

    let filteredObjectives
    function filterObjectives(choosenSpecialization) {
        filteredObjectives = objectivesDatas.filter(objective => objective.specialization === choosenSpecialization)
        return filteredObjectives
    }

    const frontEndObjectives = filterObjectives('front-end')
    const backEndObjectives = filterObjectives('back-end')

    return(

        <section className='objectivesPage'>

            <h2>{'Objectifs d\'apprentissage'}</h2>

            <div className='objectivesPage__globalContent'>

             <div className='objectivesPage__specializationContent'>
                <h3>Back-End</h3>
                {
                    backEndObjectives.map(data => (
                        <TextDisplay
                            key={data.id}
                            titleLevel={4}
                            title={data.title}
                            paragraphs={data.paragraphs}
                            lists={data.objectives} 
                        />
                    ))
                }
            </div>

            <div className='objectivesPage__specializationContent'>
                <h3>Front-End</h3>
                {
                    frontEndObjectives.map(data => (
                        <TextDisplay
                            key={data.id}
                            titleLevel={4}
                            title={data.title}
                            paragraphs={data.paragraphs}
                            lists={data.objectives} 
                        />
                    ))
                }
            </div>

            </div>

        </section>

    )

}

export default objectivesPage