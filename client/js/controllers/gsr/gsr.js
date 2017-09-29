angular
  .module('app')
  .controller('GsrCtrl', GsrCtrl)

GsrCtrl.$inject = ['$scope'];
function GsrCtrl($scope) {
  console.log('GsrCtrl');
}
