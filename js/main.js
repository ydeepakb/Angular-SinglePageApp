
'use strict';
/**
 * AngularJS Tutorial 1
 * @author deepak yadav
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('digitalWebApp', ['ngRoute', 'ui.bootstrap']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      // Home
      .when("/", {
          templateUrl: "partials/_home.html",
          controller: "storeController"
      })
        .when("/_home", {
            templateUrl: "partials/_home.html",
            controller: "storeController"
        })
      // Pages
      .when("/_about", {
          templateUrl: "partials/_about.html",
          controller: "aboutusController"
      })
      .when("/_faq", {
          templateUrl: "partials/_faq.html",
          controller: "faqController"
      })
         .when("/_offers", {
             templateUrl: "partials/_offer.html",
             controller: "offerController"
         })
      .when("/_contact", {
          templateUrl: "partials/_contact.html",
          controller: "contactController"
      })    
      .when("/_login", {
          templateUrl: "partials/_login.html",
          controller: "loginController"
      })     
      .otherwise("/404", {
          templateUrl: "partials/_404.html",
          controller: "errorController"
      });
}]);



$(document).ready(function () {
    $(document).on('mouseenter', '.mega-dropdown', function () {
        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
        $(this).toggleClass('open');
    });
    $(document).on('mouseleave', '.mega-dropdown', function () {
        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("400");
        $(this).toggleClass('open');
    });

});