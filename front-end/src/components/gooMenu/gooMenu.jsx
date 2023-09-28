import { useRef } from 'react'
import { Link } from 'react-router-dom'

import './gooMenu.scss'
import menu from '../../assets/menu.png'
import gitHubLogo from '../../assets/github.png'
import linkedInLogo from '../../assets/linkedin.png'
import {linkToLinkedIn , linkToGitHub} from '../../utils/constants'


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

            <div className="goo_box" ref={gooBox}>
                
                <div 
                    className="goo_item goo-click"
                    onClick={(event) => handleClick(event)}
                >
                    <div className="inner">
                    <img src={menu} alt='' />
                </div>
                </div>
                <div className="goo_item goo-01">
                    <Link className='inner' to={linkToGitHub} target='_blank'><img src={gitHubLogo} alt="" /></Link>
                </div>
                <div className="goo_item goo-02">
                    <Link className='inner' to={linkToLinkedIn} target='_blank'><img src={linkedInLogo} alt="" /></Link>
                </div>

            </div>

    )
}

export default GooMenu