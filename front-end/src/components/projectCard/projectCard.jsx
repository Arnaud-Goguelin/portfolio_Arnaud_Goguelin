import { useRef } from 'react'
import { Link } from 'react-router-dom'

import { appRoutes } from '../../utils/constants';

import PropTypes from 'prop-types'

import './projectCard.scss'

function Card({title, imageURL, id}) {

    // On aurait pu aussi appliquer du style inline àla propriété display,
    // dont la valeur aurait été définie en fonction d'un booléen stocké,
    // dans un useState, mais cela aurait engendré un nouveau 'render' à chaque
    // survol ou sortie du curseur.
    
    const textHovered = useRef(null)
    const textStandard = useRef(null)

    function handleMouseHover() {
        const secondFigcaption = textHovered.current
        const firstFigcaption = textStandard.current
        firstFigcaption.style.display='none'
        secondFigcaption.style.display='flex'
    }

    function handleMouseLeave() {
        const secondFigcaption = textHovered.current
        const firstFigcaption = textStandard.current
        firstFigcaption.style.display='flex'
        secondFigcaption.style.display='none'
    }

    return(
        <figure 
        className='projectGallery__card'
        onMouseOver={handleMouseHover}
        onMouseLeave={handleMouseLeave}
        >
            <Link to={`${appRoutes.projects}/${id}`} >
                <img className='card__image' src={`${imageURL}`} alt={`${title}`}/>
                <figcaption className='card__text standard' ref={textStandard}><span>{title}</span></figcaption>
                <figcaption className='card__text hovered' ref={textHovered}><span>Pour en savoir plus</span></figcaption>
            </Link>
        </figure>
    )
}

export default Card

Card.propTypes  = {
    title: PropTypes.string,
    imageURL: PropTypes.string,
    id: PropTypes.string,
}