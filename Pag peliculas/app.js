let pagina = 1;
const btnAnterior = document.getElementById('btnAnterior')
const btnSiguiente = document.getElementById('btnSiguiente')

obtenerPeliculas();

btnSiguiente.addEventListener('click', () => {

    if (pagina < 1000){ 
    pagina += 1;
    obtenerPeliculas();
    }
});

btnAnterior.addEventListener('click', () => {

    if (pagina > 1){ 
    pagina -= 1;
    obtenerPeliculas();
    }
});

function obtenerPeliculas() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=e4cb3540394cdc895fb0f586f8e22573&language=es-MX&page=${pagina}` // Cambié "lenguage" a "language"

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const arrayMovies = data.results;
            const dataContainer = document.getElementById('contenedor');

            // Limpia el contenedor antes de agregar nuevas películas
            dataContainer.innerHTML = '';

            arrayMovies.forEach(pelicula => {
                const div = document.createElement('div');
                div.classList.add('data-pelicula');

                div.innerHTML = `
                    <div class="pelicula">
                        <img class="poster" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}">
                        <h3 class="titulo">${pelicula.title}</h3>
                    </div>
                `;

                dataContainer.appendChild(div);
            });
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}



