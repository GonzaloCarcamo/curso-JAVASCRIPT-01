// Variables

const listaTweets = document.getElementById('lista-tweets');




// Event Listeners
eventListeners();

function eventListeners() {
    // Cuando se envía al formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    // Eliminar tweets
    listaTweets.addEventListener('click', borrarTweet);
}







// Funciones:
// Añadir tweet al formulario
function agregarTweet(e) {
    e.preventDefault();
    // Leer valor del textarea
    const tweet = document.getElementById('tweet').value;

    // Crear botón de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    // Crear elemento y añadirlo a una lista
    const li = document.createElement('li');
    li.innerText = tweet;
    
    // Añade el botón de borrar al tweer
    li.appendChild(botonBorrar);
    
    // Añade el tweer al listado
    listaTweets.appendChild(li); 

    // Agregar a LocalStorage
    agregarTweetLocalStorage(tweet);
}


// Eliminar tweet del DOM
function borrarTweet(e) {
    e.preventDefault();
    if (e.target.className === 'borrar-tweet') {
        e.target.parentElement.remove();
        alert('Tweet ha sido eliminado');
    }
}

// Agregar tweet a LocalStorage
function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetsLocalStorage();

    // Añadir el nuevo tweet
    tweets.push(tweet);

    // Convertir de string a arreglo para LocalStorage
    localStorage.setItem('tweets', JSON.stringify(tweets) );

    // Agregar a LocalStorage
    // localStorage.setItem('tweets', tweet);
}

function obtenerTweetsLocalStorage() {
    let tweets;

    // Revisar los valores en LocalStorage
    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets') );
    }
    return tweets;
}