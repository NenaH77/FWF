/**
 * Created by NenaH77 on 7/7/14.
 */
function DBController($scope){

    $scope.userName;  //add a property [userName] to scope

    //need to create an array to loop over
    $scope.nameArray = ['Van' , 'Alexandra', 'Jose', 'Esperanza'];

    //pushes Array Names into the ul list
    $scope.addName = function(){
        $scope.nameArray.push($scope.userName);

        //this code allows the person to add additional names to the list
        $scope.userName = '';
    }

    $scope.deleteName = function(deletedName){
       //we need to figure out how to get whatever is passed into the parameter (deletedName) taken out of nameArray

        //Step 1, determine the index
        var idx = $scope.nameArray.indexOf(deletedName);//returns to us the 0 based index of the item if it can find the name in the array

        $scope.nameArray.splice(idx, 1);//splice removes items from an array at whatever index you tell it and can figure out what items you need to remove
    }


}