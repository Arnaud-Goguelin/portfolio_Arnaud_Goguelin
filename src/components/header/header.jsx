import './header.scss'

import navDatas from '../../data/navDatas.json'
import NavLink from '../navLink/navLink'

console.log(navDatas)

function Header() {

    return(
        <header className='header'>
            <nav >
            {
                navDatas.map((data) => 
                    <NavLink 
                        key={`${navDatas.indexOf(data)} - ${data.title}`}
                        title={data.title}
                        imageName={data.imageName}
                    />
                )
            }
            </nav>
        </header>
    )
}

export default Header