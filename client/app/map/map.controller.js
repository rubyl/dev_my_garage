'use strict';

angular.module('garageSaleApp')
  .controller('MapCtrl', function ($scope, NgMap) {
    $scope.garageSale = {
      address: '2700 Pennsylvania Ave, Santa Monica CA 90404',
      photos: [
        { url: 'http://blog.silive.com/latest_news/2009/09/yard.jpg', description: 'Frontyard' },
        { url: 'http://www.ottawacitizen.com/mobile/news/latest-updates/cms/binary/8436087.jpg?size=mobile290', description: 'Items to sale' }
      ],
      products: [
        {
          name: 'purse',
          price: '20',
          photos: [
                   { url: 'http://intheircloset.com/wp-content/uploads/2012/11/valentino-rock-lock-cross-body-bag-black.jpg', description: 'Purse' }
          ]
        }
      ]
    };
    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });
    $scope.message = 'Hello';
  });
