import './header.scss'

import navDatas from '../../data/navDatas.json'
import ComponentNavLink from '../componentNavLink/componentNavLink'

function Header() {

    return(
        <header className='header'>
            <nav className='header__nav'>
            {
                navDatas.map((data) => 
                    <ComponentNavLink 
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