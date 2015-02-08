'use strict';

angular.module('writePaintApp')
  .controller('MainCtrl', ['$scope', '$log', function ($scope, $log) {

    $scope.text = '';

    $scope.a = 0;

    $scope.dotSize = 10;

    /**
     * Material design colors
     * @param code
     * @returns {string}
     */
    $scope.getColor = function (code) {
      switch (code % 19) {
        case 0:
          return '#f44336';
          break;
        case 1:
          return '#e91e63';
          break;
        case 2:
          return '#9c27b0';
          break;
        case 3:
          return '#673ab7';
          break;
        case 4:
          return '#3f51b5';
          break;
        case 5:
          return '#2196f3';
          break;
        case 6:
          return '#03a9f4';
          break;
        case 7:
          return '#00bcd4';
          break;
        case 8:
          return '#009688';
          break;
        case 9:
          return '#4caf50';
          break;
        case 10:
          return '#8bc34a';
          break;
        case 11:
          return '#cddc39';
          break;
        case 12:
          return '#ffeb3b';
          break;
        case 13:
          return '#ffc107';
          break;
        case 14:
          return '#ff9800';
          break;
        case 15:
          return '#ff5722';
          break;
        case 16:
          return '#795548';
          break;
        case 17:
          return '#9e9e9e';
          break;
        case 18:
          return '#607d8b';
          break;
      }
    };

    $scope.updateEdgeLength = function () {
      $scope.a = Math.floor(Math.sqrt($scope.text.length));

      var img = document.getElementById('canvas');
      img.setAttribute('width', $scope.a * $scope.dotSize + 'px');
      img.setAttribute('height', $scope.a * $scope.dotSize + 'px');
      var context = img.getContext('2d');

      var row = -1;
      var col = -1;
      for (var i = 0; i < $scope.a * $scope.a; i++) {
        if (i % $scope.a === 0) {
          row++;
          col = 0;
        } else {
          col++;
        }
        context.fillStyle = $scope.getColor($scope.text.charCodeAt(i));
        context.fillRect(col * $scope.dotSize, row * $scope.dotSize, $scope.dotSize / 1.5, $scope.dotSize / 1.5);
      }
    };
  }]);
