/**
 * This file creates the main angular module for our app - flickr.app
 *
 * It sets up the ngRoutes for each page, and loads our (Angular) module
 * dependencies as well
 */
define(["angular", "scripts/services/flickr-service", "scripts/components/d3-chart/d3-chart"], function(angular){
    // Include all of our module dependencies here
    var app = angular.module("flickr.app", ["ngRoute", "ngAnimate",
        "flickr.app.services",
        "flickr.app.components.d3Chart"
    ]);

    // Configure the routing
    app.config(function($routeProvider){

        // Photos
        $routeProvider.when("/photos", {
            controller: "PhotoCtrl",
            controllerAs: "ctrl",
            templateUrl: "views/photos.html"
        });

        // Statistics
        $routeProvider.when("/stats", {
            controller: "StatsCtrl",
            controllerAs: "ctrl",
            templateUrl: "views/stats.html"
        });

        // Map
        $routeProvider.when("/map", {
            controller: "MapCtrl",
            controllerAs: "ctrl",
            templateUrl: "views/map.html"
        });
    });
    return app;
});