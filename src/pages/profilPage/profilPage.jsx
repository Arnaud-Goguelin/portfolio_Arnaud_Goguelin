import { useRef, useState } from 'react'
import TextDisplay from '../../components/textDisplay/textDisplay'

import profilDatas from '../../data/profilDatas.json'
import './profilPage.scss'

function ProfilPage() {

    const mobileContent = useRef(null)

    const [distance, setDistance] = useState(0);

    
    function calculDistance() {
        window.onload = () => {
        const contentToMove = mobileContent.current
            const rect = contentToMove.getBoundingClientRect();
            setDistance(rect.left)
    }}
    calculDistance()

    function handleMouseMouve(event) {
        const contentToMove = mobileContent.current
        const contentMeasured = contentToMove.childNodes[0].scrollWidth
        contentToMove.style.left = event.pageX - Math.abs(distance) - contentMeasured + 'px';
    }

    return (
        <section 
        className='profilPage__displayZone'
        onMouseMove={(event) => handleMouseMouve(event)}
        >
            <div className='profilPage__mobile' ref={mobileContent}>
                {profilDatas.map(data => (
                    <TextDisplay 
                        key={data.id}
                        title={data.title}
                        paragraphs={data.paragraphs}
                        skills={data.skills}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProfilPage