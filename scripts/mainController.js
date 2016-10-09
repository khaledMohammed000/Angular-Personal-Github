/**
 * Created by user-1 on 10/10/2016.
 */
(function(){
    "use strict";
    var app = angular.module('main',[]);

    var MainController = function ($scope,$http) {
        $http.get('https://api.github.com/users/'+'khaledmohammed000')
            .then(function (response) {
            $scope.userData = response.data;
        },function (reason){
            $scope.error = "could not Fetch the user !";
            });
    };
    app.controller("MainController",['$scope','$http',MainController]);
})();
