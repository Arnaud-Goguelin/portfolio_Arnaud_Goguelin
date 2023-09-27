import './form.scss'

import ComponentButton from '../componentButton/componentButton'

function Form() {

    // async function sendNewWork() {

    //     //Création du body de la requête fetch sour la forme d'un objet FormData
    //     const newWorkForm = document.querySelector("#form__newWork");
    //     const newWorkBody = new FormData(newWorkForm);
    
    //     //Envoie du nouveau work
    //     const answerAPIPostNewWork = await fetch ("http://localhost:5678/api/works", {
    //         method: "POST",
    //         headers: {
    //             "Authorization" : `Bearer ${token}`,
    //         },
    //         body: newWorkBody,
    //     });
        
    //     //Si la réponse est ok, insertion du nouveau work dans le tableau et MAJ de l'affichage
    //     if (answerAPIPostNewWork.ok) {
    //         /*A ce stade la réponse est à parser en objet JS au format JSON. Elle deviendra alors une promesse.
    //         *Il faut attendre qu'elle soit résolue avant de l'utiliser comme objet à ajouter à notre tableau "works",
    //         * d'où l'utilisation de la méthode .then.
    //         */
    //         answerAPIPostNewWork.json().then(newWork  => {
    //         works.push(newWork);
    //         createWorks(works);
    //         closeAddWorkModal();
    //         });
    //     };
    // };



    function handleClick() {
        console.log('test')
    }

    return(
        <form action="">
            
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
                onClick={handleClick}
            />
        </form>
    )
}

export default Form