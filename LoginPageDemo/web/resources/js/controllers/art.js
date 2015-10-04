
//==========Tab 2==========

//==========Datepicker==========

app.controller('DatepickerDemoCtrl_1_StatisticsByTime', function ($scope) {
    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function () {
        $scope.dt = null;
    };

    //==========Disable weekend selection==========

    $scope.disabled = function(date, mode) {
        return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

    $scope.toggleMin = function() {
        $scope.minDate = $scope.minDate ? null : new Date();
    };
    $scope.toggleMin();

    $scope.open = function($event) {
        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1
    };

    $scope.formats = [ 'dd-MM-yyyy'];
    $scope.format = $scope.formats[0];

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 2);
    $scope.events =
        [
            {
                date: tomorrow,
                status: 'full'
            },
            {
                date: afterTomorrow,
                status: 'partially'
            }
        ];

    $scope.getDayClass = function(date, mode) {
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0,0,0,0);

            for (var i=0;i<$scope.events.length;i++){
                var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    };
});

//==========Edit Time Range Button==========

app.controller('CollapseDemoCtrl', function ($scope) {
    $scope.isCollapsed = true;
});


//==========Timepicker==========

app.controller('TimepickerDemoCtrl_1_StatisticsByTime', function ($scope, $log) {

    //$scope.mytime_1_From = new Date();
    var d = new Date();
    d.setHours( 07 );
    d.setMinutes( 0 );
    $scope.mytime_1_From = d;

    //$scope.mytime_2_To = new Date();
    var d = new Date();
    d.setHours( 21);
    d.setMinutes( 0 );
    $scope.mytime_2_To = d;

    $scope.hstep_1_From = 1;
    $scope.mstep_1_From = 5;

    $scope.options = {
        hstep_1_From: [1],
        mstep_1_From: [ 5]
    };

    $scope.hstep_2_To = 1;
    $scope.mstep_2_To  = 5;

    $scope.options = {
        hstep_2_To : [1],
        mstep_2_To : [ 5]
    };

    $scope.ismeridian = false;
    $scope.toggleMode = function() {
        $scope.ismeridian = ! $scope.ismeridian;
    };

    //$scope.update_1_From = function() {
    //    var d = new Date();
    //    d.setHours( 07 );
    //    d.setMinutes( 0 );
    //    $scope.mytime_1_From = d;
    //};
    //
    //$scope.update_2_To = function() {
    //    var d = new Date();
    //    d.setHours( 21);
    //    d.setMinutes( 0 );
    //    $scope.mytime_2_To = d;
    //};

    $scope.changed_1_From = function () {
        $log.log('Time changed to: ' + $scope.mytime_1_From);
    };

    $scope.changed_2_To = function () {
        $log.log('Time changed to: ' + $scope.mytime_2_To);
    };
});

//==========PrintReportToPDF Button==========

app.controller('PrintReportToPDF_1_StatisticsByTime', function($scope, $rootScope){
    $scope.PrintReportTableToPDF_1 = function(){
        $rootScope.loggedIn = false;
    };
    $scope.PrintReportTableGraphsToPDF_1 = function(){
        $rootScope.loggedIn = false;
    };
    $scope.PrintReportTableToExcel_1 = function(){
        $rootScope.loggedIn = false;
    };
});

//==========Dropdown Button==========

app.controller('DropdownCtrl', function ($scope, $log) {
    //$scope.items = [
    //    'The first choice!',
    //    'And another choice for you.',
    //    'but wait! A third!'
    //];

    $scope.status = {
        isopen: true
    };

    $scope.toggled = function(open) {
        $log.log('Dropdown is now: ', open);
    };

    //$scope.toggleDropdown = function($event) {
    //    $event.preventDefault();
    //    $event.stopPropagation();
    //    $scope.status.isopen = !$scope.status.isopen;
    //};
});