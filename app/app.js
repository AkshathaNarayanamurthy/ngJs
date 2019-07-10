var myApp = angular.module('myApp', []);

myApp.controller('myAppController', ['$scope', function ($scope) {

    $scope.ninjas = [
        {
            name: 'Yoshi',
            belt: 'Black'
        },
        {
            name: 'Samui',
            belt: 'Yellow'

        },
        {
            name: 'Ryu',
            belt: 'Blue'
        }
    ];

}]);

