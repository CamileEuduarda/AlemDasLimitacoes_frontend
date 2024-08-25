document.addEventListener("DOMContentLoaded", () => {
    const formEstudante = document.querySelector("#studentForm");

    const feedbackMessage = document.createElement('div');
    feedbackMessage.className = 'feedback-message';
    formEstudante.appendChild(feedbackMessage);

    const showFeedback = (message, isSuccess = true) => {
        feedbackMessage.textContent = message;
        feedbackMessage.style.color = isSuccess ? 'green' : 'red';
    };

    const sendEstudante = (event) => {
        event.preventDefault();

        const nomeCompleto = document.getElementById("nomeCompleto").value;
        const dataNasc = document.getElementById("dataNasc").value;
        const responsavel = document.getElementById("responsavel").value;
        const escola = document.getElementById("escola").value;
        const turma = document.getElementById("turma").value;
        const professor = document.getElementById("professor").value;
        const turno = document.getElementById("turno").value;
        const logradouro = document.getElementById("logradouro").value;
        const numero = document.getElementById("numero").value;
        const bairro = document.getElementById("bairro").value;
        const cidade = document.getElementById("cidade").value;
        const cep = document.getElementById("cep").value;
        const estado = document.getElementById("estado").value;

        // Criar um objeto com os dados
        const formData = {
            'nomeCompleto': nomeCompleto,
            'dataNasc': "20/10/2001",
            'responsavel': responsavel,
            turma: {
                'escola': escola,
                'turma': turma,
                'professor': professor,
                'turno': turno,
            },

            endereco: {
                'logradouro': logradouro,
                'numero': numero,
                'bairro': bairro,
                'cidade': cidade,
                'cep': cep,
                'estado': estado
            }
        };

        fetch('http://localhost:8080/estudante', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(result => {
                showFeedback("Cadastro realizado com sucesso!");
                formEstudante.reset();
            })
            .catch(error => {
                showFeedback("Erro ao enviar o formulário. Tente novamente.", false);
                console.error('Erro:', error);
            });
    };

    formEstudante.addEventListener("submit", sendEstudante);
});
