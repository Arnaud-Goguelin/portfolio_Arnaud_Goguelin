import PropTypes from 'prop-types'

import './componentButton.scss'

function ComponentButton ({content, onClick}) {

    return (
        <button 
            onClick={onClick}
        >
            {content}
        </button>
    )
}

export default ComponentButton

ComponentButton.propTypes  = {
    content: PropTypes.string,
    onClick: PropTypes.func
}