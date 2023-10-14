const secOfertas = document.querySelector('.secOfertas');


const getOfertas = async () => {
    const response = await fetch(`http://localhost:5000/oferta/`);
    const ofertas = await response.json();
    return ofertas;
};

const mapOfertas = (ofertasMapeadas) => {
    return ofertasMapeadas.map((oferta) => ({
        name: oferta.name,
        description: oferta.description,
        inscritos: oferta.inscritos,
        salario: oferta.salario,
    }));
};

const drawOfertas = (mappedOfertas) => {
    for (const oferta of mappedOfertas) {
        const divOferta = document.createElement('div');
        divOferta.innerHTML = `<h1>${oferta.name}</h1>
        <h3>Descripción:</h3>
        <p>${oferta.description}</p>
        <h4>Salario:</h4><span> ${oferta.salario}</span>
        <h4>Número de inscritos:</h4><p>${oferta.inscritos.length}</p>
        `
        divOferta.className = 'boxOferta'
        secOfertas.appendChild(divOferta);
    };
};

const init = async () => {
    const ofertas = await getOfertas();
    // console.log(ofertas)
    const mappedOfertas = mapOfertas(ofertas);

    drawOfertas(mappedOfertas)
}

init()
