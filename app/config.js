require.config({
    shim: {
        angular: {
            exports: "angular"
        },
        "angular-route": {
            deps: [
                "angular"
            ]
        },
        bootstrap: {
            deps: [
                "jquery"
            ]
        }
    },
    paths: {
        underscore: "lib/underscore/underscore",
        bootstrap: "lib/bootstrap/dist/js/bootstrap",
        jquery: "lib/jquery/dist/jquery",
        requirejs: "lib/requirejs/require",
        "angular-route": "lib/angular-route/angular-route",
        angular: "lib/angular/angular",
        "angular-animate": "lib/angular-animate/angular-animate",
        d3: "lib/d3/d3"
    },
    packages: [

    ]
});
