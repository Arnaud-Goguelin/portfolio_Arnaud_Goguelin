import './landingPage.scss'

function LandingPage() {

    return (
        <section className='landingPage'>

            <div className='landingPage__gooTitle'>
                <h1><span>A</span>RNAUD <span>G</span>OGUELIN <br /><span><span>D</span>EVELOPPEUR <span>W</span>EB</span></h1>
            </div>    
            
            <div className='landingPage__content'>
            <p className='landingPage__bienvenue'>Bienvenue sur mon <strong>portfolio</strong>.</p>
            
            <p>Je suis un <strong>développeur</strong> Javascript, codant avec<strong> React</strong> et <strong>Node.JS</strong>.</p> 
            
            <p> Particulièrement intéressé par le <strong>back-end</strong>, je souhaite évoluer vers cette spécialisation.</p>
            
            <p>Je vous invite à visiter mon portfolio, à découvrir plus en détails en mon profil, les projets que j'ai codé et mes objectifs d'apprentissage!</p>
            </div>
        </section>
    )
}

export default LandingPage