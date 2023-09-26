import './timeLine.scss'

import TextDisplay from '../../components/textDisplay/textDisplay'

import objectivesDatas from '../../data/objectivesDatas.json'


function TimeLine() {

    let filteredObjectives
    function filterObjectives(choosenSpecialization) {
        filteredObjectives = objectivesDatas.filter(objective => objective.specialization === choosenSpecialization)
        return filteredObjectives
    }

    const frontEndObjectives = filterObjectives('front-end')
    const backEndObjectives = filterObjectives('back-end')

    return (
        <div className="timeline">
        <div className="container left">
          <div className="content">
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
        </div>
        <div className="container right">
          <div className="content">
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
      </div> 
    )
}

export default TimeLine