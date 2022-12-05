const projetsEcole = document.getElementById('projets-blocks-ecole');
const projetsEntreprise = document.getElementById('projets-blocks-entreprise');
const projetsPersonnel = document.getElementById('projets-blocks-personnel');
const certif = document.getElementById('blocks-certif');
const boutonEcole = document.getElementById('bouton-ecole');
const boutonEntreprise = document.getElementById('bouton-entreprise');
const boutonPersonnel = document.getElementById('bouton-personnel');
const bouttonCertif = document.getElementById('bouton-certif');


function showEcole() {
    projetsEcole.style.display = 'flex';
    projetsEntreprise.style.display = 'none';
    projetsPersonnel.style.display = 'none';
    certif.style.display = 'none';
    boutonEcole.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    boutonEntreprise.style.backgroundColor = 'transparent';
    boutonPersonnel.style.backgroundColor = 'transparent';
}

function showEntreprise() {
    projetsEntreprise.style.display = 'flex';
    projetsEcole.style.display = 'none';
    projetsPersonnel.style.display = 'none';
    certif.style.display = 'none';
    boutonEntreprise.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    boutonEcole.style.backgroundColor = 'transparent';
    boutonPersonnel.style.backgroundColor = 'transparent';
}

function showPersonnel() {
    projetsPersonnel.style.display = 'flex';
    projetsEcole.style.display = 'none';
    projetsEntreprise.style.display = 'none';
    certif.style.display = 'none';
    boutonPersonnel.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    boutonEcole.style.backgroundColor = 'transparent';
    boutonEntreprise.style.backgroundColor = 'transparent';
}

function showCertif() {
    certif.style.display = 'flex';
    projetsEcole.style.display = 'none';
    projetsEntreprise.style.display = 'none';
    projetsPersonnel.style.display = 'none';
    boutonEcole.style.backgroundColor = 'transparent';
    boutonEntreprise.style.backgroundColor = 'transparent';
    boutonPersonnel.style.backgroundColor = 'transparent';
    bouttonCertif.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
}






























/////////////////////////CONTENU DES MODALS//////////////////////////////////////////
//Ecole 1
const choix1Ecole1 = document.getElementById('modal-choix1-ecole1');
const choix2Ecole1 = document.getElementById('modal-choix2-ecole1');
const choix3Ecole1 = document.getElementById('modal-choix3-ecole1');
const choix4Ecole1 = document.getElementById('modal-choix4-ecole1');
const choix1Ecole1Contenu = document.getElementById('modal-choix1-ecole1-contenu');
const choix2Ecole1Contenu = document.getElementById('modal-choix2-ecole1-contenu');
const choix3Ecole1Contenu = document.getElementById('modal-choix3-ecole1-contenu');
const choix4Ecole1Contenu = document.getElementById('modal-choix4-ecole1-contenu');

//Ecole 2
const choix1Ecole2 = document.getElementById('modal-choix1-ecole2');
const choix2Ecole2 = document.getElementById('modal-choix2-ecole2');
const choix3Ecole2 = document.getElementById('modal-choix3-ecole2');
const choix4Ecole2 = document.getElementById('modal-choix4-ecole2');
const choix1Ecole2Contenu = document.getElementById('modal-choix1-ecole2-contenu');
const choix2Ecole2Contenu = document.getElementById('modal-choix2-ecole2-contenu');
const choix3Ecole2Contenu = document.getElementById('modal-choix3-ecole2-contenu');
const choix4Ecole2Contenu = document.getElementById('modal-choix4-ecole2-contenu');

//Ecole 3
const choix1Ecole3 = document.getElementById('modal-choix1-ecole3');
const choix2Ecole3 = document.getElementById('modal-choix2-ecole3');
const choix3Ecole3 = document.getElementById('modal-choix3-ecole3');
const choix4Ecole3 = document.getElementById('modal-choix4-ecole3');
const choix1Ecole3Contenu = document.getElementById('modal-choix1-ecole3-contenu');
const choix2Ecole3Contenu = document.getElementById('modal-choix2-ecole3-contenu');
const choix3Ecole3Contenu = document.getElementById('modal-choix3-ecole3-contenu');
const choix4Ecole3Contenu = document.getElementById('modal-choix4-ecole3-contenu');

