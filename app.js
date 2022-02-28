import angular from 'angular';
import '@uirouter/angularjs';

// Import your app stylesheets
import './style.css';

// Import your app functionality
import './phonebook';

// Create and bootstrap application
const requires = ['ui.router', 'phonebook'];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);
