angular
  .module('app')
  .controller('CreateGsrCtrl', CreateGsrCtrl)

CreateGsrCtrl.$inject = ['$scope'];
function CreateGsrCtrl($scope) {
  console.log('CreateGsrCtrl');
}
