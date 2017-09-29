angular
  .module('app')
  .controller('OccurrenceCtrl', OccurrenceCtrl)

OccurrenceCtrl.$inject = ['$scope'];
function OccurrenceCtrl($scope) {
  console.log('OccurrenceCtrl');
}
