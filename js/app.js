"use strict"; // KEEP IT GANSTA YALLLLL KEEP IT GANSTA!

var app = angular.module('MyBlog', [])
    
app.config(function($interpolateProvider){
    $interpolateProvider.startSymbol("[[");
    $interpolateProvider.endSymbol("]]");    
});

app.controller("testController",function($scope){
    $scope.name = " lorem ipsum jewsum moo sum.";
})

