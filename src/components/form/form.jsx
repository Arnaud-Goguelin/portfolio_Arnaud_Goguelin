import './form.scss'

function Form() {
    return(
        <form action="">
            
            <div>
                <label htmlFor='firstname'></label>
                <input id='firstname' type='name' defaultValue={'Votre nom'}/>

                <label htmlFor='lastname'></label>
                <input id='lastname' type='name' defaultValue={'Votre prénom'}/>
            </div>

            <label htmlFor='email'></label>
            <input id='email' type='email' defaultValue={'Votre email'} />

            <label htmlFor='message'></label>
            <textarea id='message' type='text' defaultValue={'Votre message'}/>

            <button>Envoyer</button>
        </form>
    )
}

export default Form