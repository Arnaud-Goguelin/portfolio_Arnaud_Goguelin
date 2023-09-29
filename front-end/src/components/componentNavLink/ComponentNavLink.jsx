import { useRef } from 'react';
import PropTypes from 'prop-types'
import './ComponentNavLink.scss'

import { NavLink } from 'react-router-dom'

function ComponentNavLink({title, imageName}) {

  const linkContainer = useRef(null)

    function handleMouseMove(event) {
      const linkToSelected = linkContainer.current

        // calcul des coordonnées et de la taille du container qui entoure le lien
        const rect = linkToSelected.getBoundingClientRect();
        // calcul la moitié de la largeur du container   
        const h = rect.width / 2;

        // calcul des coordonnées du curseur par rapport au centre du container
        // le container doit être un cercle pour que ce calcul fonctionne correctement
        const x = event.clientX - rect.left - h;
        const y = event.clientY - rect.top - h;
    
         // calcul de la distance entre le curseur et le centre du container
        const r1 = Math.sqrt(x*x+y*y);
        // calcul d'une nouvelle distance en fonction de r1 (effet d'élasticité)
        const r2 = (1 - (r1 / h)) * r1;
    
        // calcul de l'angle entre le centre du container et le curseur
        const angle = Math.atan2(y, x);
        // calcul des décalages de translation (tx et ty) en fonction de l'angle et de r2
        const tx = Math.round(Math.cos(angle) * r2 * 100) / 100;
        const ty = Math.round(Math.sin(angle) * r2 * 100) / 100;
        
        // calcul de l'opacité en fonction de r2 (effet d'opacité)
        const op = (r2 / r1) + 0.25;
    
        // On applique les valeurs calculées au style CSS
        linkToSelected.style.setProperty('--tx', `${tx}px`);
        linkToSelected.style.setProperty('--ty', `${ty}px`);
        linkToSelected.style.setProperty('--opacity', `${op}`);
    }

    function handleMouseLeave() {
      const linkToSelected = linkContainer.current
      // Remise à 0 des coordonnées et opacités
      linkToSelected.style.setProperty('--tx', '0px');
      linkToSelected.style.setProperty('--ty', '0px');
      linkToSelected.style.setProperty('--opacity', `${0.25}`);
    }

    return (
      <div 
        ref = {linkContainer} 
        className='nav__linkContainer'
        onMouseMove={(event) => handleMouseMove(event)}
        onMouseLeave={() => handleMouseLeave()}
      >
        <NavLink 
            to={`/${title === 'Accueil' ? '' : title}`}
            aria-label={`Aller à la page ${title}`}
            className={'nav__navLink'}

        >
            <img src={`../src/assets/${imageName}`} alt='' /> <span>{title}</span>
        </NavLink>
      </div>
    )
}

export default ComponentNavLink

ComponentNavLink.propTypes  = {
  title: PropTypes.string,
  imageName: PropTypes.string
}