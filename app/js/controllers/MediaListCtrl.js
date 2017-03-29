/*
 Nordic Microalgae Mobile. http://m.nordicmicroalgae.org

 Copyright (c) 2013-2017 SMHI, Swedish Meteorological and Hydrological Institute
 License: MIT License as follows:

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

/*global angular*/
'use strict';

angular.module('nma').
  controller('MediaListCtrl', ['$scope', '$routeParams', 'Media',
    function MediaListCtrl($scope, $routeParams, Media) {
      $scope.result = {
        media: [],
        page: 0,
        pages: 0,
        total: 0
      };

      var params = {
        page: 1,
        per_page: 30
      };

      if ('gallery' in $routeParams) {
        $scope.gallery = params['filters[Gallery]'] = $routeParams.gallery;
      }

      if ('artist' in $routeParams) {
        $scope.artist = params['filters[Artist]'] = $routeParams.artist;
      }

      $scope.more = function() {
        params.page++;
      };

      function update() {
        Media.query(params, function(result) {
          $scope.result.total = result.total;
          $scope.result.page  = result.page;
          $scope.result.pages = result.pages;

          if (result.page > 1) {
            for (var i = 0; i < result.media.length; i++) {
              $scope.result.media.push(result.media[i]);
            }
          } else {
            $scope.result.media = result.media;
          }
        });
      }

      $scope.$watch(function() { return params; }, update, true);
    }
  ]);