//Entreprise 1
const choix1Entreprise1 = document.getElementById('modal-choix1-entreprise1');
const choix2Entreprise1 = document.getElementById('modal-choix2-entreprise1');
const choix3Entreprise1 = document.getElementById('modal-choix3-entreprise1');
const choix4Entreprise1 = document.getElementById('modal-choix4-entreprise1');
const choix1Entreprise1Contenu = document.getElementById('modal-choix1-entreprise1-contenu');
const choix2Entreprise1Contenu = document.getElementById('modal-choix2-entreprise1-contenu');
const choix3Entreprise1Contenu = document.getElementById('modal-choix3-entreprise1-contenu');
const choix4Entreprise1Contenu = document.getElementById('modal-choix4-entreprise1-contenu');

//Entreprise 2
const choix1Entreprise2 = document.getElementById('modal-choix1-entreprise2');
const choix2Entreprise2 = document.getElementById('modal-choix2-entreprise2');
const choix3Entreprise2 = document.getElementById('modal-choix3-entreprise2');
const choix4Entreprise2 = document.getElementById('modal-choix4-entreprise2');
const choix1Entreprise2Contenu = document.getElementById('modal-choix1-entreprise2-contenu');
const choix2Entreprise2Contenu = document.getElementById('modal-choix2-entreprise2-contenu');
const choix3Entreprise2Contenu = document.getElementById('modal-choix3-entreprise2-contenu');
const choix4Entreprise2Contenu = document.getElementById('modal-choix4-entreprise2-contenu');

//Personnel 1
const choix1Personnel1 = document.getElementById('modal-choix1-personnel1');
const choix2Personnel1 = document.getElementById('modal-choix2-personnel1');
const choix3Personnel1 = document.getElementById('modal-choix3-personnel1');
const choix4Personnel1 = document.getElementById('modal-choix4-personnel1');
const choix1Personnel1Contenu = document.getElementById('modal-choix1-personnel1-contenu');
const choix2Personnel1Contenu = document.getElementById('modal-choix2-personnel1-contenu');
const choix3Personnel1Contenu = document.getElementById('modal-choix3-personnel1-contenu');
const choix4Personnel1Contenu = document.getElementById('modal-choix4-personnel1-contenu');

//Personnel 2
const choix1Personnel2 = document.getElementById('modal-choix1-personnel2');
const choix2Personnel2 = document.getElementById('modal-choix2-personnel2');
const choix3Personnel2 = document.getElementById('modal-choix3-personnel2');
const choix4Personnel2 = document.getElementById('modal-choix4-personnel2');
const choix1Personnel2Contenu = document.getElementById('modal-choix1-personnel2-contenu');
const choix2Personnel2Contenu = document.getElementById('modal-choix2-personnel2-contenu');
const choix3Personnel2Contenu = document.getElementById('modal-choix3-personnel2-contenu');
const choix4Personnel2Contenu = document.getElementById('modal-choix4-personnel2-contenu');

function showChoix1Ecole1Contenu() {
    choix1Ecole1.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix2Ecole1.style.cssText = 'background-color : transparent !important;';
    choix3Ecole1.style.cssText = 'background-color : transparent !important;';
    choix4Ecole1.style.cssText = 'background-color : transparent !important;';
    choix1Ecole1Contenu.style.cssText = 'display :flex !important;';
    choix2Ecole1Contenu.style.cssText = 'display :none !important;';
    choix3Ecole1Contenu.style.cssText = 'display :none !important;';
    choix4Ecole1Contenu.style.cssText = 'display :none !important;';
}

function showChoix2Ecole1Contenu() {
    choix1Ecole1.style.cssText = 'background-color : transparent !important;';
    choix2Ecole1.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix3Ecole1.style.cssText = 'background-color : transparent !important;';
    choix4Ecole1.style.cssText = 'background-color : transparent !important;';
    choix1Ecole1Contenu.style.cssText = 'display :none !important;';
    choix2Ecole1Contenu.style.cssText = 'display :block !important;';
    choix3Ecole1Contenu.style.cssText = 'display :none !important;';
    choix4Ecole1Contenu.style.cssText = 'display :none !important;';
}

