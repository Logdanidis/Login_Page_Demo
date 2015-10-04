var app = angular.module('mainApp', ['ngRoute', 'ui.bootstrap', 'ngCookies']);

app.config(function($routeProvider){
    $routeProvider
        .when('/login',{
            templateUrl: 'login.html'
        })
        .when('/HomePage',{
            resolve: {
                "check": function($location,$cookieStore){
                    if(!$cookieStore.get('loggedIn')){
                        $location.path('/login');
                    }
                }
            },
            templateUrl: 'HomePage.html'
        })
        .otherwise({
            redirectTo: '/login'
        });
    });
