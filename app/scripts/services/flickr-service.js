/**
 * A service to interact with the flickr API.
 */
define(["angular"], function(angular){

   return angular.module("flickr.app.services", [])
       .factory("flickrService", function($http, $q){

           // Flickr API key - TODO: Put these in a .config!
           var API_KEY = "4072ae071b7042b063476db7b14dac38";
           var URL = "https://api.flickr.com/services/rest/";

           // Private functions

           /**
            * Find the photos by interestingness based on a search term
            * @param searchTerm - The tag to search for
            * @returns {$q.promise} - A promise that is resolved when all the photos have been loaded
            */
           function getPhotos(searchTerm){
               var photoDefer = $q.defer();

               $http.get(URL, {
                   params: {
                       method: "flickr.photos.search",
                       api_key: API_KEY,
                       tags: searchTerm,
                       format: "json",
                       per_page: 30,
                       sort: "interestingness-desc",
                       nojsoncallback: 1,
                       privacy_filter: 1,
                       extras: "views,geo,url_s,url_m,url_l,date_taken",
                       has_geo: 1
                   }
               }).then(function(resp){
                   return resp.data.photos.photo;
               }).then(photoDefer.resolve);

               return photoDefer.promise;
           }

           /**
            * Load the exif data from flickr and add it to our model
            * @param photo - the photo model
            */
           function getExifData(photo){
               $http.get(URL, {
                   params: {
                       method: "flickr.photos.getExif",
                       api_key: API_KEY,
                       format: "json",
                       nojsoncallback: 1,
                       photo_id: photo.id
                   }
               }).then(function(resp){
                   photo.exifData =  resp.data.photo;
               });
           }

           /**
            * Get the interesting photos for the given date
            * @param date - Date object
            */
           function getInterestingPhotos(date){
               var dt = getFormattedDate(date);
               var defr = $q.defer();

               $http.get(URL, {
                   params: {
                       method: "flickr.interestingness.getList",
                       api_key: API_KEY,
                       format: "json",
                       nojsoncallback: 1,
                       date: dt,
                       extras: "views",
                       per_page: 10
                   }
               }).then(function(resp){
                   defr.resolve(resp.data.photos.photo);
               });

               return defr.promise;
           }

           // Helper to format the date
           function getFormattedDate(date) {
               var year = date.getFullYear();
               var month = (1 + date.getMonth()).toString();
               month = month.length > 1 ? month : '0' + month;
               var day = date.getDate().toString();
               day = day.length > 1 ? day : '0' + day;
               return year + "-" + month + "-" + day;
           }

           // Public API
           return {
               getPhotos: getPhotos,
               getExifData: getExifData,
               getInterestingPhotos: getInterestingPhotos
           };
       }
   );
});