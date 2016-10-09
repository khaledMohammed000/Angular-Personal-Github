/**
 * Created by user-1 on 10/10/2016.
 */
(function(){
    "use strict";
    var app = angular.module('main',[]);

    var MainController = function ($scope,$http) {

        $scope.message = "GitHub Viewer";

        function onSuccess(response) {
            $scope.userData = response.data;
        };

        function onFailure(reason) {
            $scope.error = "could not Fetch the user !";
        }
        $scope.serch = function search() {
            $http.get('https://api.github.com/users/'+$scope.userName)
                .then(onSuccess,onFailure);
        };

    };
    app.controller("MainController",['$scope','$http',MainController]);
})();
