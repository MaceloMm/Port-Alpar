const app = angular.module("schoolSystem", []);

app.controller('schoolController', function($scope) {

    // variables

    $scope.msgb = 'Bem-vindo ao sistema de cadastro escolar';
    $scope.toggleCadastro = false;
    $scope.filtro = 'todos';
    $scope.toggleCheckRegister = false;
    $scope.toggleUsersData = false;
    $scope.showUsersGeral = false;
    $scope.users = JSON.parse(localStorage.getItem('users')) || [];
    $scope.userInput = {
        name: '',
        tipo: ''
    };
    $scope.seachName = {name: ''};

    // functions

    $scope.getUserData = () => {
        $scope.users.push(
            {
                id: Math.random().toString(36).substring(2, 9),
                nome: $scope.userInput.name,
                tipo: $scope.userInput.tipo,
                date: new Date()
            }
        );
        localStorage.setItem('users', JSON.stringify($scope.users));
        alert(`Usuario ${$scope.userInput.name} cadastrado!`);
        $scope.userInput.name = '';
        $scope.userInput.tipo = '';
    };
    $scope.showCadastroScreen = () => {
        $scope.toggleCheckRegister = false;
        $scope.toggleUsersData = false;
        $scope.toggleCadastro = !$scope.toggleCadastro;
    }
    $scope.showSearchScreen = () => {
        $scope.toggleCadastro = false;
        $scope.toggleUsersData = false;
        $scope.toggleCheckRegister = !$scope.toggleCheckRegister;
    }
    $scope.showUsersData = () =>{
        $scope.toggleCadastro = false;
        $scope.toggleCheckRegister = false;

        $scope.toggleUsersData = !$scope.toggleUsersData;
    }
    $scope.hideAll = () => {
        $scope.toggleCadastro = false;
        $scope.toggleCheckRegister = false;
        $scope.toggleUsersData = false;
    }
    $scope.seachUser = () => {

        $scope.userS = $scope.users.find((user) => {
            return $scope.seachName.name.toLowerCase() === user.nome.toLowerCase();
        });

        if ($scope.userS === undefined){
            alert('Usuario não encontrado!');
            return
        }

        $scope.img = $scope.userS.tipo === 'aluno' ? 'assets/images/education.png' : 'assets/images/teacher.png';
        $scope.showUsersData();

    };
    $scope.showAllUsers = () => {
        $scope.showUsersGeral = !$scope.showUsersGeral;
    }
});

