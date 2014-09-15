(function(){
  'use strict';

  angular.module('yummy')
  .controller('NavCtrl', ['$scope', function($scope){
    $scope.$on('authenticated', function(event, email){
      $scope.email = email;
    });
  }]);
})();

