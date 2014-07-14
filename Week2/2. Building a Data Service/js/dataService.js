/**
 * Created by NenaH77 on 7/14/14.
 */

//We need to create a Service Class. In order to do that we need to access the service method off of the active module

angular.module('MyApp').service("dataService", function(){//this app already exists so we don't need to create a new one. Neither do we need to create any dependencies

    var namesArray = ['Van', 'Alexandra', 'Jose', 'Maria'];

    //our 1st method is to be get names
    this.getNames = function (){ //we use this because we want to add it directly to the object(dataService)
        return namesArray;
    }

    this.addName = function(pName){
        namesArray.push(pName);
    }

    this.removeName = function(pName){
        namesArray.splice(namesArray.indexOf(pName),1);
    }
});