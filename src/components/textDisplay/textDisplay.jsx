import PropTypes from 'prop-types'

import './textDisplay.scss'

function TextDisplay({ title, paragraphs, skills }) {

    return(
        <div className='contentToDisplay'>
            <h2>{title}</h2>
            {paragraphs.map((content, index) => (
                <p key={index + 'paragraph'}>{content}</p>
            ))}
            <ul>
                {skills.map((content, index) => (
                <li key={index + 'skill'}>{content}</li>
                ))}
            </ul>
        </div>
    )
}

export default TextDisplay

TextDisplay.propTypes  = {
    title: PropTypes.string,
    paragraphs: PropTypes.array,
    skills: PropTypes.array
  }