function showChoix3Ecole1Contenu() {
    choix1Ecole1.style.cssText = 'background-color : transparent !important;';
    choix2Ecole1.style.cssText = 'background-color : transparent !important;';
    choix3Ecole1.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix4Ecole1.style.cssText = 'background-color : transparent !important;';
    choix1Ecole1Contenu.style.cssText = 'display :none !important;';
    choix2Ecole1Contenu.style.cssText = 'display :none !important;';
    choix3Ecole1Contenu.style.cssText = 'display :block !important;';
    choix4Ecole1Contenu.style.cssText = 'display :none !important;';
}

function showChoix4Ecole1Contenu() {
    choix1Ecole1.style.cssText = 'background-color : transparent !important;';
    choix2Ecole1.style.cssText = 'background-color : transparent !important;';
    choix3Ecole1.style.cssText = 'background-color : transparent !important;';
    choix4Ecole1.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix1Ecole1Contenu.style.cssText = 'display :none !important;';
    choix2Ecole1Contenu.style.cssText = 'display :none !important;';
    choix3Ecole1Contenu.style.cssText = 'display :none !important;';
    choix4Ecole1Contenu.style.cssText = 'display :block !important;';
}

//Ecole 2
function showChoix1Ecole2Contenu() {
    choix1Ecole2.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix2Ecole2.style.cssText = 'background-color : transparent !important;';
    choix3Ecole2.style.cssText = 'background-color : transparent !important;';
    choix4Ecole2.style.cssText = 'background-color : transparent !important;';
    choix1Ecole2Contenu.style.cssText = 'display :block !important;';
    choix2Ecole2Contenu.style.cssText = 'display :none !important;';
    choix3Ecole2Contenu.style.cssText = 'display :none !important;';
    choix4Ecole2Contenu.style.cssText = 'display :none !important;';
}

function showChoix2Ecole2Contenu() {
    choix1Ecole2.style.cssText = 'background-color : transparent !important;';
    choix2Ecole2.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix3Ecole2.style.cssText = 'background-color : transparent !important;';
    choix4Ecole2.style.cssText = 'background-color : transparent !important;';
    choix1Ecole2Contenu.style.cssText = 'display :none !important;';
    choix2Ecole2Contenu.style.cssText = 'display :block !important;';
    choix3Ecole2Contenu.style.cssText = 'display :none !important;';
    choix4Ecole2Contenu.style.cssText = 'display :none !important;';
}

function showChoix3Ecole2Contenu() {
    choix1Ecole2.style.cssText = 'background-color : transparent !important;';
    choix2Ecole2.style.cssText = 'background-color : transparent !important;';
    choix3Ecole2.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix4Ecole2.style.cssText = 'background-color : transparent !important;';
    choix1Ecole2Contenu.style.cssText = 'display :none !important;';
    choix2Ecole2Contenu.style.cssText = 'display :none !important;';
    choix3Ecole2Contenu.style.cssText = 'display :block !important;';
    choix4Ecole2Contenu.style.cssText = 'display :none !important;';
}

function showChoix4Ecole2Contenu() {
    choix1Ecole2.style.cssText = 'background-color : transparent !important;';
    choix2Ecole2.style.cssText = 'background-color : transparent !important;';
    choix3Ecole2.style.cssText = 'background-color : transparent !important;';
    choix4Ecole2.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix1Ecole2Contenu.style.cssText = 'display :none !important;';
    choix2Ecole2Contenu.style.cssText = 'display :none !important;';
    choix3Ecole2Contenu.style.cssText = 'display :none !important;';
    choix4Ecole2Contenu.style.cssText = 'display :block !important;';
}


