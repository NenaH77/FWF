/**
 * Created by NenaH77 on 7/13/14.
 */
angular.module('MyApp',[]).controller('DBController',function ($scope, dataService){ //need to register DBController with MyApp
    $scope.userName;

    $scope.nameArray = dataService.getNames();//namesArray now uses getNames

    $scope.addName = function(){
        dataService.addName($scope.userName);

        $scope.userName = '';
    }

    $scope.deleteName = function(deletedName){
        dataService.removeName(deletedName);
    }


});