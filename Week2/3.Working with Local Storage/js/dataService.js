/**
 * Created by NenaH77 on 7/14/14.
 */

//We need to create a Service Class. In order to do that we need to access the service method off of the active module

angular.module('MyApp').service("dataService", function(){
    var namesArray = ['Van', 'Alexandra', 'Jose', 'Maria'];

    //in this activity, we need to save the new names added & save into our local storage
    this.getNames = function (){
        //everything in local storage needs to be a string. Therefore the easy way to go from string to object is to use JSON
        var str = localStorage.getItem("NameLS");//in the argument, the get and set name will need to match
        /*if this is the users 1st time in our site, their will not be anything in the local storage for the time being;
        therefore, we need to use the OR value. If this is the users 1st time, we will use a default (which will be the namesArray)*/
        namesArray = JSON.parse(str) || namesArray;
        return namesArray;

        /*whenever we modify to add new names into the system, we need to make sure we add the changes
        to our saved and removed sections*/
    }

    //to save into the local storage, we need to do the opposite
    this.addName = function(pName){
        namesArray.push(pName);
        //We need to take namesArray and put that back into a string
        var str = JSON.stringify(namesArray);
        localStorage.setItem("NameLS",str);
    }

    this.removeName = function(pName){
        namesArray.splice(namesArray.indexOf(pName),1);
        var str = JSON.stringify(namesArray);
        localStorage.setItem("NameLS",str);
    }
});