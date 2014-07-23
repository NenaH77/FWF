/**
 * Created by NenaH77 on 7/15/14.
 */

angular.module("CoffeeApp").service("coffeeService", function(){

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

this.getCoffee = function(){
    var info = localStorage.getItem("CoffeeStorage");
    coffeeList = JSON.parse(info) || coffeeList;
    return coffeeList;
}

this.addCof= function(c){
        coffeeList.push(c);
        localStorage.setItem("CoffeeStorage", JSON.stringify(coffeeList));

        document.location.hash ="#/list";
};

this.deleteCoffee = function(otherIndex){
    coffeeList.splice(otherIndex,1);
    localStorage.setItem("CoffeeStorage", JSON.stringify(coffeeList));
}

this.getCoffeeAt = function(cI){
    this.getCoffee();
    return coffeeList[cI];
}
});