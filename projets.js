const projetsEcole = document.getElementById('projets-blocks-ecole');
const projetsEntreprise = document.getElementById('projets-blocks-entreprise');
const projetsPersonnel = document.getElementById('projets-blocks-personnel');
const boutonEcole = document.getElementById('bouton-ecole');
const boutonEntreprise = document.getElementById('bouton-entreprise');
const boutonPersonnel = document.getElementById('bouton-personnel');


function showEcole() {
    projetsEcole.style.display = 'flex';
    projetsEntreprise.style.display = 'none';
    projetsPersonnel.style.display = 'none';
    boutonEcole.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    boutonEntreprise.style.backgroundColor = 'transparent';
    boutonPersonnel.style.backgroundColor = 'transparent';
}

function showEntreprise() {
    projetsEntreprise.style.display = 'flex';
    projetsEcole.style.display = 'none';
    projetsPersonnel.style.display = 'none';
    boutonEntreprise.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    boutonEcole.style.backgroundColor = 'transparent';
    boutonPersonnel.style.backgroundColor = 'transparent';
}

function showPersonnel() {
    projetsPersonnel.style.display = 'flex';
    projetsEcole.style.display = 'none';
    projetsEntreprise.style.display = 'none';
    boutonPersonnel.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    boutonEcole.style.backgroundColor = 'transparent';
    boutonEntreprise.style.backgroundColor = 'transparent';
}

/////////////////////////MODAL ECOLE//////////////////////////////////////////
function openProjet1Ecole() {
    const projet1Ecole = document.getElementById('projet-1-ecole');
    projet1Ecole.showModal();
}
function closeProjet1Ecole() {
    const projet1Ecole = document.getElementById('projet-1-ecole');
    projet1Ecole.close();
}



function openProjet2Ecole() {
    const projet1Ecole = document.getElementById('projet-2-ecole');
    projet1Ecole.showModal();
}
function closeProjet2Ecole() {
    const projet2Ecole = document.getElementById('projet-2-ecole');
    projet2Ecole.close();
}




function openProjet3Ecole() {
    const projet1Ecole = document.getElementById('projet-3-ecole');
    projet1Ecole.showModal();
}
function closeProjet3Ecole() {
    const projet3Ecole = document.getElementById('projet-3-ecole');
    projet3Ecole.close();
}




/////////////////////////MODAL ENTREPRISE//////////////////////////////////////////


function openProjet1Entreprise() {
    const projet1Entreprise = document.getElementById('projet-1-entreprise');
    projet1Entreprise.showModal();
}
function closeProjet1Entreprise() {
    const projet1Entreprise = document.getElementById('projet-1-entreprise');
    projet1Entreprise.close();
}



function openProjet2Entreprise() {
    const projet1Entreprise = document.getElementById('projet-2-entreprise');
    projet1Entreprise.showModal();
}
function closeProjet2Entreprise() {
    const projet2Entreprise = document.getElementById('projet-2-entreprise');
    projet2Entreprise.close();
}




function openProjet3Entreprise() {
    const projet1Entreprise = document.getElementById('projet-3-entreprise');
    projet1Entreprise.showModal();
}
function closeProjet3Entreprise() {
    const projet3Entreprise = document.getElementById('projet-3-entreprise');
    projet3Entreprise.close();
}




/////////////////////////MODAL PERSONNEL//////////////////////////////////////////


function openProjet1Personnel() {
    const projet1Personnel = document.getElementById('projet-1-personnel');
    projet1Personnel.showModal();
}
function closeProjet1Personnel() {
    const projet1Personnel = document.getElementById('projet-1-personnel');
    projet1Personnel.close();
}



function openProjet2Personnel() {
    const projet1Personnel = document.getElementById('projet-2-personnel');
    projet1Personnel.showModal();
}
function closeProjet2Personnel() {
    const projet2Personnel = document.getElementById('projet-2-personnel');
    projet2Personnel.close();
}




function openProjet3Personnel() {
    const projet1Personnel = document.getElementById('projet-3-personnel');
    projet1Personnel.showModal();
}
function closeProjet3Personnel() {
    const projet3Personnel = document.getElementById('projet-3-personnel');
    projet3Personnel.close();
}






/////////////////////////VEILLE//////////////////////////////////////////


function openVeille1() {
    const veille1 = document.getElementById('veille-1');
    veille1.showModal();
}
function closeVeille1() {
    const veille1 = document.getElementById('veille-1');
    veille1.close();
}



function openVeille2() {
    const veille2 = document.getElementById('veille-2');
    veille2.showModal();
}
function closeVeille2() {
    const veille2 = document.getElementById('veille-2');
    veille2.close();
}



function openVeille3() {
    const veille3 = document.getElementById('veille-3');
    veille3.showModal();
}
function closeVeille3() {
    const veille3 = document.getElementById('veille-3');
    veille3.close();
}