"use strict"

define(["angular"], function(angular){
    var app = angular.module("flickr.app", ["ngRoute", "ngAnimate"]);

    // Configure the routing
    app.config(function($routeProvider){

        // Photos
        $routeProvider.when("/photos", {
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