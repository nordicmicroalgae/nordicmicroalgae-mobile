/*
 Nordic Microalgae Mobile. http://m.nordicmicroalgae.org

 Author: Andreas Loo, info@andreasloo.se
 Copyright (c) 2013 SMHI, Swedish Meteorological and Hydrological Institute
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
  controller('TaxonFilterCtrl', ['$scope', 'Filter', 'Query',
    function TaxonFilterCtrl($scope, Filter, Query) {
      Filter.get().then(function(filters) {
        $scope.filters = filters;
      });

      $scope.apply = function() {
        Filter.save().then(updateQuery);
        $scope.pref.filters.show = false;
      };

      $scope.reset = function() {
        Filter.reset();
        $scope.pref.filters.show = false;
      };

      function updateQuery(config) {
        var queryFilters = {};
        angular.forEach(config.Groups, function(filters) {
          angular.forEach(filters, function(filter) {
            if (filter.Selected) {
              queryFilters[filter.Filter] = queryFilters[filter.Filter] || [];
              queryFilters[filter.Filter].push(filter.Value);
            }
          });
        });
        Query.page = 1;
        Query.filters = queryFilters;
      }
    }
  ]);
