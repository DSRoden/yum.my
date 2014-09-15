(function(){
  'use strict';

  angular.module('yummy')
  .controller('LoginCtrl', ['$scope', '$location', 'User', function($scope, $location, User){
    $scope.user = {};


    function success(response){
      toastr.success('Login Successful!');
      $location.path('/');
    }

    function failure(resonse){
      toastr.success('Login Failed, try again.');
      $scope.user = {};
    }

    $scope.login = function(){
      User.login($scope.user).then(success, failure);
    };
  }]);
})();

