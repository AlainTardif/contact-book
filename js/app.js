// ========== SÉLECTION DES ÉLÉMENTS ==========
const btnOpenModal = document.getElementById('btn-open-modal');
const btnCloseModal = document.getElementById('btn-close-modal');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const form = document.getElementById('form-contact');
const btnValider = document.getElementById('btn-valider');
const contactsList = document.getElementById('contacts-list');
const errorMessage = document.getElementById('error-message');

// Champs du formulaire
const inputNom = document.getElementById('input-nom');
const inputPrenom = document.getElementById('input-prenom');
const inputEmail = document.getElementById('input-email');
const inputTelephone = document.getElementById('input-telephone');

// ========== FONCTIONS MODALE ==========
function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  // Petit délai pour déclencher l'animation
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);
}

function closeModal() {
  modal.classList.remove('show');
  // Attendre la fin de l'animation avant de cacher
  setTimeout(() => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    form.reset();
    btnValider.disabled = true;
    errorMessage.classList.add('hidden');
  }, 500);
}

// ========== VALIDATION DES CHAMPS ==========
function checkFormValidity() {
  const isEmpty = 
    inputNom.value.trim() === '' ||
    inputPrenom.value.trim() === '' ||
    inputEmail.value.trim() === '' ||
    inputTelephone.value.trim() === '';
  
  if (isEmpty) {
    errorMessage.textContent = 'Tous les champs doivent être remplis';
    errorMessage.classList.remove('hidden');
    btnValider.disabled = true;
  } else {
    errorMessage.classList.add('hidden');
    btnValider.disabled = false;
  }
}

// ========== AFFICHER UN CONTACT ==========
function displayContact(contact) {
  const row = document.createElement('div');
  row.classList.add('contact-row');
  row.innerHTML = `
    <span>${contact.nom}</span>
    <span>${contact.prenom}</span>
    <span>${contact.email}</span>
  `;
  contactsList.appendChild(row);
}

// ========== CHARGER LES CONTACTS ==========
async function loadContacts() {
  try {
    const response = await fetch('http://localhost:3000/contacts');
    const contacts = await response.json();
    contacts.forEach(contact => displayContact(contact));
  } catch (error) {
    console.log('Serveur json-server non démarré');
  }
}

// ========== AJOUTER UN CONTACT ==========
async function addContact(event) {
  event.preventDefault();

  const newContact = {
    nom: inputNom.value.trim(),
    prenom: inputPrenom.value.trim(),
    email: inputEmail.value.trim(),
    telephone: inputTelephone.value.trim()
  };

  try {
    const response = await fetch('http://localhost:3000/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newContact)
    });
    const contact = await response.json();
    displayContact(contact);
    closeModal();
  } catch (error) {
    console.log('Erreur ajout contact:', error);
  }
}

// ========== ÉVÉNEMENTS ==========
btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);

// Validation en temps réel
inputNom.addEventListener('input', checkFormValidity);
inputPrenom.addEventListener('input', checkFormValidity);
inputEmail.addEventListener('input', checkFormValidity);
inputTelephone.addEventListener('input', checkFormValidity);

// Soumission formulaire
form.addEventListener('submit', addContact);

// Charger contacts au démarrage
loadContacts();