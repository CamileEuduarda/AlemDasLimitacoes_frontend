const btnForm = document.querySelector(".submit-button")
const form = document.querySelector('.login-form');

const sendForm = async (event) => {
    event.preventDefault();

    
    const formData = new FormData(form);

    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    try {
        const response = await fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Login bem-sucedido:', result);
        } else {
            const error = await response.json();
            console.error('Erro no login:', error);
            alert('Usuário ou senha incorretos.');
        }
    } catch (error) {
        console.error('Erro na requisição:', error);
        alert('Ocorreu um erro ao tentar fazer login.');
    }

}

btnForm.addEventListener("click", sendForm)

