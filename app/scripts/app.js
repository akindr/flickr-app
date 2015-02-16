/**
 Handles boostrapping the angular stuff via Angular AMD
 **/

require(["angular", "angular-route", "angular-animate", "bootstrap", "underscore",
    // Our scripts -- Add to this as we create new views and services
    "scripts/module", "scripts/photos/photo-ctrl", "scripts/map/map-ctrl", "scripts/stats/stats-ctrl"],

    // Bootstrap the angular app
    function(angular){
        var $html = angular.element(document.getElementsByTagName('html')[0]);
        angular.element().ready(function() {
            // bootstrap the app manually
            angular.bootstrap(document, ['flickr.app']);
    });
});
