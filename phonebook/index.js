import angular from 'angular';

// Create the module where our functionality can attach to
let phoneBookModule = angular.module('phonebook', []);

// Include our UI-Router config settings
import PhoneBookConfig from './phonebook.config';
phoneBookModule.config(PhoneBookConfig);

// Controllers
import PhoneBookCtrl from './phonebook.controller';
phoneBookModule.controller('PhoneBookCtrl', PhoneBookCtrl);

export default phoneBookModule;
