const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const menuList = document.getElementById('menu-list');
const addItemForm = document.getElementById('add-item-form');
const itemNameInput = document.getElementById('item-name');
const itemPriceInput = document.getElementById('item-price');

function displayMenu() {
    menuList.innerHTML = '';
    db.collection('menu').get().then(snapshot => {
        snapshot.forEach(doc => {
            const item = doc.data();
            const listItem = document.createElement('li');
            listItem.innerHTML = `${item.name}: $<span class="price" data-id="${doc.id}">${item.price}</span>
                                  <button onclick="deleteItem('${doc.id}')">Delete</button>`;
            menuList.appendChild(listItem);
        });
    });
}

function modifyPrice(id) {
    const newPrice = prompt("Enter new price:");
    if (newPrice) {
        db.collection('menu').doc(id).update({ price: parseFloat(newPrice) })
            .then(() => displayMenu());
    }
}

function deleteItem(id) {
    db.collection('menu').doc(id).delete().then(() => displayMenu());
}

addItemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = itemNameInput.value;
    const price = parseFloat(itemPriceInput.value);
    if (name && !isNaN(price)) {
        db.collection('menu').add({ name, price })
            .then(() => {
                itemNameInput.value = '';
                itemPriceInput.value = '';
                displayMenu();
            });
    }
});

menuList.addEventListener('click', (e) => {
    if (e.target.classList.contains('price')) {
        const id = e.target.getAttribute('data-id');
        modifyPrice(id);
    }
});

displayMenu();