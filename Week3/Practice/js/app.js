angular.module("CoffeeApp",['ngRoute'])

    .config(function($routeProvider){
        $routeProvider.
            when('/AddCoffeeOrder', {
                templateUrl:'partials/AddCoffeeOrder.html',
                controller:'AddOrderController'
            }).
            when('/MenuOrder',{
                templateUrl:'partials/MenuOrder.html',
                controller:'MenuOrderController'
           /* }).
            when('/ShowOrder',{
                templateUrl:'partials/ShowOrder.html',
                controller:'ShowOrderController'*/
            }).
            when('/ShowOrder/:orderId',{
                templateUrl:'partials/ShowOrder.html',
                controller:'ShowOrderController'
            }).
            otherwise({
                redirectTo:'/AddCoffeeOrder'
        });
    })

    .controller('CoffeeController', function($scope){
        $scope.message = "Welcome to the Coffee Shop";
    })

    .controller('AddOrderController', function($scope){
        var coffeeList = [
            {
                type:"Caramel Macchiato",
                size:"Venti",
                price:"$5.28"
            },
            {
                type:"French Vanilla White Mocha",
                size:"Grande",
                price:"$4.28"
            },
            {
                type:"Rasberry Iced Latte",
                size:"Tall",
                price:"$3.28"
            }
        ];





    })
    .controller('MenuOrderController', function($scope){
        $scope.msg = "Menu Order";
    })

    .controller('ShowOrderController', function($scope, $routeParams){
        $scope.order_id = $routeParams.orderId;

    })




