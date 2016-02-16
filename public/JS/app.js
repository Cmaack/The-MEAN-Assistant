var app = angular.module('appointmentApp', [ 'ngAnimate', 'ui.bootstrap', 'ui.bootstrap.datetimepicker']);

// =====================Appointments Controller ============================//
app.controller('AppointmentsController', ['$scope', '$http', function ($scope, $http){

  $http.get('/api/appointments').then(function(response){
      var data = response.data;
      $scope.appointments = data.appointments;
    });

    $scope.newAppointment = {};
      $scope.createAppointment = function(){

        console.log($scope.newAppointment);
        $http.post('/api/appointments', {appointment: $scope.newAppointment}).then(function(response){
          var data = response.data.appointment;
          $scope.appointments.push( data );
          $scope.newAppointment = {};
        });
      };

      $scope.deleteAppointment = function(index) {
          var appointment = $scope.appointments[index];
          $http.delete('/api/appointments/' + appointment._id);
          $scope.appointments.splice(index, 1);
        };
}]);

// =====================DateTimePicker Controller ============================//
app.controller('DateTimePickerDemoCtrl',
function ($scope, $timeout) {
  $scope.dateTimeNow = function() {
    $scope.date = new Date();
  };
  $scope.dateTimeNow();

  $scope.toggleMinDate = function() {
    var minDate = new Date();
    // set to yesterday
    minDate.setDate(minDate.getDate() - 1);
    $scope.minDate = $scope.minDate ? null : minDate;
  };

  $scope.toggleMinDate();

  $scope.dateOptions = {
    showWeeks: false
  };
  app.factory('utils',function(){
    return {
      remove:function(array,value){
    		var index = array.indexOf(value);
    		array.splice(index, 1);
        return array;
      }
    };
  });

  // Disable weekend selection
  $scope.disabled = function(calendarDate, mode) {
    return mode === 'day' && ( calendarDate.getDay() === 0 || calendarDate.getDay() === 6 );
  };

  $scope.open = function($event,opened) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.dateOpened = true;
    console.log('opened');
  };

  $scope.dateOpened = false;
  $scope.hourStep = 1;
  $scope.minuteStep = 1;

  $scope.timeOptions = {
    hourStep: [1, 2, 3],
    minuteStep: [1, 5, 10, 15, 25, 30]
  };

  $scope.showMeridian = true;
  $scope.timeToggleMode = function() {
    $scope.showMeridian = !$scope.showMeridian;
  };

  $scope.$watch("date", function(date) {
    // read date value
  }, true);

  $scope.resetHours = function() {
    $scope.date.setHours(1);
  };
});
