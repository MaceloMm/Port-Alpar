window.app.controller('schoolController', function($scope, SchoolServices) {

    // variables
    $scope.msgb = 'Bem-vindo ao sistema de cadastro escolar';
    $scope.toggleCadastro = false;
    $scope.filtro = 'todos';
    $scope.btnVoltar = false;
    $scope.toggleCheckRegister = false;
    $scope.toggleUsersData = false;
    $scope.showUsersGeral = false;
    $scope.users = SchoolServices.getUsers();
    $scope.userInput = {name: '', tipo: ''};
    $scope.seachName = {name: ''};

    // functions

    $scope.getUserData = () => {
        SchoolServices.addUsers($scope.userInput.name, $scope.userInput.tipo);
        if ($scope.userInput === '' || $scope.userInput.tipo === ''){alert('Por favor preencher os campos!'); return;};
        $scope.users = SchoolServices.getUsers();
        alert(`Usuario ${$scope.userInput.name} cadastrado!`);
        $scope.userInput.name = '';
        $scope.userInput.tipo = '';
    };

    $scope.showCadastroScreen = () => {
        if (!$scope.btnVoltar){$scope.btnVoltar = true;};
        $scope.toggleCheckRegister = false;
        $scope.toggleUsersData = false;
        $scope.toggleCadastro = !$scope.toggleCadastro;
    }
    $scope.showSearchScreen = () => {
        if (!$scope.btnVoltar){$scope.btnVoltar = true;}
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
        $scope.btnVoltar = false;
    }
    $scope.seachUser = () => {

        const ret = SchoolServices.searchUser($scope.seachName.name)

        $scope.userS = ret.findUser;

        if ($scope.userS === undefined){
            alert('Usuario não encontrado!');
            return
        }

        $scope.img = ret.imgReturn;
        $scope.showUsersData();

    };
    $scope.showAllUsers = () => {
        $scope.showUsersGeral = !$scope.showUsersGeral;
    }
    $scope.removeUser = (userid) => {
        SchoolServices.removeUser(userid);
        $scope.users = SchoolServices.getUsers();
    }
});


