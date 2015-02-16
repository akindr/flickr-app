/**
 Handles boostrapping the angular stuff via Angular AMD
 **/

require(["angularjs", "bootstrap", "underscore", "module", "scripts/main/main-ctrl"], function(angular){
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
        // bootstrap the app manually
        angular.bootstrap(document, ['flickr.app']);
    });
});
