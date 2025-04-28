const app = angular.module('taskModule', []);

app.controller('TaskController', function ($scope, $filter){

    $scope.tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    $scope.taskInput = {
        title: '',
        date: '',
    }

    $scope.showCompletedOnly = false;
    $scope.showIncompletedOnly = false;
    $scope.tasksForNow = false;
    $scope.modalActive = false;
    $scope.today = new Date().toLocaleDateString();

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

    $scope.filteredTasks = function(){
        return $filter('filter')($scope.tasks, $scope.showCompletedOnly ? {checked: true} : {})
    }
});