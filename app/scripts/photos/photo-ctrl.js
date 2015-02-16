
define(["scripts/module", "underscore"], function(app){
    /**
     * The controller for the photos page
     */
    return app.controller("PhotoCtrl", function($scope, $http, $location){
        // -------------------------------------------------------------------
        // Private variables
        // -------------------------------------------------------------------
        var API_KEY = "4072ae071b7042b063476db7b14dac38";
        var URL = "https://api.flickr.com/services/rest/";

        // -------------------------------------------------------------------
        // Scope variables
        // -------------------------------------------------------------------
        $scope.flickr = {
            photos: [],
            searchTerm: "Nature"
        };

        // -------------------------------------------------------------------
        // Private functions
        // -------------------------------------------------------------------

        function loadPhotos(tags){
            $scope.flickr.photos = [];

            $http.get(URL, {
                params: {
                    method: "flickr.photos.search",
                    api_key: API_KEY,
                    tags: $scope.flickr.searchTerm,
                    format: "json",
                    per_page: 20,
                    sort: "interestingness-desc",
                    nojsoncallback: 1,
                    privacy_filter: 1
                }
            }).then(processPhotos)
        }

        // Any post processing? Probably need to generate a URL to the photo
        function processPhotos(resp){
            $scope.flickr.photos = resp.data.photos.photo;

            _.each($scope.flickr.photos, function(photo){
                $http.get(URL, {
                    params: {
                        method: "flickr.photos.getSizes",
                        api_key: API_KEY,
                        format: "json",
                        nojsoncallback: 1,
                        photo_id: photo.id
                    }
                }).then(function(resp){
                    var thumbObjs = resp.data.sizes.size;

                    photo.thumbs = thumbObjs;
                })
            });
        }

        // -------------------------------------------------------------------
        // Public functions
        // -------------------------------------------------------------------
        this.loadPhotos = loadPhotos;
    });
});