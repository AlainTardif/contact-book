# 📇 Contact Book

Application web de gestion de contacts avec formulaire modal.

## 🎯 Fonctionnalités

- Affichage d'une liste de contacts (Nom, Prénom, Email)
- Ajout de contacts via une fenêtre modale
- Validation : le bouton "Valider" s'active uniquement si tous les champs sont remplis
- Overlay qui grise le formulaire principal lors de l'ouverture de la modale
- Persistance des données avec json-server

## 🚀 Installation
```bash
# Cloner le dépôt
git clone https://github.com/AlainTardif/contact-book.git
cd contact-book

# Installer les dépendances
npm install

# Lancer json-server
npx json-server --watch db.json --port 3000

# Ouvrir index.html dans votre navigateur
```

## 📁 Structure du projet
```
contact-book/
├── css/
│   └── style.css
├── js/
│   └── app.js
├── db.json
├── index.html
├── package.json
└── README.md
```

## 🔧 Utilisation

1. Lancer `npx json-server --watch db.json --port 3000`
2. Ouvrir `index.html` dans un navigateur
3. Cliquer sur le bouton `+` pour ouvrir la modale
4. Remplir tous les champs (Nom, Prénom, Email, Téléphone)
5. Cliquer sur "Valider" → le contact s'affiche sous "Résultat de la modale"

## 📊 Format des données (db.json)
```json
{
  "contacts": [
    {
      "id": 1,
      "nom": "Dupont",
      "prenom": "Marie",
      "email": "marie.dupont@email.fr",
      "telephone": "0601020304"
    }
  ]
}
```

## 🛠️ Technologies

- HTML5 / CSS3
- JavaScript (ES6+)
- json-server (API REST)

## 👤 Auteur

Alain Tardif - Formation ABAP SAP @ AELION Orléans

---

© 2025 - Alain Tardif.