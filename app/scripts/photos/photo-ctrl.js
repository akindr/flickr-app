/**
 * A controller for the photos page.
 */
define(["scripts/module"], function(module){

    return module.controller("PhotoCtrl", function($scope, flickrService){

        // Model object
        $scope.flickr = {
            photos: [],
            searchTerm: "Nature"
        };

        // -------------------------------------------------------------------
        // Private functions
        // -------------------------------------------------------------------

        /**
         * Find photos for the given search term
         */
        function findPhotos(){
            flickrService.getPhotos($scope.flickr.searchTerm).then(function(photos){
                $scope.flickr.photos = photos;
            });
        }

        /**
         * Toggle the display of the EXIF data for the given photo. If it hasn't been loaded,
         * we lazy-load the exif data
         * @param photo
         */
        function toggleExif(photo){
            photo.showExif = !photo.showExif;

            if(photo.showExif && !photo.exifData){
                flickrService.getExifData(photo);
            }
        }

        // Public API
        this.findPhotos = findPhotos;
        this.toggleExif = toggleExif;
    });
});