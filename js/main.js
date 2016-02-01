// Make sure shim jQuery first
import $ from 'jquery';
import 'bootstrap-sass';
import angular from 'angular';
import 'angular-ui-router';


// Config
import config from './config';


// Controllers
import mainController from './controllers/mainController';

// Services
import mainService from './services/mainService';


angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('mainController', mainController)
  .service('mainService', mainService)
;