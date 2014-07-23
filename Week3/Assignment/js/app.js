var app = angular.module("CoffeeApp",['ngRoute'])

    app.config(function($routeProvider){
        $routeProvider.
            when('/list', {
                templateUrl:'partials/list.html',
                controller:'ListController'
            }).
            when('/detail/:coffIndex',{
                templateUrl:'partials/detail.html',
                controller:'DetailController'
            }).
            when('/add',{
                templateUrl:'partials/add.html',
                controller:'AddController'
            }).
            otherwise({
                redirectTo:'/list'
        });
    });

    app.controller('ListController', function($scope, coffeeService){
        $scope.coffeeList = coffeeService.getCoffee();
        $scope.remove = function(index){
            coffeeService.deleteCoffee(index);
        }
    });

    app.controller('DetailController', function($scope, coffeeService, $routeParams){
        $scope.nC = coffeeService.getCoffeeAt($routeParams.coffIndex);
    });

    app.controller('AddController', function($scope, coffeeService){
        $scope.test = "test";
        $scope.addCoffee = function(){
            coffeeService.addCof({type:$scope.cofType, size:$scope.cofSize, price:$scope.cofPrice})
        };
    });




