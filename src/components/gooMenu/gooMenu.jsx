import { useRef } from 'react'

import './gooMenu.scss'

function GooMenu() {

    const gooBox = useRef(null)

    function handleClick(event) {
        event.preventDefault();
        if(gooBox.current.classList.contains('active')) {
            gooBox.current.classList.remove('active')
        } else {
            gooBox.current.classList.add('active')
        }
    }

    return (

            <div className="goo_box" ref={gooBox} onClick={(event) => handleClick(event)}>
                
                <div className="goo_item goo-click">
                    <div className="inner">+</div>
                </div>
                <div className="goo_item goo-01">
                    <div className="inner">1</div>
                </div>
                <div className="goo_item goo-02">
                    <div className="inner">2</div>
                </div>

            </div>

    )
}

export default GooMenu