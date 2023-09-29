import { useParams, Navigate, Link } from 'react-router-dom';

import projectsData from '../../data/projectsDatas.json'
import gitHubLogo from '../../assets/github.webp'
import linkImage from '../../assets/link.webp'
import backArrow from '../../assets/accueil.webp'



import './oneProjectPage.scss'

function OneProjectPage() {

    const { id } = useParams()

    if (projectsData) {
        const project = projectsData.find(project => project.id === id)
        
        if (project !== undefined) {
            return (
                <section className='oneProjectPage'>
                    
                    <Link to='/Projets' className='oneProjectPage__returnLink'><img src={backArrow} className='arrow' alt="" /><span className='text'>Retour à la Galerie</span></Link>

                    <div className='oneProjectPage__content'>
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
                            <Link to={project.gitHubLink} target='_blank'><img src={gitHubLogo} alt="" /></Link>
                            <Link to={project.deployedApp} target='_blank'><img src={linkImage} alt="" /></Link>
                        </div>
                    </div>

                </section>
            )
        } else {
            return <Navigate to='/page non trouvée' />
        }
    }
}

export default OneProjectPage