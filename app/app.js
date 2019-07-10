var myApp = angular.module('myApp', []);

myApp.controller('myAppController', ['$scope', function ($scope) {

    $scope.msg = "Hola!!";
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

myApp.directive('exampleDirective', function(){

    return{
        template:"{{msg}}</br><input type='text' ng-model='msg'/>"
    }
});

