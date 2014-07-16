/**
 * Created by NenaH77 on 7/15/14.
 */

angular.module("MyEmpDirectory").service("dataService", function(){

var EmployeeInfo = [
    {name:"Lori Burton", address:"123 Main Street", city:"Boston", state:"MA", zip:"12345"},
    {name:"Kyle Dubose", address:"4566 University Drive", city:"BoMont", state:"TX", zip:"75945"},
    {name:"Cindy LaRue", address:"2453 Hipster Lane", city:"San Diego", state:"CA", zip:"98215"}
];

this.getInfo = function(){
    var info = localStorage.getItem("EmpStorage");
    EmployeeInfo = JSON.parse(info) || EmployeeInfo;
    return EmployeeInfo;
}

this.addEmployees = function(newItem){
        EmployeeInfo.push(newItem);
        var info = JSON.stringify(EmployeeInfo);
        localStorage.setItem("EmpStorage", info);
}

this.removeEmployee = function(newItem){
    EmployeeInfo.splice(newItem,1);
    var info = JSON.stringify(EmployeeInfo);
    localStorage.setItem("EmpStorage", info);
}
});