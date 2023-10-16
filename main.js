const secOfertas = document.querySelector('.secOfertas');
const inicioSesion = document.querySelector('#inicioSesion');
const modal = document.querySelector('#modal');
const cerrarModal = document.querySelector('#btn__inicio')



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
    drawOfertas(mappedOfertas);
}

init()


const getLogin = async () => {
    const response = await fetch(`http://localhost:5000/user/login/`);
    const users = await response.json();

    return users;
};


document.getElementById("inicioSesion").addEventListener("click", ()=> {
    document.getElementById("modal").style.display = "block";
});

document.getElementById("btn__inicio").addEventListener("click", ()=> {
    document.getElementById("modal").style.display = "none";
});

window.addEventListener("click", (event)=> {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
    modal.style.display = "none";
    }
});



document.getElementById("registerNewUser").addEventListener('submit', async (e) =>{
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const response = await fetch("http://localhost:5000/user/register", {
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({name, lastname, phone, email, password}),
    });
    
    const data = await response.json();
    document.getElementById('mensajeRegistroCorrecto').textContent=data.message;
})





