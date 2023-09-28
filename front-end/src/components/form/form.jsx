import { useRef, useState } from 'react'
import { Navigate } from 'react-router-dom';

import { apiRoutes, appRoutes } from '../../utils/constants';

import ComponentButton from '../componentButton/componentButton'
import './form.scss'

function Form() {

    const form = useRef(null)
    const okMessage = useRef(null)
    const errorMessage = useRef(null)

    async function postMessage(event) {
        event.preventDefault()

        const formCompleted = form.current
        const newMessage = new FormData(formCompleted)

        const answerAPIPostMessage = await fetch (apiRoutes.postMessage, {
            method: 'POST',
            body: newMessage,
        });

        console.log(answerAPIPostMessage)
           
        if (answerAPIPostMessage.ok === true) {
            // <Navigate to={appRoutes.contact}/>
            okMessage.current.style.display = 'inline'
        } else {
            errorMessage.current.style.display = 'inline'
        }

    }

    return(
        <form  
            ref={form}
            method='post'
            action={apiRoutes.postMessage}
            encType='multipart/form-data'
            onSubmit={event => postMessage(event)}
        >
            
            <div className='AllInputsNameContainer'>
                <div className='oneInputNameContainer'>
                    <label htmlFor='firstname'>Nom</label>
                    <input 
                        id='firstname'
                        name='firstname'
                        type='text' 
                        placeholder={'ex: Pratchett'} 
                        required
                    />
                </div>
                <div className='oneInputNameContainer'>
                    <label htmlFor='lastname'>Prénom</label>
                    <input 
                        id='lastname' 
                        name='lastname'
                        type='text' 
                        placeholder={'ex: Terry'}
                    />
                </div>
            </div>

            <label htmlFor='email'>Email</label>
            <input 
                id='email' 
                type='email' 
                name='email'
                placeholder={'leBagage@universiteDeLInvisible.dw'} 
                required 
            />

            <label htmlFor='message'>Message</label>
            <textarea 
                id='message' 
                type='text'
                name='message'
                placeholder={'ex : Le monde est un disque, plat, posé sur le dos de quatres gigantesques éléphants, eux-mêmes juchés sur le dos de la grande Chelys galactica : A’Tuin... '} 
                required
                />

            <ComponentButton 
                content={'Envoyer'}
                type="submit"
            />
            <p className='confirmationMessage' ref={okMessage}>Message Envoyé!</p>
            <p className='errorMessage' ref={errorMessage}> Une erreure est survenue.</p>
        
        </form>

    )
}

export default Form