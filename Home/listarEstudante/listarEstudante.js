document.addEventListener("DOMContentLoaded", () => {
    const formEstudante = document.querySelector("#studentForm");
    const tableBody = document.querySelector("#dataTable tbody");

    const fetchEstudantes = () => {
        fetch('http://localhost:8080/estudante') 
            .then(response => response.json())
            .then(data => {
                tableBody.innerHTML = '';
                data.forEach(estudante => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${estudante.id}</td>
                        <td>${estudante.nomeCompleto}</td>
                        <td>${estudante.dataNasc}</td>
                        <td>${estudante.responsavel}</td>
                        <td>${estudante.turma.escola}</td>
                        <td>${estudante.turma.turma}</td>
                        <td>${estudante.turma.professor}</td>
                        <td>${estudante.turma.turno}</td>
                        <td>${estudante.endereco.logradouro}</td>
                        <td>${estudante.endereco.numero}</td>
                        <td>${estudante.endereco.bairro}</td>
                        <td>${estudante.endereco.cidade}</td>
                        <td>${estudante.endereco.cep}</td>
                        <td>${estudante.endereco.estado}</td>
                        <td>
                            <button class="edit" onclick="editarEstudante(${estudante.id})">Editar</button>
                            <button class="delete" onclick="deleteEstudante(${estudante.id})">Excluir</button>
                        </td>
                    `;
                    tableBody.appendChild(row);
                });
            })
            .catch(error => console.error('Erro:', error));
    };

    const editarEstudante = (id) => {

        console.log(`Editando estudante com ID ${id}`);
    };

    const deleteEstudante = (id) => {
        fetch(`http://localhost:8080/estudantes/${id}`, {
            method: 'DELETE'
        })
            .then(() => fetchEstudantes())
            .catch(error => console.error('Erro:', error));
    };

    fetchEstudantes();
});
