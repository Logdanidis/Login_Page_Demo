app.controller('loginCtrl', function($scope, $location, $rootScope, $cookieStore){
    $scope.login = function(){
        if($scope.username == 'admin' && $scope.password == 'admin'){
            $cookieStore.put('uname', $scope.username);
            $cookieStore.put('loggedIn', true);
            $location.path('/HomePage');
        }else{
            alert('God Damn, You Type Wrong Password Again!');
        }
    };
});