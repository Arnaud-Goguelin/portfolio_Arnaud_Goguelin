import { useRef, useEffect } from 'react';

import './landingPage.scss'

function LandingPage() {

    const container = useRef(null)

    function addCSSClass() {
        const containerToSelected = container.current;
        containerToSelected.classList.add('toDisplay')
    }

    useEffect(()=> {
        addCSSClass()
    }, [])

    return (
        <>
        <div className='landingPage__container'>
            <div className='toBeCrossed'></div>
            <div 
                ref = {container}
                className='landingPage__content'
            >
                <h1>Arnaud Goguelin | Développeur web</h1>
                <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. !</p>
            </div>
        </div>
        </>
    )
}

export default LandingPage