//Ecole 3
function showChoix1Ecole3Contenu() {
    choix1Ecole3.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix2Ecole3.style.cssText = 'background-color : transparent !important;';
    choix3Ecole3.style.cssText = 'background-color : transparent !important;';
    choix4Ecole3.style.cssText = 'background-color : transparent !important;';
    choix1Ecole3Contenu.style.cssText = 'display :block !important;';
    choix2Ecole3Contenu.style.cssText = 'display :none !important;';
    choix3Ecole3Contenu.style.cssText = 'display :none !important;';
    choix4Ecole3Contenu.style.cssText = 'display :none !important;';
}

function showChoix2Ecole3Contenu() {
    choix1Ecole3.style.cssText = 'background-color : transparent !important;';
    choix2Ecole3.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix3Ecole3.style.cssText = 'background-color : transparent !important;';
    choix4Ecole3.style.cssText = 'background-color : transparent !important;';
    choix1Ecole3Contenu.style.cssText = 'display :none !important;';
    choix2Ecole3Contenu.style.cssText = 'display :block !important;';
    choix3Ecole3Contenu.style.cssText = 'display :none !important;';
    choix4Ecole3Contenu.style.cssText = 'display :none !important;';
}

function showChoix3Ecole3Contenu() {
    choix1Ecole3.style.cssText = 'background-color : transparent !important;';
    choix2Ecole3.style.cssText = 'background-color : transparent !important;';
    choix3Ecole3.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix4Ecole3.style.cssText = 'background-color : transparent !important;';
    choix1Ecole3Contenu.style.cssText = 'display :none !important;';
    choix2Ecole3Contenu.style.cssText = 'display :none !important;';
    choix3Ecole3Contenu.style.cssText = 'display :block !important;';
    choix4Ecole3Contenu.style.cssText = 'display :none !important;';
}

function showChoix4Ecole3Contenu() {
    choix1Ecole3.style.cssText = 'background-color : transparent !important;';
    choix2Ecole3.style.cssText = 'background-color : transparent !important;';
    choix3Ecole3.style.cssText = 'background-color : transparent !important;';
    choix4Ecole3.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix1Ecole3Contenu.style.cssText = 'display :none !important;';
    choix2Ecole3Contenu.style.cssText = 'display :none !important;';
    choix3Ecole3Contenu.style.cssText = 'display :none !important;';
    choix4Ecole3Contenu.style.cssText = 'display :block !important;';
}

//Entreprise 1
function showChoix1Entreprise1Contenu() {
    choix1Entreprise1.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix2Entreprise1.style.cssText = 'background-color : transparent !important;';
    choix3Entreprise1.style.cssText = 'background-color : transparent !important;';
    choix4Entreprise1.style.cssText = 'background-color : transparent !important;';
    choix1Entreprise1Contenu.style.cssText = 'display :flex !important;';
    choix2Entreprise1Contenu.style.cssText = 'display :none !important;';
    choix3Entreprise1Contenu.style.cssText = 'display :none !important;';
    choix4Entreprise1Contenu.style.cssText = 'display :none !important;';
}

function showChoix2Entreprise1Contenu() {
    choix1Entreprise1.style.cssText = 'background-color : transparent !important;';
    choix2Entreprise1.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix3Entreprise1.style.cssText = 'background-color : transparent !important;';
    choix4Entreprise1.style.cssText = 'background-color : transparent !important;';
    choix1Entreprise1Contenu.style.cssText = 'display :none !important;';
    choix2Entreprise1Contenu.style.cssText = 'display :block !important;';
    choix3Entreprise1Contenu.style.cssText = 'display :none !important;';
    choix4Entreprise1Contenu.style.cssText = 'display :none !important;';
}

function showChoix3Entreprise1Contenu() {
    choix1Entreprise1.style.cssText = 'background-color : transparent !important;';
    choix2Entreprise1.style.cssText = 'background-color : transparent !important;';
    choix3Entreprise1.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix4Entreprise1.style.cssText = 'background-color : transparent !important;';
    choix1Entreprise1Contenu.style.cssText = 'display :none !important;';
    choix2Entreprise1Contenu.style.cssText = 'display :none !important;';
    choix3Entreprise1Contenu.style.cssText = 'display :block !important;';
    choix4Entreprise1Contenu.style.cssText = 'display :none !important;';
}

