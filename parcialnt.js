class Serie {
    constructor(nombre, descripcion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
    }

    crearElemento() {
        const serieElement = document.createElement('div');
        serieElement.classList.add('series-box');
        serieElement.innerHTML = `
            <h2>${this.nombre}</h2>
            <p>${this.descripcion}</p>
        `;
        return serieElement;
    }
}

const series = [
    new Serie('serie 1', 'descripcion de la serie 1'),
    new Serie('serie 2', 'Descripcion de la serie 2'),
    // Agrega más series aquí
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    series.forEach(serie => {
        const serieElement = serie.crearElemento();
        container.appendChild(serieElement);
    });
});