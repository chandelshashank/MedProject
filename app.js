var app = angular.module('medproject', [ ]);


app.directive('testTitle', function(){
    return {
        restrict:'E',
        templateUrl:'test-title.html'
    };
   });