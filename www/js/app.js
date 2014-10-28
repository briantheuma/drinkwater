// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('ionicApp', ['ionic','ui.slider']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/splash/');

    $stateProvider
        .state('Splash', {
            url: '/splash/',
            templateUrl: 'splash.html'
        })
        .state('Main', {
            url: '/main/',
            controller: 'createCtrl',
            templateUrl: 'main.html'
        })
        .state('Body', {
            url: '/body/',
            controller: 'createCtrl',
            templateUrl: 'body.html'
        })
        .state('Hydration', {
            url: '/hydration/',
            controller: 'createCtrl',
            templateUrl: 'hydration.html'
        })
        .state('Activity', {
            url: '/activity/',
            controller: 'createCtrl',
            templateUrl: 'activity.html'
        })
        .state('Climate', {
            url: '/climate/',
            controller: 'createCtrl',
            templateUrl: 'climate.html'
        })
        .state('Results', {
            url: '/results/',
            controller: 'createCtrl',
            templateUrl: 'results.html'
        })
});


app.factory('$localstorage', ['$window', function($window) {
    return {
        set: function(key, value) {
            $window.localStorage[key] = value;
        },
        get: function(key, defaultValue) {
            return $window.localStorage[key] || defaultValue;
        },
        setObject: function(key, value) {
            $window.localStorage[key] = JSON.stringify(value);
        },
        getObject: function(key) {
            return JSON.parse($window.localStorage[key] || '{}');
        }
    }
}]);

app.controller('createCtrl', function($localstorage,$scope) {

    $scope.Person = JSON.parse(window.localStorage['Person'] || '{}');

    $scope.callPerson = function(){
        console.log($localstorage.getObject('Person'));
    };

    $scope.saveItem = function (thisItem, thisItemValue) {
        $localstorage.setObject('Person', {
            Name: $scope.Person.Name,
            Gender: $scope.Person.Gender,
            Age: $scope.Person.Age,
            Height: $scope.Person.Height,
            Weight: $scope.Person.Weight,
            Intake: $scope.Person.Intake,
            GlassSize: $scope.Person.GlassSize,
            GlassAmount: $scope.Person.GlassAmount,
            StartTime: $scope.Person.StartTime,
            EndTime: $scope.Person.EndTime,
            thisItem: thisItemValue
        });
    };

    //Set default first time values
    if ($scope.Person.Gender == null){
        $scope.Person.Gender = "Male";
    }

    if ($scope.Person.Age == null){
        $scope.Person.Age = 22;
    }

    if ($scope.Person.Height == null){
        $scope.Person.Height = 157;
    }

    if ($scope.Person.Weight == null){
        $scope.Person.Weight = 90;
    }

    if ($scope.Person.Intake == null){
        $scope.Person.Intake = 0.5;
    }

    //Fine tune plus and minus button functions
    $scope.notchDown = function(item,min,step){
        if (step == null){
            step = 1;
        }
        if(min < $scope.Person[item]){
            $scope.Person[item] = $scope.Person[item] - step;
        }
        $scope.saveItem(item, $scope.Person[item]);
    };

    $scope.notchUp = function(item,max,step){
        if (step == null){
            step = 1;
        }
        if(max > $scope.Person[item]){
            $scope.Person[item] = ($scope.Person[item]-step)+(step+step);
        }
        $scope.saveItem(item, $scope.Person[item]);
    };


});

