(function(){
'use strict';
angular.module('nameApp', [])
.controller('nameAppController', nameAppController)
.filter('loves', LovesFilter);
nameAppController.$inject = ['$scope', 'lovesFilter'];
function nameAppController($scope, lovesFilter){

$scope.sayHello = function(){
    var msg = "Rajee likes to eat fruits";
    return msg;
};
$scope.sayLovesHello = function(){
    var msg = "Rajee likes to eat fruits";
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


})();
