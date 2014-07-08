/**
 * Created by NenaH77 on 7/7/14.
 */
function GroceryController($scope){
    $scope.toBuy;

    $scope.groceryList =['Bananas', 'Apple', 'Peaches'];

    $scope.addItem = function(){
        $scope.groceryList.push($scope.toBuy);

        $scope.toBuy = '';
    }
        $scope.deleteItem = function(gItems){
            var item = $scope.groceryList.indexOf(gItems);

            $scope.groceryList.splice(item, 1);
        }
};


