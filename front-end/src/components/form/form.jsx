import './form.scss'

import { useRef, useState } from 'react'

import { apiRoutes } from '../../utils/constants';

import ComponentButton from '../componentButton/componentButton'

function Form() {

    const form = useRef(null)
    const okMessage = useRef(null)
    const errorMessage = useRef(null)
    const [errorToDisplay, setErrorToDisplay] = useState('error')

    async function postMessage() {
        try {
            const newMessage = new FormData(form.current);
            const answerAPIPostMessage = await fetch (apiRoutes.postMessage, {
                method: 'POST',
                body: newMessage,
            });
            
            if (answerAPIPostMessage.ok) {
                okMessage.current.style.display = ''
            }
        } catch (error) {
            setErrorToDisplay({error})
            okMessage.current.style.display = ''
        }

    }

    return(
        <form ref={form}>
            
            <div className='AllInputsNameContainer'>
                <div className='oneInputNameContainer'>
                    <label htmlFor='firstname'>Nom</label>
                    <input id='firstname' type='name' placeholder={'ex: Pratchett'} required/>
                </div>
                <div className='oneInputNameContainer'>
                    <label htmlFor='lastname'>Prénom</label>
                    <input id='lastname' type='name' placeholder={'ex: Terry'}/>
                </div>
            </div>

            <label htmlFor='email'>Email</label>
            <input id='email' type='email' placeholder={'exemple@webservice.com'} required />

            <label htmlFor='message'>Message</label>
            <textarea id='message' type='text' placeholder={'ex : Le monde est un disque, plat, posé sur le dos de quatres gigantesques éléphants, eux-mêmes juchés sur le dos de la grande Chelys galactica : A’Tuin... '} required/>

            <ComponentButton 
                content={'Envoyer'}
                onClick={postMessage}
            />
            <p className='confirmationMessage' ref={okMessage}>Message Envoyé!</p>
            <p className='errorMessage' ref={errorMessage}> Une erreure est survenue : {errorToDisplay} </p>
        </form>
    )
}

export default Form