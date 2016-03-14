var template = require('./barGraph.html');
var d3 = require('d3');

let barGraphComponent = function(){
    return{
        restrict: 'E',
            replace: true,
            template,
            scope:{
                posts:"="
            },
            link:function(scope,element){

                //create a new svg element with the specified classes and add the chart to it
                element.append('<svg class="chart"></svg>');

                var width = 420,
                    barHeight = 20;

                scope.$watch('posts',function(nVal,oVal){
                    console.log(nVal);
                    renderChart(nVal);
                });

                renderChart(scope.posts);

                function renderChart(data){

                    var x = d3.scale.linear()
                        .range([0, width]);

                    var chart = d3.select(".chart")
                        .attr("width", width);

                    x.domain([0, d3.max(data, function(d) { return d.value; })]);

                    chart.attr("height", barHeight * data.length);

                    var bar = chart.selectAll("g")
                        .data(data)
                        .enter().append("g")
                        .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

                    bar.append("rect")
                        .attr("width", function(d) { return x(d.value); })
                        .attr("height", barHeight - 1);

                    bar.append("text")
                        .attr("x", function(d) { return x(d.value) - 3; })
                        .attr("y", barHeight / 2)
                        .attr("dy", ".35em")
                        .text(function(d) { return d.value; });

                    function type(d) {
                        d.value = +d.value;
                        return d;
                    }


                }

            },
            controller:function(){
            }
    }
}
module.exports = barGraphComponent;
