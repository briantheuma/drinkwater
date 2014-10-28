app.directive('info', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/directives/templates/info-directive.html'
    };
});

app.directive('registrationItem',function(){
    return {
        restrict: 'A',
        templateUrl: 'js/directives/templates/registration-item.html',
        scope: {
            placeName: '@',
            targetItem: '@',
            inputType: '@',
            labelMessage: '@',
            addedClasses: '@',
            disabled: '@',
            ngModel: '='
        }
    };
});

app.directive('registrationButton',function(){
    return {
        restrict: 'A',
        templateUrl: 'js/directives/templates/registration-button.html',
        scope: {
            nextItem: '@',
            ngClick: '='
        }
    };
});

app.directive('numPad',function(){
    return {
        restrict: 'A',
        templateUrl: 'js/directives/templates/numpad.html',
        scope: {
            targetItem: '@',
            ngModel: '=',
            ngClick: '='
        }
    };
});

app.directive('sectionSelect', function(){
    return {
        restrict: 'C',
        templateUrl: 'js/directives/templates/section-select.html',
        scope: {
            ssIcon: '@',
            uiSref: '@'
        }
    };
});