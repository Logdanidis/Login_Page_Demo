

//==========Start Here==========


app.controller('logoutCtrl', function($scope, $location, $rootScope, $cookieStore){

        $rootScope.uname = $cookieStore.get('uname');
        $scope.logout = function () {
            $cookieStore.put('loggedIn', false);
            $location.path('/login');

        };




});

app.controller('TabsDemoCtrl', function ($scope) {
    $scope.tabs = [
        { title:'Dynamic Title 1', content:'Dynamic content 1' },
        { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];

});

