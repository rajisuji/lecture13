(function(){
'use strict';
angular.module('nameApp', [])
.controller('nameAppController', nameAppController)
.filter('loves', LovesFilter)
.filter('truth', truthFilter);
nameAppController.$inject = ['$scope', 'lovesFilter'];
function nameAppController($scope, lovesFilter){

$scope.sayHello = function(){
    var msg = "Rajee likes to eat healthy snacks";
    return msg;
};
$scope.sayLovesHello = function(){
    var msg = "Rajee likes to eat healthy snacks";
    msg = lovesFilter(msg);
    return msg; 
};
}
function LovesFilter(){
    return function(input){
        input = input || "";
        input = input.replace("likes","loves");
        return input;
    };
}
function truthFilter(){
    return function(input, target, replace){
        input = input || "";
        input = input.replace(target, replace);
        return input;
    };
}


})();
