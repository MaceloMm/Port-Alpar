class User{
    constructor(id, name, email, role){
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }
}

let users = [
    new User(1, 'Macelo', 'macelo@macelo.com', 'Desenvolvedor FullStack'),
    new User(2, 'Felipe', 'Felipe@felipe.com', 'Desenvolvedor Front-End'),
    new User(3, 'Cintia', 'Cintia@cintia.com', 'Gerente de Treinamentos')
];

function showUsers(user){
    const dados = document.getElementById("dados");
    const trElement = document.createElement('tr');
    dados.appendChild(trElement);

    const thIdElement = document.createElement('th');
    thIdElement.setAttribute('scope', 'row');
    thIdElement.innerHTML = user.id;
    trElement.appendChild(thIdElement);

    const tdNameElement = document.createElement('td');
    tdNameElement.innerHTML = user.name;
    trElement.appendChild(tdNameElement);

    const tdEmailElement = document.createElement('td');
    tdEmailElement.innerHTML = user.email;
    trElement.appendChild(tdEmailElement);

    const tdRoleElement = document.createElement('td');
    tdRoleElement.innerHTML = user.role;
    trElement.appendChild(tdRoleElement);
}

document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('table tbody tr');
  
    rows.forEach(row => {
      row.addEventListener('click', function() {
        rows.forEach(r => r.classList.remove('table-active'));
        
        this.classList.add('table-active');
      });
    });
});

document.getElementById("excluirButton").addEventListener('click', () => {
    const registerUser = document.getElementsByClassName('table-active');
    const alertC = document.getElementById("alert");

    if (registerUser.length == 0){
        alertC.classList.remove('alert-sucess');
        alertC.classList.add('alert-danger');

        alertC.innerHTML = 'Favor selecione um registro!';
        alertC.classList.remove('d-none');
    }else{
        const userId = Number(document.querySelector("tr.table-active th").innerHTML) - 1;
        

    }
})


users.forEach(showUsers);