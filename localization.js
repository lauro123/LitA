var userLang = navigator.language || navigator.userLanguage;

var indexAPP = angular.module('index', []);
indexAPP.controller('indexController', function ($scope) {
    if(userLang ="es")
    {
        $scope.home = "Inicio";
    }
    else
    {
        $scope.home = "Home";
    }
});