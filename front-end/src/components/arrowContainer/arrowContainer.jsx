import PropTypes from 'prop-types'

import './arrowContainer.scss'

function ArrowContainer ({text}) {

    return (
        <div className='arrowContainer'>
            <div className='arrow left'></div>
            <p>{text}</p>
            <div className='arrow right'></div>
        </div>
    )
}

export default ArrowContainer

ArrowContainer.propTypes  = {
    text: PropTypes.string,
  }