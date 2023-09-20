import { useRef, useState } from 'react'

import './profilPage.scss'

function ProfilPage() {

    const timeBar = useRef(null)
    const [distance, setDistance] = useState(0);
    // const profilContent = useRef(null)

    // const [measuredWidth, setMeasuredWidth] = useState(0)

    // useEffect(() => {
    //     console.log(profilContent.current)

    //     setMeasuredWidth(profilContent.current.scrollWidth);
    //   }, [profilContent]);

    //   console.log(measuredWidth)

    function calculDistance() {
        window.onload = () => {
        const timeBarToMove = timeBar.current
            const rect = timeBarToMove.getBoundingClientRect();
            setDistance(rect.left)
    }}
    calculDistance()
    console.log(distance)

    function handleMouseMouve(event) {
        const timeBarToMove = timeBar.current
        timeBarToMove.style.left = event.pageX - distance + 'px';
    }

    return (
        <section 
        className='profil__content'
        // ref={profilContent}
        onMouseMove={(event) => handleMouseMouve(event)}
        >
            <div 
                className='profil__timeBar' 
                ref={timeBar}
                // style={{ height: measuredHeight }}
            ></div>

        </section>
    )

}

export default ProfilPage