function showChoix4Entreprise1Contenu() {
    choix1Entreprise1.style.cssText = 'background-color : transparent !important;';
    choix2Entreprise1.style.cssText = 'background-color : transparent !important;';
    choix3Entreprise1.style.cssText = 'background-color : transparent !important;';
    choix4Entreprise1.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix1Entreprise1Contenu.style.cssText = 'display :none !important;';
    choix2Entreprise1Contenu.style.cssText = 'display :none !important;';
    choix3Entreprise1Contenu.style.cssText = 'display :none !important;';
    choix4Entreprise1Contenu.style.cssText = 'display :block !important;';
}

//Entreprise 2
function showChoix1Entreprise2Contenu() {
    choix1Entreprise2.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix2Entreprise2.style.cssText = 'background-color : transparent !important;';
    choix3Entreprise2.style.cssText = 'background-color : transparent !important;';
    choix4Entreprise2.style.cssText = 'background-color : transparent !important;';
    choix1Entreprise2Contenu.style.cssText = 'display :block !important;';
    choix2Entreprise2Contenu.style.cssText = 'display :none !important;';
    choix3Entreprise2Contenu.style.cssText = 'display :none !important;';
    choix4Entreprise2Contenu.style.cssText = 'display :none !important;';
}

function showChoix2Entreprise2Contenu() {
    choix1Entreprise2.style.cssText = 'background-color : transparent !important;';
    choix2Entreprise2.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix3Entreprise2.style.cssText = 'background-color : transparent !important;';
    choix4Entreprise2.style.cssText = 'background-color : transparent !important;';
    choix1Entreprise2Contenu.style.cssText = 'display :none !important;';
    choix2Entreprise2Contenu.style.cssText = 'display :block !important;';
    choix3Entreprise2Contenu.style.cssText = 'display :none !important;';
    choix4Entreprise2Contenu.style.cssText = 'display :none !important;';
}

function showChoix3Entreprise2Contenu() {
    choix1Entreprise2.style.cssText = 'background-color : transparent !important;';
    choix2Entreprise2.style.cssText = 'background-color : transparent !important;';
    choix3Entreprise2.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix4Entreprise2.style.cssText = 'background-color : transparent !important;';
    choix1Entreprise2Contenu.style.cssText = 'display :none !important;';
    choix2Entreprise2Contenu.style.cssText = 'display :none !important;';
    choix3Entreprise2Contenu.style.cssText = 'display :block !important;';
    choix4Entreprise2Contenu.style.cssText = 'display :none !important;';
}

function showChoix4Entreprise2Contenu() {
    choix1Entreprise2.style.cssText = 'background-color : transparent !important;';
    choix2Entreprise2.style.cssText = 'background-color : transparent !important;';
    choix3Entreprise2.style.cssText = 'background-color : transparent !important;';
    choix4Entreprise2.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix1Entreprise2Contenu.style.cssText = 'display :none !important;';
    choix2Entreprise2Contenu.style.cssText = 'display :none !important;';
    choix3Entreprise2Contenu.style.cssText = 'display :none !important;';
    choix4Entreprise2Contenu.style.cssText = 'display :block !important;';
}


//Personnel 1
function showChoix1Personnel1Contenu() {
    choix1Personnel1.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix2Personnel1.style.cssText = 'background-color : transparent !important;';
    choix3Personnel1.style.cssText = 'background-color : transparent !important;';
    choix4Personnel1.style.cssText = 'background-color : transparent !important;';
    choix1Personnel1Contenu.style.cssText = 'display :block !important;';
    choix2Personnel1Contenu.style.cssText = 'display :none !important;';
    choix3Personnel1Contenu.style.cssText = 'display :none !important;';
    choix4Personnel1Contenu.style.cssText = 'display :none !important;';
}

