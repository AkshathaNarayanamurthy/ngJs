var myApp = angular.module('myApp', []);

myApp.controller('myAppController', ['$scope', function ($scope) {

    $scope.ninjas = [
        {
            name: 'Yoshi',
            belt: 'Black',
            availability:true
        },
        {
            name: 'Samui',
            belt: 'Yellow',
            availability:false

        },
        {
            name: 'Ryu',
            belt: 'Blue',
            availability:true
        }
    ];

}]);

