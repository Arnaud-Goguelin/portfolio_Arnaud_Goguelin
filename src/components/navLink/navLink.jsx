import './navLink.scss'

import { NavLink } from 'react-router-dom'

function componentNavLink({title, imageName}) {
    return (
        <NavLink 
            to={`/${title === 'Accueil' ? '' : title}`}
            aria-label={`Aller à la page ${title}`}
            className={'nav__navLink'}
        >
            <img src={`/assets/${imageName}`} alt='' /> {title}
        </NavLink>
    )
}

export default componentNavLink