/**
 * Created by NenaH77 on 7/15/14.
 */

angular.module("MyEmpDirectory",[]).controller("EmployeeController", function($scope, dataService){

    $scope.EmployeeInfo = dataService.getInfo();

    $scope.addEmployees = function(){
            dataService.addEmployees($scope.newEmployee);

            $scope.newEmployee = " ";
    }
    $scope.deleteEmployees = function($index){
        dataService.removeEmployee($index);
    }
});
