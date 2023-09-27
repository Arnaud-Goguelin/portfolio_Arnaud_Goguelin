import GooMenu from '../../components/gooMenu/gooMenu';
import Form from '../../components/form/form';

import './contactPage.scss'

function ContactPage() {

    return (
        <div className='contactPage'>

            <h2>Contact</h2>

            <div className='contactPage__content'>

                <div className='contactPage__content__menu'>
                    <h3>Réseaux Sociaux</h3>
                    <GooMenu />
                </div>

                <div className='contactPage__content__form'>
                    <h3>Ecrivez-moi</h3>
                    <Form />
                </div>
                
            </div>

        </div>
    )
}

export default ContactPage
