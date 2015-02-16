require.config({
    shim: {
        angularjs: {
            exports: "angular"
        },
        bootstrap: {
            deps: ["jquery"]
        }
    },
    paths: {
        underscore: "lib/underscore/underscore",
        bootstrap: "lib/bootstrap/dist/js/bootstrap",
        jquery: "lib/jquery/dist/jquery",
        requirejs: "lib/requirejs/require",
        angularjs: "lib/angularjs/angular"
    },
    packages: [

    ]
});
