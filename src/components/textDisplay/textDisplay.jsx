import PropTypes from 'prop-types'

import './textDisplay.scss'

function TextDisplay({ titleLevel, title, paragraphs, lists, listRef, handleClick, customHeight }) {

    //Création d'un niveau de titre adaptable
    const Title = `h${titleLevel}`;

    return(
        <div 
            className='contentToDisplay'
            onClick= {handleClick}
        >
            <Title>{title}</Title>
            {paragraphs.map((content, index) => (
                <p key={index + 'paragraph'}>{content}</p>
            ))}
            <div 
                ref={listRef}
                style={{ height: customHeight }}
                className='contentToDisplay__dropdown'
            >
                <ul>
                    {lists.map((content, index) => (
                    <li key={index + 'skill'}>{content}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TextDisplay

TextDisplay.propTypes  = {
    titleLevel: PropTypes.number,
    title: PropTypes.string,
    paragraphs: PropTypes.array,
    lists: PropTypes.array,
    listRefs: PropTypes.object,
    handleClick: PropTypes.func,
    customHeight: PropTypes.number
  }