function showChoix2Personnel1Contenu() {
    choix1Personnel1.style.cssText = 'background-color : transparent !important;';
    choix2Personnel1.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix3Personnel1.style.cssText = 'background-color : transparent !important;';
    choix4Personnel1.style.cssText = 'background-color : transparent !important;';
    choix1Personnel1Contenu.style.cssText = 'display :none !important;';
    choix2Personnel1Contenu.style.cssText = 'display :block !important;';
    choix3Personnel1Contenu.style.cssText = 'display :none !important;';
    choix4Personnel1Contenu.style.cssText = 'display :none !important;';
}

function showChoix3Personnel1Contenu() {
    choix1Personnel1.style.cssText = 'background-color : transparent !important;';
    choix2Personnel1.style.cssText = 'background-color : transparent !important;';
    choix3Personnel1.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix4Personnel1.style.cssText = 'background-color : transparent !important;';
    choix1Personnel1Contenu.style.cssText = 'display :none !important;';
    choix2Personnel1Contenu.style.cssText = 'display :none !important;';
    choix3Personnel1Contenu.style.cssText = 'display :block !important;';
    choix4Personnel1Contenu.style.cssText = 'display :none !important;';
}

function showChoix4Personnel1Contenu() {
    choix1Personnel1.style.cssText = 'background-color : transparent !important;';
    choix2Personnel1.style.cssText = 'background-color : transparent !important;';
    choix3Personnel1.style.cssText = 'background-color : transparent !important;';
    choix4Personnel1.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix1Personnel1Contenu.style.cssText = 'display :none !important;';
    choix2Personnel1Contenu.style.cssText = 'display :none !important;';
    choix3Personnel1Contenu.style.cssText = 'display :none !important;';
    choix4Personnel1Contenu.style.cssText = 'display :block !important;';
}

//Personnel 2
function showChoix1Personnel2Contenu() {
    choix1Personnel2.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix2Personnel2.style.cssText = 'background-color : transparent !important;';
    choix3Personnel2.style.cssText = 'background-color : transparent !important;';
    choix4Personnel2.style.cssText = 'background-color : transparent !important;';
    choix1Personnel2Contenu.style.cssText = 'display :block !important;';
    choix2Personnel2Contenu.style.cssText = 'display :none !important;';
    choix3Personnel2Contenu.style.cssText = 'display :none !important;';
    choix4Personnel2Contenu.style.cssText = 'display :none !important;';
}

function showChoix2Personnel2Contenu() {
    choix1Personnel2.style.cssText = 'background-color : transparent !important;';
    choix2Personnel2.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix3Personnel2.style.cssText = 'background-color : transparent !important;';
    choix4Personnel2.style.cssText = 'background-color : transparent !important;';
    choix1Personnel2Contenu.style.cssText = 'display :none !important;';
    choix2Personnel2Contenu.style.cssText = 'display :block !important;';
    choix3Personnel2Contenu.style.cssText = 'display :none !important;';
    choix4Personnel2Contenu.style.cssText = 'display :none !important;';
}

function showChoix3Personnel2Contenu() {
    choix1Personnel2.style.cssText = 'background-color : transparent !important;';
    choix2Personnel2.style.cssText = 'background-color : transparent !important;';
    choix3Personnel2.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix4Personnel2.style.cssText = 'background-color : transparent !important;';
    choix1Personnel2Contenu.style.cssText = 'display :none !important;';
    choix2Personnel2Contenu.style.cssText = 'display :none !important;';
    choix3Personnel2Contenu.style.cssText = 'display :block !important;';
    choix4Personnel2Contenu.style.cssText = 'display :none !important;';
}

function showChoix4Personnel2Contenu() {
    choix1Personnel2.style.cssText = 'background-color : transparent !important;';
    choix2Personnel2.style.cssText = 'background-color : transparent !important;';
    choix3Personnel2.style.cssText = 'background-color : transparent !important;';
    choix4Personnel2.style.cssText = 'background-color : rgba(0, 0, 0, 0.1) !important;';
    choix1Personnel2Contenu.style.cssText = 'display :none !important;';
    choix2Personnel2Contenu.style.cssText = 'display :none !important;';
    choix3Personnel2Contenu.style.cssText = 'display :none !important;';
    choix4Personnel2Contenu.style.cssText = 'display :block !important;';
}
