import './App.css';
import Pelicula from './components/Pelicula';
import peliculas from './json/peliculas.json';
function App() {
  return (

    <container>
      <header>
        <figure>
          <img src="Imagenes/Logo.png" alt="Logo" />
          <h1>AniPelis</h1>
        </figure>
      </header>
      {peliculas.map(peli =>
        <Pelicula
          titulopeli={peli.titulopeli}
          img={peli.img}
          titulo={peli.titulo}
          descripcion={peli.descripcion}
          duracion={peli.duracion}
          actores={peli.actores}
          clasificacion={peli.clasificacion}
          fechaestreno={peli.fechaestreno}
          link={peli.link}
        ></Pelicula>
      )}
    </container>
  );
}

export default App;
