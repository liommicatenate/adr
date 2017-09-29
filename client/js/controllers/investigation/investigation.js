angular
  .module('app')
  .controller('InvestigationCtrl', InvestigationCtrl)

InvestigationCtrl.$inject = ['$scope'];
function InvestigationCtrl($scope) {
  console.log('InvestigationCtrl');
}
