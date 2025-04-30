window.app.controller('schoolController', function($scope, SchoolServices) {

    // variables
    $scope.msgb = 'Bem-vindo ao sistema de cadastro escolar';
    $scope.toggleCadastro = false;
    $scope.filtro = 'todos';
    $scope.btnVoltar = false;
    $scope.toggleCheckRegister = false;
    $scope.toggleUsersData = false;
    $scope.showUsersGeral = false;
    $scope.waitLoad = false;
    $scope.users = SchoolServices.getUsers();
    $scope.userInput = {name: '', tipo: '', email: ''};
    $scope.seachName = {name: ''};

    // functions

    $scope.getUserData = async (form) => {
        try{
            if ($scope.userInput.name === '' || $scope.userInput.tipo === ''){alert('Por favor preencher os campos!'); return;};

            $scope.waitLoad = true;
            $scope.$applyAsync(); 

            await SchoolServices.addUsers($scope.userInput.name, $scope.userInput.tipo, $scope.userInput.email);
            $scope.users = SchoolServices.getUsers();
            alert(`Usuario ${$scope.userInput.name} cadastrado!`);
            $scope.userInput = {name: '', tipo: '', email: ''};
        }catch (error){
            console.error('Erro ao cadastrar usuário:', error);
            alert('Erro ao cadastrar usuário!');
        }finally{
            $scope.$applyAsync(() => {
                $scope.waitLoad = false;
                $scope.hideAll();
                form.$setPrestine();
                form.$setUntouched();
            });
        }

        $scope.hideAll();
    };

    $scope.showCadastroScreen = () => {
        if (!$scope.btnVoltar){$scope.btnVoltar = true;};
        $scope.toggleCheckRegister = false;
        $scope.showUsersGeral = false;
        $scope.toggleUsersData = false;
        $scope.toggleCadastro = !$scope.toggleCadastro;
    }

    $scope.showSearchScreen = () => {
        if (!$scope.btnVoltar){$scope.btnVoltar = true;}
        $scope.toggleCadastro = false;
        $scope.toggleUsersData = false;
        $scope.showUsersGeral = false;
        $scope.toggleCheckRegister = !$scope.toggleCheckRegister;
    }
    $scope.showUsersData = () =>{
        $scope.toggleCadastro = false;
        $scope.toggleCheckRegister = false;
        $scope.showUsersGeral = false;
        $scope.toggleUsersData = !$scope.toggleUsersData;
    }
    
    $scope.hideAll = () => {
        $scope.toggleCadastro = false;
        $scope.toggleCheckRegister = false;
        $scope.toggleUsersData = false;
        $scope.showUsersGeral = false;
        $scope.btnVoltar = false;
    }
    $scope.seachUser = async (form) => {

        $scope.waitLoad = true;
        $scope.$applyAsync();

        try{
            const ret = await SchoolServices.searchUser($scope.seachName.name)

            $scope.userS = ret.findUser;

            if ($scope.userS === undefined){
                alert('Usuario não encontrado!');
                $scope.$applyAsync(() => {
                    $scope.waitLoad = false;
                    $scope.seachName = {name: ''};
                    $scope.hideAll();
                });
                console.log('estou aqui')
                return
            }

            $scope.$applyAsync(() => {
                $scope.waitLoad = false;
                $scope.seachName = {name: ''};
                $scope.showUsersData();
            });

            $scope.img = ret.imgReturn;
        }catch(error){
            console.log('erro: ' + error)
            alert('Ocorreu um erro ao cadastrar o usuario!')
            $scope.$applyAsync(() => {
                $scope.waitLoad = false;
                $scope.seachName = {name: ''};
            });
        }finally{

        }

        // $scope.img = ret.imgReturn;
        // $scope.$applyAsync(() => {
        //     $scope.waitLoad = false;
        //     $scope.seachName = {name: ''};
        // });
        // $scope.showUsersData();

    };
    $scope.showAllUsers = () => {
        $scope.btnVoltar = true;
        $scope.toggleCadastro = false;
        $scope.toggleUsersData = false;
        $scope.toggleCheckRegister = false;
        $scope.showUsersGeral = !$scope.showUsersGeral;
    }
    $scope.removeUser = (userid) => {
        SchoolServices.removeUser(userid);
        $scope.users = SchoolServices.getUsers();
    }
});


console.log