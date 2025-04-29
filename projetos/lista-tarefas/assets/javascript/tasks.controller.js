app.controller('TaskController', function ($scope, $filter, TaskService){

    $scope.taskInput = {
        title: '',
        date: '',
    }
    $scope.tasks = TaskService.getTasks();
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

        TaskService.addTask($scope.taskInput.title, $scope.taskInput.date);
        $scope.tasks = TaskService.getTasks();

        $scope.toggleModal();
        $scope.taskInput.date = '';
        $scope.taskInput.title = '';
    }

    $scope.toggleTask = () => {
        TaskService.toogleCheck();
        $scope.tasks = TaskService.getTasks();
    }

    $scope.deleteTask = (cTask) => {
        TaskService.removeTask(cTask.id);
        $scope.tasks = TaskService.getTasks();
    }

    $scope.filteredTasks = function(){
        return $filter('filter')($scope.tasks, $scope.showCompletedOnly ? {checked: true} : {})
    }
});