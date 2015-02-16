/**
 * Created by Austin on 2/16/2015.
 */

define(["angular"], function(angular){
    var app = angular.module("flickr.app", ["ngRoute"]);

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
            templateUrl: "views/statistics.html"
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