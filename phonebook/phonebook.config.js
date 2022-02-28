function PhoneBookConfig($stateProvider) {
  'ngInject';

  $stateProvider.state('phonebook', {
    url: '',
    controller: 'PhoneBookCtrl',
    controllerAs: 'vm',
    templateUrl: 'phonebook/phonebook.html',
  });
}

export default PhoneBookConfig;