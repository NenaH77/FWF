/**
 * Created by NenaH77 on 7/13/14.
 */
angular.module('MyApp', []).controller('DBController',function ($scope){ //need to register DBController with MyApp
    $scope.userName;

    $scope.nameArray =['Van', 'Alexandra', 'Jose', 'Maria'];

    $scope.addName = function(){
        $scope.nameArray.push($scope.userName);

        $scope.userName = '';
    }

    $scope.deleteName = function(deletedName){
        var idx = $scope.nameArray.indexOf(deletedName);
        $scope.nameArray.splice(idx,1);
    }


});