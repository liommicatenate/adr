angular
  .module('app')
  .controller('CreateOccurrenceCtrl', CreateOccurrenceCtrl)

CreateOccurrenceCtrl.$inject = ['$scope'];
function CreateOccurrenceCtrl($scope) {
  console.log('CreateOccurrenceCtrl');
}
