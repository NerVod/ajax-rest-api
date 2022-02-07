window.addEventListener('DOMContentLoaded', (event) => {

const kyButton = document.getElementById('apiky');
const kyAffichage = document.getElementById('messageApiKy')

    const appelApiKy = async () => {
        let donnees = {};
        try {
            let perso = parseInt(Math.random()*80);
            console.log('perso : ', perso )
             const response = await fetch(`https://swapi.dev/api/people/${perso}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',

                }
            });
        donnees = await response.json();

        } catch (error) {

            console.log('erreur chemin catch : ', error);
            
        }

        // const json = await response.json();
        console.log(donnees)
        kyAffichage.innerText = `Nom : ${donnees.name} Date de naissance : ${donnees.birth_year}`
        
    } ;

    kyButton.addEventListener('click', appelApiKy)








})