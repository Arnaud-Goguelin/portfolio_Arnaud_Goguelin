import { Link } from 'react-router-dom'

import { appRoutes } from '../../utils/constants';

import PropTypes from 'prop-types'

import './projectCard.scss'

function Card({title, imageURL, id}) {

    return(
        <figure className='projectGallery__card' >
            <Link to={`${appRoutes.projects}/${id}`} >
                <img className='card__image' src={`${imageURL}`} alt={`${title}`}/>
                <figcaption className='card__text'>{title}</figcaption>
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