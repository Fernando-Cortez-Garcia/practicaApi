//Consumir una API
//creamos una variable con la ulr de la api
const api_URL = 'https://jsonplaceholder.typicode.com/todos/1';
const htmlresponse = document.querySelector('#app');
const ul = document.createElement('ul');


fetch(`${api_URL}/users`)
    .then(response => response.json())
    .then((users) => {
        users.forEach(user => {
            let elemento = document.createElement('li');
            elemento.appendChild(document.createTextNode(user.name));
            ul.appendChild(elemento);

        });

        htmlresponse.appendChild(ul);

    });




//creacion de tarjetas de usuario