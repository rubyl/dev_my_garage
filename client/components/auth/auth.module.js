'use strict';

angular.module('garageSaleApp.auth', [
  'garageSaleApp.constants',
  'garageSaleApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
