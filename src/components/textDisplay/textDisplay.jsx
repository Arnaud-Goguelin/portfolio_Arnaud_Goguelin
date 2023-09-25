import PropTypes from 'prop-types'

import './textDisplay.scss'

function TextDisplay({ titleLevel, title, paragraphs, lists }) {

    //Création d'un niveau de titre adaptable
    const Title = `h${titleLevel}`;

    return(
        <div className='contentToDisplay'>
            <Title>{title}</Title>
            {paragraphs.map((content, index) => (
                <p key={index + 'paragraph'}>{content}</p>
            ))}
            <ul>
                {lists.map((content, index) => (
                <li key={index + 'skill'}>{content}</li>
                ))}
            </ul>
        </div>
    )
}

export default TextDisplay

TextDisplay.propTypes  = {
    titleLevel: PropTypes.number,
    title: PropTypes.string,
    paragraphs: PropTypes.array,
    lists: PropTypes.array
  }