import { useRef, useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import './textDisplay.scss'

function TextDisplay({ titleLevel, title, paragraphs, lists, page }) {

    //Création d'un niveau de titre adaptable
    const Title = `h${titleLevel}`;

    const listsRef = useRef(null)
    const [ customHeight, setCustonHeight ] = useState(0)

    useEffect(() => {
        if (listsRef.current) {
            setCustonHeight(listsRef.current.scrollHeight);
        }
    }, [lists]);

    return(
        <div 
            className='contentToDisplay'
        >
            <Title>{title}</Title>

            {!paragraphs ? null
            :
            paragraphs.map((content, index) => (
                <p key={'paragraph n°' + index}>{content}</p>
            ))}

                <ul 
                ref={listsRef}
                style={ page === 'Profil' ? {height: 'auto' } : {height: customHeight }}
                >
                    {!lists ? null
                    :
                    lists.map((content, index) => (
                    <li key={'skill n°' + index}>{content}</li>
                    ))
                    }
                </ul>

        </div>
    )
}

export default TextDisplay

TextDisplay.propTypes  = {
    titleLevel: PropTypes.number,
    title: PropTypes.string,
    paragraphs: PropTypes.array,
    lists: PropTypes.array,
    page: PropTypes.string
  }
