//==========Home Tab==========

app.controller('DatepickerDemoCtrl', function ($scope) {
    $scope.today = function () {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };
});


app.controller('PrintReportToPDF_1_StatisticsByDate', function ($scope, $rootScope) {
    $scope.PrintReportToPDF_1 = function () {
        $rootScope.loggedIn = false;


    };
});
