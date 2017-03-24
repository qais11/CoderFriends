var app = angular.module('myApp' , ['ui.router'])

app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    $httpProvider.interceptors.push('myHttpInterceptor');
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: './templates/login.html'
        })
        .state('home', {
            url: '/home',
            templateUrl: './templates/home.html'
        })

        .state('friends', {
            url: '/friends/:github_username',
            templateUrl: './templates/friend.html'
        });

});

app.factory('myHttpInterceptor', function($q) {
    return {
        // optional method
        'responseError': function(rejection) {
            if (rejection.status == 403) {
                document.location = '/';
                return;
            }
            return $q.reject(rejection);
        }
    };
});
