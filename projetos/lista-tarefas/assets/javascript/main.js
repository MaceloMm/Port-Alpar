const app = angular.module('taskModule', []);

app.controller('TaskController', function ($scope){

    $scope.tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    $scope.taskInput = {
        title: '',
        date: '',
    }

    $scope.modalActive = false;

    $scope.toggleModal = () => {
        $scope.modalActive = !$scope.modalActive;
    };

    $scope.handleSubmitAddTask = () => {
        if (!$scope.taskInput.title || !$scope.taskInput.date){
            return
        };

        console.log('estou aqui');
        $scope.tasks.push({
            id: Math.random().toString(36).substring(2, 9),
            title: $scope.taskInput.title,
            date: $scope.taskInput.date,
            dateStr: $scope.taskInput.date.toLocaleDateString(),
        });

        localStorage.setItem('tasks', JSON.stringify($scope.tasks));

        $scope.toggleModal();
        $scope.taskInput.date = '';
        $scope.taskInput.title = '';
    }

    $scope.toggleTask = () => {
        localStorage.setItem('tasks', JSON.stringify($scope.tasks));
    }

    $scope.deleteTask = (cTask) => {
        $scope.tasks = $scope.tasks.filter((task) => task.id !== cTask.id)
        localStorage.setItem('tasks', JSON.stringify($scope.tasks));
    }

});

let array = [];
array.length