'use strict';

angular.module('garageSaleApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tables', {
        url: '/tables',
        templateUrl: 'app/tables/tables.html',
        controller: 'TablesCtrl'
      });
  });
