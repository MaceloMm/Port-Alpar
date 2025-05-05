const app = angular.module("validationSystem", []);

app.controller('validationController', function ($scope) {
    $scope.padEmail = /^[\w._+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    $scope.padNome = /^[a-zA-Z\s]+$/;
    $scope.padCpf = /^[\d]{3}\.[\d]{3}\.[\d]{3}-[\d]{2}$/;
    $scope.name = '';
    $scope.email = '';
    $scope.cpf = '';
    $scope.invalid = { cpf: false, email: false, name: false };
    $scope.showMessage = false;

    $scope.logName = () => {
        if (!$scope.padEmail.test($scope.email)) { 
            $scope.invalid.email = true;
        };
        if (!$scope.padNome.test($scope.name)) { 
            $scope.invalid.name = true;
        };
        if (!$scope.padCpf.test($scope.cpf)) { 
            $scope.invalid.cpf = true;
        };;


        if ($scope.padEmail.test($scope.email) && $scope.padCpf.test($scope.cpf) && $scope.padNome.test($scope.name)) {
            $scope.invalid = { cpf: false, email: false, name: false };
            $scope.name = '';
            $scope.email = '';
            $scope.cpf = '';
            $scope.showMessage = true;
        }
    }
    $scope.resetBtn = () => {
        $scope.invalid = { cpf: false, email: false, name: false };
        $scope.showMessage = false;
    }
})