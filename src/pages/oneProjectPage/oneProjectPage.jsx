import { useParams, Navigate, Link } from 'react-router-dom';

import projectsData from '../../data/projectsDatas.json'


import './oneProjectPage.scss'

function OneProjectPage() {

    const { id } = useParams()

    if (projectsData) {
        const project = projectsData.find(project => project.id === id)
        
        if (project !== undefined) {
            return (
                <section className='oneProjectPage'>

                    <img className='oneProjectPage__projectImage' src={project.imageURL} alt="" />

                    <div className='oneProjectPage__description'>
                        <h3>{project.title}</h3>
                        <p className='staticContent'>Compétences acquises:</p>
                        <ul>
                            {project.skills.map(skill => (
                                <li key={`${project.id} - skill n°${project.skills.indexOf(skill)}`}>{skill}</li>
                            ))
                            }
                        </ul>
                        <p className='staticContent'>Difficultées rencontrées:</p>
                        <p>{project.difficulties}</p>
                        <p className='staticContent'>Solutions apportées</p>
                        <p>{project.solutions}</p>
                        <Link to={project.gitHubLink} target='_blank'><img src="../../public/assets/github.png" alt="" /></Link>
                        <Link to={project.deployedApp} target='_blank'><img src="../../public/assets/link.png" alt="" /></Link>
                    </div>

                    <Link to='/Projets' className='oneProjectPage__returnLink'><span className='arrow'></span>Retour à la Galerie</Link>
                </section>
            )
        } else {
            return <Navigate to='/page non trouvée' />
        }
    }
}

export default OneProjectPage