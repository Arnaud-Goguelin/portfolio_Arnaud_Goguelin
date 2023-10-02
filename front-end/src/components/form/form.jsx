import { useRef } from 'react'

import { apiRoutes } from '../../utils/constants';

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

        const answerAPIPostMessage = await fetch(apiRoutes.postMessage, {
            method: 'POST',
            body: newMessage,
        });


        if (answerAPIPostMessage.ok === true) {
            okMessage.current.style.display = 'inline'
            form.current.reset()
        } else {
            errorMessage.current.style.display = 'inline'
        }

    }

    return (
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
                        placeholder={'Vous pouvez écrire votre nom ici.'}
                        required
                    />
                </div>
                <div className='oneInputNameContainer'>
                    <label htmlFor='lastname'>Prénom</label>
                    <input
                        id='lastname'
                        name='lastname'
                        type='text'
                        placeholder={'Vous pouvez écrire votre prénom ici.'}
                    />
                </div>
            </div>

            <label htmlFor='email'>Email</label>
            <input
                id='email'
                type='email'
                name='email'
                placeholder={'exemple@webservices.com'}
                required
            />

            <label htmlFor='message'>Message</label>
            <textarea
                id='message'
                type='text'
                name='message'
                placeholder={'Vous pouvez écrire votre message ici. '}
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