
define(["angular", "d3"], function(){
    return angular.module("flickr.app.components.d3Chart", [])
        .directive("d3Chart", function(){
            return {
                restrict: "EA",
                replace: false,
                template: "<svg></svg>",
                scope: {
                    chartData: "="
                },
                link: function($scope, elem, attrs){
                    var chart, xAxis, yAxis;
                    var margin = {top: 20, right: 20, bottom: 30, left: 40},
                        width = 960 - margin.left - margin.right,
                        height = 500 - margin.top - margin.bottom;

                    var x = d3.scale.ordinal()
                        .rangeRoundBands([0, width], .1);

                    var y = d3.scale.linear()
                        .rangeRound([height, 0]);

                    var xAxis = d3.svg.axis()
                        .scale(x)
                        .orient("bottom");

                    var yAxis = d3.svg.axis()
                        .scale(y)
                        .orient("left");

                    var svg = d3.select(elem.find("svg")[0])
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom)
                        .append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                    svg.append("g")
                        .attr("class", "x axis")
                        .attr("transform", "translate(0," + height + ")")
                        .call(xAxis);

                    svg.append("g")
                        .attr("class", "y axis")
                        .call(yAxis)
                        .append("text")
                        .attr("transform", "rotate(-90)")
                        .attr("y", 6)
                        .attr("dy", ".71em")
                        .style("text-anchor", "end")
                        .text("Views");

                    $scope.$watch("chartData", function(newVal){
                        if(newVal && newVal.length > 0){
                            plotChart();
                        }
                    });

                    function plotChart(){
                        console.debug($scope.chartData);
                    }
                }
            }
        });
});