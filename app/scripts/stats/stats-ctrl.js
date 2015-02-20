
define(["scripts/module", "underscore"], function(app){
    /**
     * The controller for the statistics page
     */
    return app.controller("StatsCtrl", function($scope, $q, flickrService){

        $scope.flickr = {
            numDays: 7,
            photoStats: []
        };

        // Private functions
        function getInterestingPhotos(){
            var date;
            var currentDay = new Date().getDate();
            var photoPromises = [];

            // Fetch the photos for the last 7 days
            for(var i = 1; i < $scope.flickr.numDays + 1; i++){
                date = new Date();
                date.setDate(currentDay - i);

                photoPromises.push(flickrService.getInterestingPhotos(date));
            }

            // Once we have the stats for each day, update our model
            $q.all(photoPromises).then(function(photos){
                var stats = [];
                for(var j = 0; j < photos.length; j++){
                    stats.push(photos[j]);
                }

                $scope.flickr.photoStats = stats;
            });
        }

        // Public API
        this.getInterestingPhotos = getInterestingPhotos;
    });
});