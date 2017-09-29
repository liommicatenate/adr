angular
  .module('app')
  .controller('CreateInvestigationCtrl', CreateInvestigationCtrl)

CreateInvestigationCtrl.$inject = ['$scope'];
function CreateInvestigationCtrl($scope) {
  console.log('CreateInvestigationCtrl');
}
