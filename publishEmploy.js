const secOfertas = document.querySelector('.secOfertas');
const inicioSesion = document.querySelector('#inicioSesion');
const modal = document.querySelector('#modal');
const cerrarModal = document.querySelector('#btn__inicio')

const init = async () => {
    const ofertas = await getOfertas();
    // console.log(ofertas)
    const mappedOfertas = mapOfertas(ofertas);
    drawOfertas(mappedOfertas);
}
init()

document.getElementById("registerNewEmploy").addEventListener('submit', async (e) =>{
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const salary = document.getElementById("salary").value;
    const date = document.getElementById("date").value;
    const response = await fetch("http://localhost:5000/oferta", {
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({name, description, salary, date}),
    });
    const data = await response.json();
    document.getElementById('mensajeRegistroCorrecto').textContent=data.message;
})