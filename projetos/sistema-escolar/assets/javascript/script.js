class User{

    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    }

    exibirPerfil(){
        return [this.name, this.email]
    }

    checkLogin(email, password){
        return email === this.email && password === this.password;
    }
}

class Studant extends User{

    constructor(name, email, password, classStudant){
        super(name, email, password);
        this.classStudant = classStudant;
        this.type = 'aluno';
    }

    exibirPerfil(){
        return [this.name, this.email, this.classStudant];
    }
}

class Teacher extends User{
    
    constructor(name, email, password, materias){
        super(name, email, password);
        this.materias = materias;
        this.type = 'professor';
    }

    exibirPerfil(){
        return [this.name, this.email, this.materias];
    }
}

let users = [
    new Studant('Macelo', 'macelo@macelo.com', 'macelo123', 'Turma 1'),
    new Teacher('Felipe Felipe', 'Felipe@felipe.com', 'felipe123', 'Programação')
];

/**
 * 
 */
document.getElementById('btnLogin').addEventListener('click', () => {
    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('password').value.trim();
    const alertElement = document.querySelector('.info');
    
    alertElement.classList.add('hide');
    
    if (!emailInput || !passwordInput) {
        alertElement.innerHTML = 'Preencha todos os campos!';
        alertElement.classList.remove('hide');
        return; 
    }
    
    const usuario = users.find(user => user.checkLogin(emailInput, passwordInput));
    
    if (usuario) {
        localStorage.setItem('usuario', JSON.stringify(usuario));
        window.location.href = 'informacoes.html';
    } else {
        alertElement.innerHTML = 'Email ou Senha inválidos!';
        alertElement.classList.remove('hide');
    }
});

document.getElementById('hiddenPassword').addEventListener('click', () => {
    const inputPassword = document.getElementById('password');
    if (inputPassword.attributes.type.value == 'password'){
        inputPassword.setAttribute('type', 'text');
    }else{
        inputPassword.setAttribute('type', 'password')
    }
})

document.getElementById('password').addEventListener('input', function(){
    const passwordField = this;

    if (this.value === ''){
        this.classList.remove('isValid');
        this.classList.add('isInvalid');
    }else{
        this.classList.remove('isInvalid');
        this.classList.add('isValid');
    }

    setTimeout(() => {
        passwordField.classList.remove('isValid');
        passwordField.classList.remove('isInvalid');
    }, 5000);
})

document.getElementById('email').addEventListener('input', function(){
    const emailField = this;

    if (this.value === '' || !this.value.includes('@')){
        this.classList.remove('isValid');
        this.classList.add('isInvalid');
    }else{
        this.classList.remove('isInvalid');
        this.classList.add('isValid'); 
    }

    setTimeout(() => {
        emailField.classList.remove('isValid');
        emailField.classList.remove('isInvalid');
    }, 5000);
})