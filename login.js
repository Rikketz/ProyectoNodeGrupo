
const getLogin = async () => {
    const response = await fetch(`http://localhost:5000/user/login/`);
    const users = await response.json();
    return users;
};

document.getElementById("login").addEventListener('submit', async (e) =>{
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const response = await fetch("http://localhost:5000/user/login", {
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({email, password}),
    });
    
    const data = await response.json();
    document.getElementById('msgLogin').textContent=data.message;
})

getLogin();