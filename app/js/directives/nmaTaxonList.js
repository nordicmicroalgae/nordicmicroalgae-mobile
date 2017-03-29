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

angular.module('nma.directives').
  directive('nmaTaxonList', function() {
    return {
      restrict: 'E',
      scope: {
        taxa: '=taxa'
      },
      template:
        '<ul class="taxon-list">' +
          '<li ng-repeat="taxon in taxa">' +
            '<a href="#/taxa/{{taxon.name}}" ng-class="{synonym: taxon.synonym_name}">' +
              '<b><img ng-src="http://media.nordicmicroalgae.org/small/{{taxon.name}}.jpg" alt="" /></b>' +
              '<i>{{taxon.synonym_name && taxon.synonym_name + " (synonym)" || taxon.name}}</i>' +
            '</a>' +
          '</li>' +
        '</ul>'
    };
  });
