import PropTypes from 'prop-types'

import './filterButton.scss'

function FilterButton ({content, onClick}) {

    return (
        <button 
            className='filterButton'
            onClick={onClick}
        >
            {content}
        </button>
    )
}

export default FilterButton

FilterButton.propTypes  = {
    content: PropTypes.string,
    onClick: PropTypes.func
}