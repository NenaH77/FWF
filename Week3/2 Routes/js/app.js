/**
 * Created by NenaH77 on 7/17/14.
 */

angular.module("MyApp",['ngRoute'])

    .config(function($routeProvider){

        $routeProvider.when("/view1", {
            templateUrl : "View1.html",
            controller : "View1Controller"
        }).when("/view2", {
           templateUrl:"Vew2.html",
           controller: "View2Controller"
        }).when("/view3/:paramTest", //we are passing in a variable
        {
           templateUrl:"View3.html",             //setting up the property
           controller: "View3Controller"
        })
           .otherwise({
                redirectTo:"/view1"
            });
    })

    .controller("View1Controller", function($scope){
        $scope.test = "Hello World 1";
    })

    .controller("View2Controller", function($scope){
        $scope.test = "Hello World 2";
    })

    .controller("View3Controller", function($scope, routeParams){
        $scope.test = "Hello World 3";

//routeParameters allows us to access whatever was passed in through the URL
        $scope.otherTest = $routeParams.paramTest;//when viewing the webpage 'view3', you should be able to type view3/(anything here, such as chocolate, ponies, pizza, etc) and the view3 page will display
    })

.controller("MyAppController", function($scope){
        $scope.test = "Hello World";
    });