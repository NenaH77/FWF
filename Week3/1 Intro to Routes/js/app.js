/**
 * Created by NenaH77 on 7/17/14.
 */

angular.module("MyApp",['ngRoute'])

    .config(function($routeProvider){ //Route Provider: how we register the different routes that are applications is going to implement

        $routeProvider.when("/view1", { //when takes 2 inputs: 1. Path,
            templateUrl : "View1.html", // 2. Object that defines the additional properties of this route.
            // the 1st property is the templateurl and above is the path where angular should look to find the html for this view
            controller : "View1Controller" // what controller should it use for this view. We will be able to create multiple controllers and control which view they are assigned.
        }).when("/view2", {
           templateUrl:"Vew2.html",
           controller: "View2Controller"
        }).otherwise({//what URL do you want it to default to? So if it doesn't give it a URL or if they give it an invalid URL, where would you like it to go to? Use the .otherwise() method
                redirectTo:"/view1"
            });
    })

    .controller("View1Controller", function($scope){//due to the above controller:View1, we needed to register this controller as done here
        $scope.test = "Hello World 1";//can use the same variable "test" BUT because they are seperate controllers they will be seperate contexts
    })

    .controller("View2Controller", function($scope){//due to the above controller:View2, we needed to register this controller as done here
        $scope.test = "Hello World 2";
    })

.controller("MyAppController", function($scope){
        $scope.test = "Hello World";
    });