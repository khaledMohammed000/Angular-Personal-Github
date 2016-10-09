/**
 * Created by user-1 on 10/10/2016.
 */
(function(){
    "use strict";
    var app = angular.module('main',[]);

    var MainController = function ($scope,$http) {

        $scope.message = "GitHub Viewer";

        $scope.sortOrder="-stargazers_count";
        function onSuccess(response) {
            $scope.userData = response.data;;
            $http.get($scope.userData.repos_url)
                .then(function(response){
                    $scope.repositoryList = response.data;
                },onFailure);
        };

        // function onRepos(response){
        //   $scope.repositoryList = response.data;
        // };

        function onFailure(reason) {
            $scope.error = "could not Fetch the Data !";
        }
        $scope.search = function search() {
            $http.get('https://api.github.com/users/'+$scope.userName)
                .then(onSuccess,onFailure);
        };

    };

    app.controller("MainController",['$scope','$http',MainController]);
})();
