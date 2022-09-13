import React from 'react';

class Pelicula extends React.Component {
    render() {
        return (
            <body>
                <main>
                    <div class="Titulo">
                        <hr />
                        <h1>{this.props.titulopeli}</h1>
                        <hr />
                        <div class="Cartelera">
                            <img src={this.props.img}
                                alt="Karakai Jouzu no Takagi-san Movie" />
                            <p><b>Titulo:</b><br /> {this.props.titulo} <br /><b>
                                Duracion: </b><br /> {this.props.duracion} <br /><b> Actores: </b><br /> {this.props.actores} <br /><b> Clasificacion: </b><br /> {this.props.clasificacion}
                                <br /><b> Fecha de estreno: </b><br /> {this.props.fechaestreno} <br /><b> Descripcion: </b><br />
                                {this.props.descripcion}</p>
                            <iframe width="560" height="315" src={this.props.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>


                </main>

            </body>
        )
    }
}
export default Pelicula;