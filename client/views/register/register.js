(function(){
  'use strict';

  angular.module('yummy')
  .controller('RegisterCtrl', ['$scope', '$location', 'User', function($scope, $location, User){
    $scope.user = {};

    function success(response){
      toastr.success('Registration Successful!');
      $location.path('/login');
    }

    function failure(resonse){
      toastr.error('Failed to Register');
      $scope.user = {};
    }

    $scope.register = function(){
      User.register($scope.user).then(success, failure);
    };
  }]);
})();

