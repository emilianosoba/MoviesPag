
const url = 'https://api.themoviedb.org/3/movie/popular?api_key=e4cb3540394cdc895fb0f586f8e22573'

fetch(url)
.then(response => response.json())
.then(data => {

    const arrayMovies = data.results;
    const dataContainer = document.getElementById('contenedor');

    arrayMovies.forEach(pelicula => {

        const div = document.createElement('div');
        div.classList.add('data-item');

        div.innerHTML = `
                <h2>${pelicula.title}</h2>
        `;

        dataContainer.appendChild(div);
        console.log(data.results)
    });
})

.catch(error => {
    console.error('Error al obtener los datos:', error);
});