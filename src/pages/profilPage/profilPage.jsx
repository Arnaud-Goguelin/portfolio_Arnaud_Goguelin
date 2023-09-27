import { useRef, useState, useEffect } from 'react'

import TextDisplay from '../../components/textDisplay/textDisplay'
import ArrowContainer from '../../components/arrowContainer/arrowContainer'

import profilDatas from '../../data/profilDatas.json'
import './profilPage.scss'

function ProfilPage() {

    const mobileContent = useRef(null)

    const [distance, setDistance] = useState(0);
    const [position, setPosition] = useState(0)

    function calculDistance() {
        const contentToMove = mobileContent.current
        const rect = contentToMove.getBoundingClientRect();
        setDistance(rect.left)}

    useEffect(()=>{
            calculDistance()
    },[]) 

    function handleMouseMouve(event) {
        const contentToMove = mobileContent.current
        const contentMeasured = contentToMove.childNodes[0].scrollWidth
        contentToMove.style.left = event.pageX - Math.abs(distance) - contentMeasured + 'px';
    }

    function handleKeyDown(event) {
        const contentToMove = mobileContent.current;
        const rect = contentToMove.getBoundingClientRect();
        setPosition(rect.left)
        //Ajout ou retrait de 20 pts à position lors de l'utilisation du clavier pour un défilement plus rapide
        if (event.keyCode === 37) {
            setPosition(position + 20)
            contentToMove.style.left = position + 'px'
        }
        if (event.keyCode === 39) {
            setPosition(position - 20)
            contentToMove.style.left = position + 'px'
        }
    }


    return (
        <section 
            className='profilPage'
            onMouseMove={(event) => handleMouseMouve(event)}
            onKeyDown={ (event) => handleKeyDown(event)}
            tabIndex={0}
        >

        <ArrowContainer
            text='Défilement aux mouvements de la souris ou au clavier'
        />
            
            <div 
                className='profilPage__mobile' 
                ref={mobileContent}
            >
                {profilDatas.map(data => (
                    <TextDisplay 
                        key={data.id}
                        titleLevel={2}
                        title={data.title}
                        paragraphs={data.paragraphs}
                        lists={data.skills}
                    />
                ))}
            </div>

        </section>
    )
}

export default ProfilPage

// Ce composant React génère deux TextDisplay. Je souhaite apporter des modifications SCSS au premier composant seulement, et ce directement dans le code SCSS.